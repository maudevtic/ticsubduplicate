$(document).ready(function () {

    $("#table_inspect").dataTable();
    $("#table_audit").dataTable();
    $("#table_test").dataTable();

    $('#inspection').show();
    $('#audit').hide();
    $('#test').hide();

    $('#btn_inspect').on('click', function () {
        $('#inspection').show();
        $('#audit').hide();
        $('#test').hide();
    });

    $('#btn_audit').on('click', function () {
        $('#inspection').hide();
        $('#audit').show();
        $('#test').hide();
    });

    $('#btn_test').on('click', function () {
        $('#inspection').hide();
        $('#audit').hide();
        $('#test').show();
    });

    $('body').on('click', '.cancel_inspection', function (event) {
        var ins_id = $(this).attr('idc');
        if (confirm('Sind Sie sicher, dass Sie diese Buchung stornieren möchten?')) {
            $.ajax({
                url: 'php/cancel.php',
                type: 'POST',
                async: false,
                data: {
                    cancel: 1,
                    idd: ins_id
                },
                success: function (result) {
                    alert(result);
                }
            });

        } else {
            event.preventDefault();
        }
    });
});
