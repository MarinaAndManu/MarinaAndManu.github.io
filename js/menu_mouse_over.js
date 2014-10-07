/**
 * Stackoverflow: 19618103
 * http://jsfiddle.net/ravikumaranantha/Wtfpx/2/
 */
var mouse_position;
var animating = false;

$(document).mousemove(function (e) {
   if (animating) {return;}
   mouse_position = e.clientX;

   if (mouse_position <= 100) {
     animating = true;
     $('#cms_bar').animate({left: 0, opacity: 0.9}, 200, function () {
        animating = false;
      });
   } else if (mouse_position > 100) {
      animating = true;
      $('#cms_bar').animate({left: -80, opacity: 0.7}, 500, function () {
          animating = false;
       });
   }
});
