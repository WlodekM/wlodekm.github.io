async function getJSONData(url) {
	const response = await fetch(url);
	const jsonData = await response.text();
	return(Promise.resolve(jsonData));
  }
  
var data_
$(document).ready(function(){
	$("body").prepend(`<div class=top><h1>Meower Posts</h1> <button id="reload">Reload</button></div>`)
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
			if(element["unfiltered_p"]) {
				$("#posts").append(`<div class="post"><p><span id=username>${element["u"]}</span>:${element["unfiltered_p"]}</p></div>`)
				console.log(`${element["u"]}:${element["unfiltered_p"]}`)
			} else {
				console.log(`${element["p"]}`)
				if(element["u"] in ["Discord","Webhook","Revower"]) {
					element["u"] = element["p"].split(":")[0]
					element["p"] = element["p"].split(":").slice(1).join(":")
				}
				$("#posts").append(`<div class="post"><p><span id=username>${element["u"]}</span>:${element["p"]}</p></div>`)
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