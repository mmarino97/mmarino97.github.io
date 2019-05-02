

AOS.init({
  easing: 'ease', // default easing for AOS animations

})

if (iosVersion >= 7) {
    $(document).scroll(function() {
        $('#background').css('background-position', '0px ' + $(document).scrollTop() + 'px');
    });
