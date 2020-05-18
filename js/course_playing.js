$(document).ready(function(){
    $('#summernote').summernote({
        toolbar: [
                    ['font', ['bold', 'italic', 'underline', 'clear']],
                    ['insert', ['link', 'picture', 'hr']]
                ],
        height: 200
    });
    $('.list-note').slimScroll({height:500});
});