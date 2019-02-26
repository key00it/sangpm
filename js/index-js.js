$(window).scroll(function() {
	$('#line-scroll').css("weight", (window.scrollY / window.pageYOffset)*100 + "%")
	if (window.scrollY > 72) {
		$('.navbar').eq(0).css("background", "rgb(59, 50, 139, 0.9)")
		$('.navbar').eq(0).css("box-shadow", "0 2px 20px #222")
	} else {
		$('.navbar').eq(0).css("background", "none")
		$('.navbar').eq(0).css("box-shadow", "none")
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
