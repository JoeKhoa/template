$(document).ready(function(){
	$('.btn-group[data-toggle="switch"]').each(function (index) {
        var group = $(this),
        	btns = group.find('.btn-radio');
        btns.bind('click',function(e){
        	var $t = $(this);
        	if(!$t.hasClass('active')){
        		btns.removeClass('active');
        		$t.addClass('active');
        		console.log($t.val());
        	}
        });
    });


    var lis=$('.payment-tab-nav').children();
    $('.payment-tab-nav').find('label').bind('click',function(e){
        var li = $(this).parent(),
        	input = $($(this).find('input')[0]);
        if(li.hasClass('active')){
            return true;
        }else{
            lis.removeClass('active');
            li.addClass('active');
            var div = $('#payment_method_'+input.val());
            console.log(div);
            $('.tab-panel').removeClass('active');
            if(div.length)div.addClass('active');
        }
    });

    $('input[type="radio"][name="invoice"]').on('change',function(e){
        var $t= $(this);
        if($t.val()=="1"){
            $('#blockInvoice').show();
        }else{
            $('#blockInvoice').hide();
        }
    });

});