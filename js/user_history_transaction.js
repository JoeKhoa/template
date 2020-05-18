function init() {
    $('#package').multiselect({
        includeSelectAllOption: true,
        allSelectedText: 'Tất cả',
        selectAllText: 'Tất cả',
        nonSelectedText: 'Bình thường',
        nSelectedText: 'Đã chọn',
        numberDisplayed: 0,
        delimiterText: '; '
    });
    $('#paymenttype').multiselect({
        includeSelectAllOption: true,
        allSelectedText: 'Tất cả',
        selectAllText: 'Tất cả',
        nonSelectedText: 'Bình thường',
        nSelectedText: 'Đã chọn',
        numberDisplayed: 0,
        delimiterText: '; '
    });
    $('#paymentstatus').multiselect({
        includeSelectAllOption: true,
        allSelectedText: 'Tất cả',
        selectAllText: 'Tất cả',
        nonSelectedText: 'Bình thường',
        nSelectedText: 'Đã chọn',
        numberDisplayed: 0,
        delimiterText: '; '
    });

    // $('#day_order').multiselect({
    //     includeSelectAllOption: true,
    //     allSelectedText: 'Tất cả',
    //     selectAllText: 'Tất cả',
    //     nonSelectedText: 'Bình thường',
    //     nSelectedText: 'Đã chọn',
    //     numberDisplayed: 1,
    //     delimiterText: '; '
    // });
    // $('#name_order').multiselect({
    //     includeSelectAllOption: true,
    //     allSelectedText: 'Tất cả',
    //     selectAllText: 'Tất cả',
    //     nonSelectedText: 'Bình thường',
    //     nSelectedText: 'Đã chọn',
    //     numberDisplayed: 1,
    //     delimiterText: '; '
    // });
}

var changed = false;
$('#txtDateFrom').datepicker({
    format: 'dd/mm/yyyy',
    startView: 2

}).on('show', function(e) {
    statusDateOpen = true;
}).on('hide', function() {
    setTimeout(function() {
        statusDateOpen = false;
    }, 600);
}).on('changeDate', function(ev) {
    $(this).datepicker('hide');
    $("[name='date']").attr("value", "['" + $("[name='date_from']").val() + "','" + $("[name='date_to']").val() + "']");
});

$('#txtDateTo').datepicker({
    format: 'dd/mm/yyyy',
    startView: 2
}).on('show', function(e) {
    statusDateOpen = true;
}).on('hide', function() {
    setTimeout(function() {
        statusDateOpen = false;
    }, 600);
}).on('changeDate', function(ev) {
    $(this).datepicker('hide');
    $("[name='date']").attr("value", "['" + $("[name='date_from']").val() + "','" + $("[name='date_to']").val() + "']");
});

$(document).ready(function() {
    init();

});