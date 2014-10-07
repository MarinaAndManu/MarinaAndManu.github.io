/**
 * Stackoverflow: 19618103
 * http://jsfiddle.net/ravikumaranantha/Wtfpx/2/
 */
var mouse_position;
var animating = false;

//GET MOUSE POSITION
$(document).mousemove(function (e) {
   //$("body").on("mousemove", function(mouse_pointer) {
   //console.log(mouse_pointer.pageX - $(window).scrollLeft());
   //mouse_position = mouse_pointer.pageX - $(window).scrollLeft();
   if (animating) {
       return;
   }
   mouse_position = e.clientX;

   // console.log(mouse_position);
   if (mouse_position <= 100) {
       //SLIDE IN MENU
       animating = true;
       $('#cms_bar').animate({
           left: 0,
           opacity: 1
       }, 200, function () {
           animating = false;
       });
       // console.log('menu shown');
   } else if (mouse_position > 100) {
       animating = true;
       $('#cms_bar').animate({
           left: -100,
           opacity: 0
       }, 500, function () {
           animating = false;
       });
       // console.log('menu hidden');
   }
});
