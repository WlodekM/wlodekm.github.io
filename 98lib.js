/* add theese for it to work
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<script src="https://ianrenton.github.io/web3point1/code.js"></script>
*/
// New window: show and bring to top
//<!--
function newWindow(element) {
  $(element).show();
  $(element).selectWindow();
}


$( function() {
  // Window drag
  $( ".window" ).draggable({ handle: "div.title-bar" });

  // Window resize
  $( ".window" ).resizable({ handles: "all", alsoresize: ".window-body" });

  // Window close
  $('.windowclose').on("click", function () { $(this).parents('div.window').hide(); });

  // Window click-to-bring-to-top
  (function() {
      var highest = 100;

      $.fn.selectWindow = function() {
          // Make top
          this.css('z-index', ++highest);
          // Make this window selected and others not
          this.addClass('selectedwindow');
          $('.window').not(this).each(function(){
              $(this).removeClass('selectedwindow');
           });
      };
  })();
  $('.window').mousedown(function() {
      $(this).selectWindow();
  });

  // Icon single click
  $('.icon').click(function() {
    $(this).find('p').toggleClass('highlight');
  });
} );
// make _ button work
function foldElement(tid){
  let btn = document.getElementById(`${tid}content`);
  if (btn) {
      let disabled = btn.hasAttribute('hidden');
      if (disabled) {
        btn.removeAttribute("hidden");
      } else {
        btn.setAttribute("hidden", "");
      }
  }
}
function foldWindow(tid){
  let btn = document.getElementById(tid);
  if (btn) {
      let disabled = btn.hasAttribute('hidden');
      if (disabled) {
        btn.removeAttribute("hidden");
      } else {
        btn.setAttribute("hidden", "");
      }
  }
}