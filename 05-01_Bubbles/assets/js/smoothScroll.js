// http://www.paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery


$(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.smoothScroll').fadeIn();
    } else {
      $('.smoothScroll').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.smoothScroll').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});


//
http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing');
  });
});