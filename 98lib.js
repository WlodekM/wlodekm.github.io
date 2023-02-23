
console.log("┍━━━━━━━━━━━━━━━━━━━┑");
console.log("│ 98LIB.js  started │");
console.log("│      loading      │");
console.log("│                   │");
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  console.log("│drag Element loaded│");
  console.log("│                   │");

  function closewindow(tid){
    var windowelem = document.getElementById(tid)
    windowelem.remove()
  }
  console.log("│  Closing  loaded  │");
  console.log("│                   │");
  function resizableElement(tid){
    tid.style.resize="both"
    tid.style.overflow="auto"
  }
  console.log("│   Resize loaded   │");
  console.log("│                   │");
  function foldElement(tid){
    let btn = document.getElementById(tid+'content');
    if (btn) {
        let disabled = btn.hasAttribute('hidden');
        if (disabled) {
          btn.removeAttribute("hidden");
        } else {
          btn.setAttribute("hidden", "");
        }
    }
  }
  console.log("│  Folding  loaded  │");
  console.log("│                   │");
/*timeElem = getElementById('localtime')
var timer = new Date();
timeElem.innerHTML = timer.toLocaleTimeString('en-US');
  console.log("│    Time loaded    │");
  console.log("│                   │");
  console.log("│                   │");*/
  console.log("│        End        │");
  console.log("┕━━━━━━━━━━━━━━━━━━━┙");