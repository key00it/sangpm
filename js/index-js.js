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

// filter 2

// let modalId = $('#image-gallery');

// $(document)
// .ready(function () {

// 	loadGallery(true, 'a.thumbnail');

//     //This function disables buttons when needed
//     function disableButtons(counter_max, counter_current) {
//     	$('#show-previous-image, #show-next-image')
//     	.show();
//     	if (counter_max === counter_current) {
//     		$('#show-next-image')
//     		.hide();
//     	} else if (counter_current === 1) {
//     		$('#show-previous-image')
//     		.hide();
//     	}
//     }

//     /**
//      *
//      * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
//      * @param setClickAttr  Sets the attribute for the click handler.
//      */

//      function loadGallery(setIDs, setClickAttr) {
//      	let current_image,
//      	selector,
//      	counter = 0;

//      	$('#show-next-image, #show-previous-image')
//      	.click(function () {
//      		if ($(this)
//      			.attr('id') === 'show-previous-image') {
//      			current_image--;
//      	} else {
//      		current_image++;
//      	}

//      	selector = $('[data-image-id="' + current_image + '"]');
//      	updateGallery(selector);
//      });

//      	function updateGallery(selector) {
//      		let $sel = selector;
//      		current_image = $sel.data('image-id');
//      		$('#image-gallery-title')
//      		.text($sel.data('title'));
//      		$('#image-gallery-image')
//      		.attr('src', $sel.data('image'));
//      		disableButtons(counter, $sel.data('image-id'));
//      	}

//      	if (setIDs == true) {
//      		$('[data-image-id]')
//      		.each(function () {
//      			counter++;
//      			$(this)
//      			.attr('data-image-id', counter);
//      		});
//      	}
//      	$(setClickAttr)
//      	.on('click', function () {
//      		updateGallery($(this));
//      	});
//      }
//  });

// // build key actions
// $(document)
// .keydown(function (e) {
// 	switch (e.which) {
//       case 37: // left
//       if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
//       	$('#show-previous-image')
//       	.click();
//       }
//       break;

//       case 39: // right
//       if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
//       	$('#show-next-image')
//       	.click();
//       }
//       break;

//       default:
//         return; // exit this handler for other keys
//     }
//     e.preventDefault(); // prevent the default action (scroll / move caret)
// });

// //Filter Button

// $(document).ready(function(){

// 	$(".filter-button").click(function(){
// 		var value = $(this).attr('data-filter');

// 		if(value == "todo")
// 		{
// 			$('.filter').show('1000');
// 		}
// 		else
// 		{
// 			$(".filter").not('.'+value).hide('3000');
// 			$('.filter').filter('.'+value).show('3000');

// 		}
// 	});

// });

// end filter 2

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