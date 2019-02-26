$(window).scroll(function() {
	$('#line-scroll').css("weight", (window.scrollY / window.pageYOffset)*100 + "%")
	if (window.scrollY > 72) {
		$('.navbar').eq(0).css("background", "rgb(59, 50, 139, 0.9)")
		$('.navbar').eq(0).css("box-shadow", "0 2px 20px #222")
      $('#go-to-top').css("opacity", "0.5")
	} else {
		$('.navbar').eq(0).css("background", "none")
		$('.navbar').eq(0).css("box-shadow", "none")
      $('#go-to-top').css("opacity", "0")
	}
});

function live(a) {
	for (var i = 0; i < $('.tab').length ; i++) {
		$('.tab').eq(i).removeClass("active");
		$('.live-img').eq(i).removeClass("active");
	}
	$('.tab').eq(a-1).addClass("active");
	$('.live-img').eq(a-1).addClass("active");
}

window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

$(function() {
	var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
	$('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
	$('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
	$('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
	$('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
	$('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
	$('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
	window.filterizr = f;
});

jQuery(document).ready(function( $ ) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});

$('#go-to-top').click(function(){ 
      $('html,body').animate({ scrollTop: 0 }, 400);
      return false; 
});

// mess

$(document).ready(function() {
   function detectmob() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
         return true;
      } else {
         return false;
      }
   }
   var t = {
      delay: 125,
      overlay: $(".fb-overlay"),
      widget: $(".fb-widget"),
      button: $(".fb-button")
   };
   setTimeout(function() {
      $("div.fb-livechat").fadeIn()
   }, 8 * t.delay);
   if (!detectmob()) {
      $(".ctrlq").on("click", function(e) {
         e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({
            bottom: 0,
            opacity: 0
         }, 2 * t.delay, function() {
            $(this).hide("slow"), t.button.show()
         })) : t.button.fadeOut("medium", function() {
            t.widget.stop().show().animate({
               bottom: "30px",
               opacity: 1
            }, 2 * t.delay), t.overlay.fadeIn(t.delay)
         })
      })
   }
});

// end mess

//scroll top

$('#go-to-top').click(function(){ 
      $('html,body').animate({ scrollTop: 0 }, 400);
      return false; 
});

//end scroll top

$(document).ready(function() {
   if (window.scrollY > 72) {
      $('.navbar').eq(0).css("background", "rgb(59, 50, 139, 0.9)")
      $('.navbar').eq(0).css("box-shadow", "0 2px 20px #222")
     $('#go-to-top').css("opacity", "0.5")
   }
})