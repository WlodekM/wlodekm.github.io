// Work in progress
// javascript: req = new XMLHttpRequest(); req.open('GET', 'https://wlodekm.github.io/stuff/JGsWebsiteAchivementManadger.js'); req.onload = function() { eval(this.responseText); }; req.send();
// Still dont know how to call this
var wlodekmCheats = {}
wlodekmCheats.page = document.getElementById("pagearea")
// Function for creating the menu element
wlodekmCheats.createCheatMenuElement = (function(){
  let elem = document.createElement("div");
  elem.id = "wlodekmCheatMenu";
  return(wlodekmCheats.page.appendChild(elem))
});
wlodekmCheats.menu = wlodekmCheats.createCheatMenuElement()
// Function for addin an element ( broken rn :( )
wlodekmCheats.createElement = (function(type,eid){
  let elem = document.createElement(type);
  elem.id = eid;
  return(wlodekmCheats.menu.appendChild(elem))
});

var testButton = wlodekmCheats.createElement("button","testButton")
testButton.innerText = "Hello world!"
