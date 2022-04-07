// Carousel Controls

$(document).ready(function () {
	$('#slider-left-content-previous').on('click', function(){
		$('#slider-left-content-previous-control').trigger('click');
	});
	$('#slider-left-content-next').on('click', function(){
		$('#slider-left-content-next-control').trigger('click');
	});

	$('#slider-right-content-previous').on('click', function(){
		$('#slider-right-content-previous-control').trigger('click');
	});
	$('#slider-right-content-next').on('click', function(){
		$('#slider-right-content-next-control').trigger('click');
	});
});


// Set Footer Copyright Year

$(document).ready(function () {
	Webflow.push(function() {
		$('.copyright-year').text(new Date().getFullYear());
	});
});


// Add <sup> around all ®

$(document).ready(function () {
	$('body :not(script,sup)').contents().filter(function() {
		return this.nodeType === 3;
	}).replaceWith(function() {
		return this.nodeValue.replace(/[™®©]/g, '<sup>$&</sup>');
	});
});



// Form submit success animation trigger

$(document).ready(function () {
	$('.form').submit(()=>{	
		setTimeout(()=>{
			$('.form-success_trigger').click();
	  },1000);
	});
});



// IF User is on IE Make all Cards D Block

$(document).ready(function () {
	$(function(){
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident.*rv\:11\./)){ 
			$(".card, .card-body").addClass("ie");
		}
	});
});



