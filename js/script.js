$(document).ready(function () {
	//Data Table JS
	$('#example, #example-1').DataTable( {
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'Details for '+data[0]+' '+data[1];
					}
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'table'
				} )
			}
		}
	} );
	
	
	//Custom Select
	$('.custom-select').select2({
		minimumResultsForSearch: Infinity,
	});
	
	
	
	function toggleIcon(e) {
		$(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
	
	
	//$('[data-toggle="popover"]').popover({ trigger: 'hover' });
	$('.v-tab-head .v-tab-link').click(tabHandler);
	$('.v-tab-head.v-tab-link').click(tabHandler);
});

var tabHandler = function (e) {
	e.preventDefault();
	var target = $($(this).data('target')),
	tabLink = $('.v-tab-link[data-target="' + $(this).data('target') + '"]');
	tabPanelToShow(tabLink);
	tabLinkToActivate(target);
};

var tabPanelToShow = function (elem) {
	$('.v-tab-link').removeClass('active').parent().find(elem).addClass('active');
};

var tabLinkToActivate = function (elem) {
	$('.v-tab-pane').children('div').removeClass('in').parent().find(elem).addClass('in');
};

//FLOATING LABEL
(function ($) {
	'use strict';
	$.fn.floatingLabel = function (option) {
		var parent = $(this).closest('.form-group');
		
		if (parent.length) {
			switch (option) {
				case 'focusin':
				$(this).closest('.form-group').addClass('control-focus');
				break;
				case 'focusout':
				$(this).closest('.form-group').removeClass('control-focus');
				break;
				case 'ChangeFortText':
				if (this.val()) {
					parent.addClass('control-highlight');
				}
				else {
					parent.removeClass('control-highlight');
				}
				break;
				default:
				$(this).closest('.form-group').addClass('control-highlight');
				break;
			}
		}
		
		return this;
	};
}($));

$(document).ready(function () {
	'use strict';
	$(document).on('change', function () {
		$('.form-group .form-control').each(function () {
			$(this).floatingLabel('ChangeFortText');
		});
	});
	
	$('.form-group .form-control').each(function () {
		$(this).floatingLabel('ChangeFortText');
	});
	
	$(document).on('change', '.form-group .form-control', function () {
		$(this).floatingLabel('ChangeFortText');
	});
	
	$(document).on('focusin', '.form-group .form-control', function () {
		$(this).floatingLabel('focusin');
	});
	
	$(document).on('focusout', '.form-group .form-control', function () {
		$(this).floatingLabel('focusout');
	});
	
});


//Date Picker JS
$(function () {
	$("#datepicker").datepicker({ 
        autoclose: true, 
		clearBtn: true
	})//.datepicker('update', new Date());
});

//ToolTip
$('[data-toggle="tooltip"]').tooltip();


//Top Menu Slick Slider
$('.icon-menu-slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 7,
	slidesToScroll: 7,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
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
