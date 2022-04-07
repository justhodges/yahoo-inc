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



// Single Add Field

$(document).ready(function() {
	var buttonAdd = $("#add-preference"); /*Add Button ID*/
	var buttonRemove = $("#remove-preference"); /*Remove Button ID*/
	var className = ".dynamic-preference"; /*Class on input-group or wrapper to be copied*/
	var count = 0;
	var field = "";
	var maxFields = 5;

	function totalFields() {
		return $(className).length;
	}

	function addNewField() {
		count = totalFields() + 1;
		field = $("#dynamic-preference-1").clone(); /*ID on input-group or wrapper to be copied*/
		field.attr("id", "dynamic-preference-" + count); /*Should be relative to the ID above*/
		field.children("label").attr("for", "additional-preference" + count); /*New attribute name formatting*/
		field.children("input").attr("id", "additional-preference" + count); /*New attribute name formatting*/
		field.children("input").attr("data-name", "additional-preference" + count); /*New attribute name formatting*/
		field.children("input").attr("name", "additional-preference" + count); /*New attribute name formatting*/
		field.find("input").val("");
		$(className + ":last").after($(field));
	}

	function removeLastField() {
		if (totalFields() > 1) {
			$(className + ":last").remove();
		}
	}

	function enableButtonRemove() {
		if (totalFields() === 2) {
			buttonRemove.removeAttr("disabled");
			buttonRemove.addClass("btn-remove_show");
		}
	}

	function disableButtonRemove() {
		if (totalFields() === 1) {
			buttonRemove.attr("disabled", "disabled");
			buttonRemove.removeClass("btn-remove_show");
		}
	}

	function disableButtonAdd() {
		if (totalFields() === maxFields) {
			buttonAdd.attr("disabled", "disabled");
			buttonAdd.removeClass("btn-remove_show");
		}
	}

	function enableButtonAdd() {
		if (totalFields() === (maxFields - 1)) {
			buttonAdd.removeAttr("disabled");
			buttonAdd.addClass("btn-remove_show");
		}
	}

	buttonAdd.click(function() {
		addNewField();
		enableButtonRemove();
		disableButtonAdd();
	});

	buttonRemove.click(function() {
		removeLastField();
		disableButtonRemove();
		enableButtonAdd();
	});
});



// Multi Add Field

$(document).ready(function() {
	var buttonAdd = $("#add-option"); /*Add Button ID*/
	var buttonRemove = $("#remove-option"); /*Remove Button ID*/
	var className = ".dynamic-option"; /*Class on input-group or wrapper to be copied*/
	var count = 0;
	var field = "";
	var maxFields = 5;

	function totalFields() {
		return $(className).length;
	}

	function addNewField() {
		count = totalFields() + 1;
		field = $("#dynamic-option-1").clone(); /*ID on input-group or wrapper to be copied*/
		field.attr("id", "dynamic-option-" + count); /*Should be relative to the ID above*/
		/*Update first field attributes*/
		field.find("label").eq(0).attr("for", "additional-option" + count);
		field.find("input").eq(0).attr("id", "additional-option" + count);
		field.find("input").eq(0).attr("data-name", "additional-option" + count);
		field.find("input").eq(0).attr("name", "additional-option" + count);
		field.find("input").eq(0).val("");
		/*Update second field attributes*/
		field.find("label").eq(1).attr("for", "additional-example" + count);
		field.find("input").eq(1).attr("id", "additional-example" + count);
		field.find("input").eq(1).attr("data-name", "additional-example" + count);
		field.find("input").eq(1).attr("name", "additional-example" + count);
		field.find("input").eq(1).val("");
		$(className + ":last").after($(field));
	}

	function removeLastField() {
		if (totalFields() > 1) {
			$(className + ":last").remove();
		}
	}

	function enableButtonRemove() {
		if (totalFields() === 2) {
			buttonRemove.removeAttr("disabled");
			buttonRemove.addClass("btn-remove_show");
		}
	}

	function disableButtonRemove() {
		if (totalFields() === 1) {
			buttonRemove.attr("disabled", "disabled");
			buttonRemove.removeClass("btn-remove_show");
		}
	}

	function disableButtonAdd() {
		if (totalFields() === maxFields) {
			buttonAdd.attr("disabled", "disabled");
			buttonAdd.removeClass("btn-remove_show");
		}
	}

	function enableButtonAdd() {
		if (totalFields() === (maxFields - 1)) {
			buttonAdd.removeAttr("disabled");
			buttonAdd.addClass("btn-remove_show");
		}
	}

	buttonAdd.click(function() {
		addNewField();
		enableButtonRemove();
		disableButtonAdd();
	});

	buttonRemove.click(function() {
		removeLastField();
		disableButtonRemove();
		enableButtonAdd();
	});
});



// Step Form with Validator

$(document).ready(function() {

	// Check Tab 1 Required Fields
	var requiredFieldsTab1 = [];

	// add required inputs to required fields array
	$('#form-step1').find('input').each(function() {
		if ($(this).prop('required')) {
			requiredFieldsTab1.push(this);
		}
	});

	$('.to_tab2').on('click', function(evt) {
		evt.preventDefault();

		var fieldsFilled = 0;

		jQuery.each(requiredFieldsTab1, function(i, val) {
			// check only required fields on first step
			var inpObjId = $(val).attr('id');
			var inpObj = document.getElementById(inpObjId);
			if (!inpObj.checkValidity()) {
				inpObj.reportValidity();
				return false;
			} else {
				// log the field if it has a value
				fieldsFilled++;
			}
		});

		if (fieldsFilled == requiredFieldsTab1.length) {
			$('.tab2').triggerHandler('click');
		}

	});

	// Check Tab 2 Required Fields
	var requiredFieldsTab2 = [];

	// add required inputs to required fields array
	$('#form-step2').find('input').each(function() {
		if ($(this).prop('required')) {
			requiredFieldsTab2.push(this);
		}
	});

	$('.to_tab3').on('click', function(evt) {
		evt.preventDefault();

		var fieldsFilled = 0;

		jQuery.each(requiredFieldsTab2, function(i, val) {
			// check only required fields on second step
			var inpObjId = $(val).attr('id');
			var inpObj = document.getElementById(inpObjId);
			if (!inpObj.checkValidity()) {
				inpObj.reportValidity();
				return false;
			} else {
				// log the field if it has a value
				fieldsFilled++;
			}
		});

		if (fieldsFilled == requiredFieldsTab2.length) {
			$('.tab3').triggerHandler('click');
		}

	});

	// Click Tab 1
	$('.to_tab1').on('click', function(evt) {
		evt.preventDefault();
		$('.tab1').triggerHandler('click');
	});
});


// International Phone Number

$(document).ready(function() {
	var input = $(".int-phone");

	  input.intlTelInput({
	    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/9.0.6/js/utils.js" });

	  input.on("change", function () {
	    input.intlTelInput("setNumber", input.val());
		});
});



// Owl Responsive Carousel

$(document).ready(function() {
	$('.card-slider').owlCarousel({
		stagePadding: 0,
		margin: 20,
		dots: false,
		nav: true,
		navText: [$('#card-slider_left'), $('#card-slider_right')],
		navContainer: '.card-slider_nav',
		center: false,
		touchDrag: true,
		freeDrag: false,
		loop: false,
		startPosition: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		autoWidth: false,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			}
		}
	})
	
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
