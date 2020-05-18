$(document).ready(function(){
	$('.btn-accordion').bind('click',function(e){
		var $t=$(this),
			table = $t.parents('.table-accordion'),
			btns = table.find('.btn-accordion'),
			rparent = $t.parents('tr'),
			rparents = table.find('tr:not(.accordion-content-row)'),
			target = $t.parents('tr').next(),
			rows = table.find('.accordion-content-row');

		
		if(target.hasClass('active')){
			target.removeClass('active');
			$t.removeClass('active');
			rparent.removeClass('open');
		}else{
			rows.removeClass('active');
			target.addClass('active');
			btns.removeClass('active');
			rparents.removeClass('open');
			$t.addClass('active');
			rparent.addClass('open');
		}
	});

});