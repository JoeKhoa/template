$(document).ready(function(){
    $('html').addClass('counter-page');
    var endDate = new Date('Thu Mar 03 2016')
    $('.countdown').final_countdown({
        'start': Date.now()/1000,
        'end': endDate.getTime()/1000,
        'now': Date.now()/1000,
        seconds: {
            borderColor: '#f8a12f',
            borderWidth: '8'
        },
        minutes: {
            borderColor: '#f8a12f',
            borderWidth: '8'
        },
        hours: {
            borderColor: '#f8a12f',
            borderWidth: '8'
        },
        days: {
            borderColor: '#f8a12f',
            borderWidth: '8'
        }
    });
    //console.log(endDate.getTime());
});