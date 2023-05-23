// Work in progress
// javascript: req = new XMLHttpRequest(); req.open('GET', 'https://wlodekm.github.io/stuff/JGsWebsiteAchivementManadger.js'); req.onload = function() { eval(this.responseText); }; req.send();
// Still dont know how to call this
var wlodekmCheats = {}
// Function for creating the menu element
wlodekmCheats.createCheatMenuElement = (function(){
  let elem = document.createElement("div");
  elem.id = "wlodekmCheatMenu";
  return(document.body.appendChild(elem))
});
wlodekmCheats.menu = wlodekmCheats.createCheatMenuElement()
