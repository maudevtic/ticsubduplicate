$(document).ready(function () {
    $('#page1').show();
    $('#page2').hide();
    $('#page2').hide();
    $('#page3').hide();
    $('#page4').hide();
    $('#page5').hide();


    $('#next1').on('click', function () {
        $('#page1').hide(500);
        $('#page2').show(500);
    });

    $('#next2').on('click', function () {
        $('#page2').hide(500);
        $('#page3').show(500);
    });

    $('#next3').on('click', function () {
        $('#page3').hide(500);
        $('#page4').show(500);
    });

    $('#next4').on('click', function () {
        $('#page4').hide(500);
        $('#page5').show(500);
    });

    $('#back2').on('click', function () {
        $('#page1').show(500);
        $('#page2').hide(500);
    });

    $('#back3').on('click', function () {
        $('#page2').show(500);
        $('#page3').hide(500);
    });

    $('#back4').on('click', function () {
        $('#page3').show(500);
        $('#page4').hide(500);
    });
    $('#back5').on('click', function () {
        $('#page4').show(500);
        $('#page5').hide(500);
    });
});
