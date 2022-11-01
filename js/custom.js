(function($) {
"use strict"; 
 
    var rart = rart || {};

    /*===================================================================================*/
    /*  isMobile                                                                         */
    /*===================================================================================*/

    var isMobile = function() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    /*===================================================================================*/
    /*  PARALLAX                                                                         */
    /*===================================================================================*/

    rart.parallax = function()
    {
      function parallax(){
          if ( $().parallax ) {
              $('.parallax').each(function(){
                  $(this).parallax("50%", 0.3);
              })
          }
      }
      if(!isMobile())
      {
          parallax();
          $(window).resize(function(){
              parallax();
          });
      }
    };
    $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this); 
          console.log('$anchor>',$anchor);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 68
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

$(document).ready(function(){
// Top nav bar check active
	$("header .navbar .nav li") .click (function(){
	  	if ($(this).hasClass("active")) 
	  	{
	  	}
	  	else 
	  	{
	  		$(this) .addClass("active");
	  		$(this).siblings('li').removeClass("active");
	  	}
	  });
// Top nav bar end
// Dropdown menu
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
// End Dropdown menu
/*--------------------swipe-menu------------------*/
    $('.swipe-control').click(function(){
        if($('body').hasClass('ind'))
        {
            $('body').removeClass('ind');
            $('.swipe').stop(true).animate({'right':'-237'},500,'easeOutCirc');
            $('.swipe').removeClass('open');
        }
        else
        {
            if($('.icon-search').hasClass('active'))
            {
                $('.search-form form').stop(true).slideToggle();
                $('.icon-search').toggleClass('active');
            }   
            if($('.main-wishlist-cart').hasClass('active'))
            {
                $('.main-wishlist-cart').removeClass('active');
                $('.cart-dropdown').stop(true).slideUp();
            }   
            $('body').addClass('ind');
            $('.swipe').addClass('open');
            $('.swipe').stop(true).animate({'right':'0'},500,'easeOutCirc');
        }   
    });
    $('.swipe-menu ul').find('li.parent').append('<strong></strong>');

    $(".swipe-menu ul li").click(function(event) {
        if (event.srcElement = event.currentTarget) {
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                $(this).children("ul").stop(true).slideUp();
                $(this).children('strong').removeClass('opened');
            }
            else
            {
                $(this).siblings(0).removeClass('active');
                $(this).siblings(0).find('ul').stop(true).slideUp();
                $(this).siblings(0).find('strong').removeClass('opened');
                
                $(this).addClass('active');
                $(this).children("ul").stop(true).slideDown();
                $(this).children('strong').addClass('opened');
            }
            event.stopPropagation();
        }
    });
/*-------------------complete swipe-menu------------------*/
// Banner Slick slider
    $(".banner-slider").slick({
          dots: true,
          infinite: true,
          autoplay:true,
          nextArrow: '<i class="slick-prev"></i>',
          prevArrow: '<i class="slick-next"></i>',
        });
// End banner slick-slider
// Popular product section start
    $('.popular-slider ul').slick({
      infinite: false,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       ]
    });

    $('.popular-slider-second ul').slick({
      infinite: false,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       ]
    });
//Popular product end
// Rating
    $(':radio').change(function() {
	  console.log('New star rating: ' + this.value);
	});
// Rating section end
// Best offer section
    $('.offer-slider').slick({
      dots: true,
      infinite: false,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       ]
    });
// Best offer section end
// Brand section start
    $('.brand-logo').slick({
      dots: true,
      infinite: false,
      nextArrow: '<i class="slick-prev"></i>',
      prevArrow: '<i class="slick-next"></i>',
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       ]
    });
// Brand section end
// Support section start
    $(".support .support-menu-item .navbar-toggle") .click(function(){
        if ($(this).find("span").hasClass("glyphicon-plus")) 
        {
          $(this).find("span").addClass("glyphicon-minus").removeClass("glyphicon-plus");
          $(this).parents(".support-menu").siblings(".support-menu-item").find(".collapse").removeClass("in");
          $(this).parents(".support-menu").siblings(".support-menu-item").find(".navbar-toggle >span").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        }
        else
        {
          $(this).find("span").addClass("glyphicon-plus").removeClass("glyphicon-minus");
        }
  });
// Support section end
// click to back top start...............................
    $(document).on("scroll",function () 
    {
      if ($(this).scrollTop() > 100) 
      {
        $('#back-top').fadeIn();
      } 
      else 
      {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top a').click(function ()
    {
      $('body,html').stop(false, false).animate({
        scrollTop: 0
      }, 5000);
      return false;
    });
    // Back to top
    $('#back-top a').click(function () {
        $('body,html').stop(false, false).animate({
          scrollTop: 0
        }, 800);
        return false;
      });
 // click to back top end...............................

});
})(jQuery);
