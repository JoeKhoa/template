function init() {
    $('#man_level').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'Tất cả',
            selectAllText: 'Tất cả',
            nonSelectedText: 'Bình thường',
            nSelectedText: 'Đã chọn',
            numberDisplayed: 0,
            delimiterText: ','
    });
    $('#man_progress').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'Tất cả',
            selectAllText: 'Tất cả',
            nonSelectedText: 'Bình thường',
            nSelectedText: 'Đã chọn',
            numberDisplayed: 0,
            delimiterText: ','
    });
    // $('#sorting_name').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
    // });
    // $('#sorting_date').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
    // });
    // $('#sorting_date_expired').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
    // });
    // $('#sorting_date_completed').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
    // });
    $('#man_test').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'Tất cả',
            selectAllText: 'Tất cả',
            nonSelectedText: 'Bình thường',
            nSelectedText: 'Đã chọn',
            numberDisplayed: 0,
            delimiterText: ','
    });
    $('#man_test_name').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'Tất cả',
            selectAllText: 'Tất cả',
            nonSelectedText: 'Bình thường',
            nSelectedText: 'Đã chọn',
            numberDisplayed: 0,
            delimiterText: ','
    });
    $('#man_test_file').multiselect({
            includeSelectAllOption: true,
            allSelectedText: 'Tất cả',
            selectAllText: 'Tất cả',
            nonSelectedText: 'Bình thường',
            nSelectedText: 'Đã chọn',
            numberDisplayed: 0,
            delimiterText: ','
    });
    // $('#sorting_date_input').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
    // });
    // $('#sorting_name_test').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
    // });
    // $('#sorting_test_point').multiselect({
    //         includeSelectAllOption: true,
    //         allSelectedText: 'Tất cả',
    //         selectAllText: 'Tất cả',
    //         nonSelectedText: 'Bình thường',
    //         nSelectedText: 'Đã chọn',
    //         numberDisplayed: 1,
    //         delimiterText: ','
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