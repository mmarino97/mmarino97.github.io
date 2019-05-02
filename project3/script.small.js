$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
  $('.parallax').css('background-position', 'left ' + ((scrolledY)) + 'px');
});
