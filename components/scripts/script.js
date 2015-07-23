$(function() {

  var topoffset = 43;

  //window height
  var wheight = $(window).height(); //get height of the window

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#features').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#features"]').addClass('active');
    } //windowpos

    if (windowpos > $('#results').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#results"]').addClass('active');
    } //windowpos

    if (windowpos > $('#facts').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#facts"]').addClass('active');
    } //windowpos

    if (windowpos > $('#prices').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#prices"]').addClass('active');
    } //windowpos

    if (windowpos > $('#enroll').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#enroll"]').addClass('active');
    } //windowpos

  }); //window scroll
 
	
});//on load