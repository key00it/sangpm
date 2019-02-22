$(window).scroll(function() {
	$('#line-scroll').css("weight", (window.scrollY / window.pageYOffset)*100 + "%")
	if (window.scrollY > 72) {
		$('.navbar').eq(0).css("background", "rgba(8,2,63,0.9)")
		$('.navbar').eq(0).css("box-shadow", "0 5px 20px #222")
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

$(document).ready(function(){

	$(".filter-button").click(function(){
		var value = $(this).attr('data-filter');

		if(value == "all")
		{
			$('.filter').show('1000');
		}
		else
		{
			$(".filter").not('.'+value).hide('3000');
			$('.filter').filter('.'+value).show('3000');

		}
	});

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");

});

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}