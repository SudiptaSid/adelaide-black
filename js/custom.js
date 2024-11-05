// Banner Slider
$('#banner_slider').owlCarousel({
    margin:20,
    items: 1,
    nav:false,
    navText : ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"], 
    dots:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
})
// Service Slider
$('#service_slider').owlCarousel({
    margin:20,
    items: 1,
    nav:false,
    navText : ["<i class='flaticon-back'></i>","<i class='flaticon-next'></i>"], 
    dots:true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 40000000,
    autoplayHoverPause: true
})
// Fixed Menu
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".menu").addClass("fixed_menu");
    } else {
        $(".menu").removeClass("fixed_menu");
    }
});
// Smooth Scroll
// Select all links with hashes
$('.scroll')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// To Top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
// Load more Events
$(document).ready(function () {
    size_li = $(".events .nav li").size();
    x=6;
    $('.events .nav li:lt('+x+')').show();
    $('.loadMore3').click(function () {
        x= (x+2 <= size_li) ? x+2 : size_li;
        $('.events .nav li:lt('+x+')').show();
    });
});
// Load more Blog
$(document).ready(function () {
    size_lia = $(".blog .nav li").size();
    y=4;
    $('.blog .nav li:lt('+y+')').show();
    $('.loadMore2').click(function () {
        y= (y+2 <= size_lia) ? y+2 : size_lia;
        $('.blog .nav li:lt('+y+')').show();
    });
});
// Load more Gallery
$(document).ready(function () {
    size_lib = $(".gallery .gal_item li").size();
    z=6;
    $('.gallery .gal_item li:lt('+z+')').show();
    $('.loadMore').click(function () {
        z= (z+3 <= size_lib) ? z+3 : size_lib;
        $('.gallery .gal_item li:lt('+z+')').show();
    });
});
// Lightbox
$(function(){
    var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
});
// Event Responsive
$(".event_call").click(function(){
    $("#even_listi").toggleClass("even_listi_vi");
});
$(".events .nav-pills li").click(function(){
    $("#even_listi").toggleClass("even_listi_vi");
});
// Blog Responsive
$(".blog_call").click(function(){
    $("#blog_listi").toggleClass("blog_listi_vi");
});
$(".blog .nav-pills li").click(function(){
    $("#blog_listi").toggleClass("blog_listi_vi");
});