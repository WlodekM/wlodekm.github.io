async function getJSONData(url) {
	const response = await fetch(url);
	const jsonData = await response.text();
	return(Promise.resolve(jsonData));
  }
  
var data_
$(document).ready(function(){
	$("body").prepend(`<div class=top><h1>Meower Posts</h1> <div id=controls><label for="badwords">Allow bad words:</label><input type="checkbox" id="badwords"><div id=spacer style="width:50px;"></div><button id="reload">Reload</button></div></div>`)
	reload()
	$("#reload").click(function(){
		$("#posts").empty();
		reload()
	});

});
function ghome(data) {
		data_ = JSON.parse(data)
		data_copy = JSON.parse(data)
		data_["autoget"].forEach(element => {
		try {
			if(element["unfiltered_p"] && (document.getElementById("badwords").checked)) {
				$("#posts").append(`<div class="post"><span id=username>${element["u"]}</span><p>${element["unfiltered_p"]}</p></div>`)
				console.log(`${element["u"]}${element["unfiltered_p"]}`)
			} else {
				console.log(`${element["p"]}`)
				if(["Discord","Webhook","Revower"].includes(element["u"])) {
					element["u"] = element["p"].split(":")[0]
					element["p"] = element["p"].split(":").slice(1).join(":")
				}
				$("#posts").append(`<div class="post"><span id=username>${element["u"]}</span><p>${element["p"]}</p></div>`)
			}
		} catch(err) {
			console.log(`ERROR ON:${element}`);
		}
		});
	
}
function reload() {
	getJSONData('https://api.meower.org/home')
	.then((data) => {ghome(data)})
}