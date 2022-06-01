$(document).ready(function () {
    $('.formcli').hide();

    $("#Inspection_Date").datepicker({
        startDate: "today",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    });

});

$("#Inspection_Date").change(function () {
    var selectedDate = $(this).val();

    if (selectedDate != "") {
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var ins = $("#today").val();
        var ship = $("#Inspection_Date").val();
        var foo_date1 = getDateFromFormat(ins, "M/d/y");
        var foo_date2 = getDateFromFormat(ship, "M/d/y");
        var diff_date = Math.round((foo_date2 - foo_date1) / days);
        //alert(diff_date);
        if (diff_date <= 1) {
            alert("You are requesting a Service within 24 hours and our minimun time availability is 48 hours, but we'll do our best to perform this service. However, we may charge you additional fees for immediate inspection.");
        }

        $('#Shipment_Date').datepicker("remove");
        $('#Shipment_Date').datepicker({
            startDate: selectedDate,
            autoclose: true
        });
        $('#Shipment_Date').val("");
        $("#conf_insdate").val(selectedDate)
    } else {
        $('#Shipment_Date').datepicker({
            startDate: "today",
            calendarWeeks: true,
            autoclose: true,
            todayHighlight: true
        });
    }
});

$(document).ready(function () {
    $('#Inspection_Service').on('change', function () {
        var services = $(this).val();
        if (services == "Container Loading Inspection (CLI)") {
            $('.formncli').hide();
            $('.formcli').show();
            $('#sInspection_Service').val(services);
            $('form.formncli').attr('id', '');
            $('form.formcli').attr('id', 'fileupload');

            $('#uploadattachments_cli').click(function () {
                var attreq = $("#attreq_cli").val();
                if (attreq == 1) {
                    alert("Booking Success!");
                    $('.formcli').submit();
                    return true;
                }
            });

            $(function () {
                'use strict';

                // Initialize the jQuery File Upload widget:
                $('#fileupload').fileupload({
                    // Uncomment the following to send cross-domain cookies:
                    //xhrFields: {withCredentials: true},
                    url: 'server/php/'
                });
                /*$('#fileupload').bind('fileuploadstop', function (e) {
                	alert("Booking Success!");
                	$('.formcli').submit();
                	}
                );*/

                $('#fileupload')
                    .bind('fileuploadstarted', function (e) {
                        alert("Your Attachment are being uploaded, kindly wait for the Booking Success message");
                        $('#upload_loading_cli').show();
                    })
                    .bind('fileuploadstop', function (e) {
                        alert("Booking Success!");
                        $('.formcli').submit();
                    });
                // Enable iframe cross-domain access via redirect option:
                $('#fileupload').fileupload(
                    'option',
                    'redirect',
                    window.location.href.replace(
                        /\/[^\/]*$/,
                        '/cors/result.html?%s'
                    )
                );

                if (window.location.hostname === 'blueimp.github.io') {
                    // Demo settings:
                    $('#fileupload').fileupload('option', {
                        url: '//jquery-file-upload.appspot.com/',
                        // Enable image resizing, except for Android and Opera,
                        // which actually support image resizing, but fail to
                        // send Blob objects via XHR requests:
                        disableImageResize: /Android(?!.*Chrome)|Opera/
                            .test(window.navigator.userAgent),
                        maxFileSize: 999000,
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
                    });
                    // Upload server status check for browsers with CORS support:
                    if ($.support.cors) {
                        $.ajax({
                            url: '//jquery-file-upload.appspot.com/',
                            type: 'HEAD'
                        }).fail(function () {
                            $('<div class="alert alert-danger"/>')
                                .text('Upload server currently unavailable - ' +
                                    new Date())
                                .appendTo('#fileupload');
                        });
                    }
                } else {
                    // Load existing files:
                    $('#fileupload').addClass('fileupload-processing');
                    $.ajax({
                        // Uncomment the following to send cross-domain cookies:
                        //xhrFields: {withCredentials: true},
                        url: $('#fileupload').fileupload('option', 'url'),
                        dataType: 'json',
                        context: $('#fileupload')[0]
                    }).always(function () {
                        $(this).removeClass('fileupload-processing');
                    }).done(function (result) {
                        $(this).fileupload('option', 'done')
                            .call(this, $.Event('done'), {
                                result: result
                            });
                    });
                }

            });
        }
    });
});

$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');
    allBackBtn = $('.backBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();

        }

    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='url'],textarea, email,select,select[readonly],input[type='hidden']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            //if (!curInputs[i].validity.valid){
            if (curInputs[i].hasAttribute('required') && curInputs[i].value === '') {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
                $("#" + $(curInputs[i]).attr('id') + "Error").show("fast");

            } else {
                $("#" + $(curInputs[i]).attr('id') + "Error").hide("fast");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    allBackBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            backStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],textarea, select,select[readonly],input[type='hidden']"),
            isValid = true;



        if (isValid)
            backStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }
}

var allowedExtensions = {
    '.zip': 1,
    '.jpg': 1,
    '.png': 1,
    '.gif': 1,
    '.eps': 1,
    '.pdf': 1,
    '.doc': 1,
    '.docx': 1,
    '.xls': 1,
    '.xlsx': 1,
    '.ppt': 1,
    '.pptx': 1,
    '.ai': 1,
    '.zip': 1,
    '.rar': 1,
    '.ZIP': 1,
    '.JPG': 1,
    '.JPEG': 1,
    '.PNG': 1,
    '.GIF': 1,
    '.EPS': 1,
    '.PDF': 1,
    '.DOC': 1,
    '.DOCX': 1,
    '.XLS': 1,
    '.XLSX': 1,
    '.PPT': 1,
    '.PPTX': 1,
    '.AI': 1,
    '.ZIP': 1,
    '.RAR': 1
};

function checkExtension(filename) {
    var match = /\..+$/;
    var ext = filename.match(match);
    if (allowedExtensions[ext]) {
        return true;
    } else {
        alert("Some files have an invalid file extension");
        //will clear the file input box.
        document.getElementById('file').value = null;
        return false;
    }
}


function checkdate() {
    if (document.getElementById('changedate').checked) {
        document.getElementById('datechange').value = "Do not Allow Factory to Change Date";
    } else {
        document.getElementById('datechange').value = "Allow factory to Change date";
    }
}
$(document).ready(function () {
    $('#name_of_product').on('change', function (event) {
        event.preventDefault();
        var prodname = $(this).val();
        var cid = $('option:selected', this).attr('idd');
        $('#name_of_product').toggleClass('loader');
        $.ajax({
            url: 'php/ajax.php',
            type: 'POST',
            datatype: 'JSON',
            data: {
                psearch: 1,
                product: prodname,
                compid: cid
            },
            success: function (show) {
                //$('#name_of_product').val(show.plist_name);
                $('#product_category').val(show.plist_category);
                $('#PO').val(show.plist_po);
                $('#unit').val(show.plist_unit);
                $('#brand').val(show.plist_brand);
                $('#color_material_finish').val(show.plist_cmf);
                $('#technical_specifications_rating').val(show.plist_spec);
                $('#shipping_mark').val(show.plist_ship);
                $('#conf_prod').val(show.plist_name);
                $('#name_of_product').toggleClass('loader');
            }
        });
    });
});
$('#qty1').on('keyup', function () {
    var qua = $(this).val();
    var spelvl = $('#spe_lvl').val();
    var inlvl = $('#ins_lvl').val();

    if (inlvl == "") {} else {
        if (inlvl == 'N1') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsize').val(2);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsize').val(2);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsize').val(3);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsize').val(5);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsize').val(5);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsize').val(8);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsize').val(13);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsize').val(20);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsize').val(32);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsize').val(50);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsize').val(80);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsize').val(125);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsize').val(200);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsize').val(315);
            } else if (qua >= 500001) {
                $('#sampsize').val(315);
            }
        } else if (inlvl == 'N2') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsize').val(2);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsize').val(3);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsize').val(5);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsize').val(8);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsize').val(13);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsize').val(20);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsize').val(32);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsize').val(50);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsize').val(80);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsize').val(125);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsize').val(200);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsize').val(315);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsize').val(500);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsize').val(800);
            } else if (qua >= 500001) {
                $('#sampsize').val(1250);
            }
        } else if (inlvl == 'N3') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsize').val(3);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsize').val(5);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsize').val(8);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsize').val(13);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsize').val(20);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsize').val(32);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsize').val(50);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsize').val(80);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsize').val(125);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsize').val(200);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsize').val(315);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsize').val(500);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsize').val(800);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsize').val(1250);
            } else if (qua >= 500001) {
                $('#sampsize').val(2000);
            }
        }
    }

    if (spelvl == "") {

    } else {
        if (spelvl == 'S1') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsizespec').val(2);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsizespec').val(2);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsizespec').val(2);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsizespec').val(2);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsizespec').val(3);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsizespec').val(3);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsizespec').val(3);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsizespec').val(3);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsizespec').val(5);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsizespec').val(5);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsizespec').val(5);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsizespec').val(5);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsizespec').val(8);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsizespec').val(8);
            } else if (qua >= 500001) {
                $('#sampsizespec').val(8);
            }
        } else if (spelvl == 'S2') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsizespec').val(2);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsizespec').val(2);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsizespec').val(2);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsizespec').val(3);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsizespec').val(3);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsizespec').val(3);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsizespec').val(5);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsizespec').val(5);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsizespec').val(5);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsizespec').val(8);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsizespec').val(8);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsizespec').val(8);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsizespec').val(13);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsizespec').val(13);
            } else if (qua >= 500001) {
                $('#sampsizespec').val(13);
            }
        } else if (spelvl == 'S3') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsizespec').val(2);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsizespec').val(2);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsizespec').val(3);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsizespec').val(3);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsizespec').val(5);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsizespec').val(5);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsizespec').val(8);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsizespec').val(8);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsizespec').val(13);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsizespec').val(13);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsizespec').val(20);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsizespec').val(20);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsizespec').val(32);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsizespec').val(32);
            } else if (qua >= 500001) {
                $('#sampsizespec').val(50);
            }
        } else if (spelvl == 'S4') {
            if (qua >= 2 && qua <= 8) {
                $('#sampsizespec').val(2);
            } else if (qua >= 9 && qua <= 15) {
                $('#sampsizespec').val(2);
            } else if (qua >= 16 && qua <= 25) {
                $('#sampsizespec').val(3);
            } else if (qua >= 26 && qua <= 50) {
                $('#sampsizespec').val(5);
            } else if (qua >= 51 && qua <= 90) {
                $('#sampsizespec').val(5);
            } else if (qua >= 91 && qua <= 150) {
                $('#sampsizespec').val(8);
            } else if (qua >= 151 && qua <= 280) {
                $('#sampsizespec').val(13);
            } else if (qua >= 281 && qua <= 500) {
                $('#sampsizespec').val(13);
            } else if (qua >= 501 && qua <= 1200) {
                $('#sampsizespec').val(20);
            } else if (qua >= 1201 && qua <= 3200) {
                $('#sampsizespec').val(32);
            } else if (qua >= 3201 && qua <= 10000) {
                $('#sampsizespec').val(32);
            } else if (qua >= 10001 && qua <= 35000) {
                $('#sampsizespec').val(50);
            } else if (qua >= 35001 && qua <= 150000) {
                $('#sampsizespec').val(80);
            } else if (qua >= 150001 && qua <= 500000) {
                $('#sampsizespec').val(80);
            } else if (qua >= 500001) {
                $('#sampsizespec').val(125);
            }
        }
    }
});

function samplecheck() {
    var qua = document.getElementById('qty1').value;
    var inlvl = document.getElementById('ins_lvl').value;

    if (inlvl == 'N1') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsize').value = 2;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsize').value = 2;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsize').value = 3;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsize').value = 5;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsize').value = 5;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsize').value = 8;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsize').value = 13;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsize').value = 20;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsize').value = 32;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsize').value = 50;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsize').value = 80;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsize').value = 125;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsize').value = 200;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsize').value = 315;
        } else if (qua >= 500001) {
            document.getElementById('sampsize').value = 500;
        } else if (qua == 1) {
            alert("Minimum Quantity is '2' ");
        } else {
            alert("Please enter a Quantity");
        }

    } else if (inlvl == 'N2') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsize').value = 2;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsize').value = 3;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsize').value = 5;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsize').value = 8;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsize').value = 13;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsize').value = 20;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsize').value = 32;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsize').value = 50;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsize').value = 80;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsize').value = 125;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsize').value = 200;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsize').value = 315;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsize').value = 500;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsize').value = 800;
        } else if (qua >= 500001) {
            document.getElementById('sampsize').value = 1250;
        } else if (qua == 1) {
            alert("Minimum Quantity is '2' ");
        } else {
            alert("Please enter a Quantity");
        }
    } else if (inlvl == 'N3') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsize').value = 3;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsize').value = 5;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsize').value = 8;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsize').value = 13;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsize').value = 20;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsize').value = 32;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsize').value = 50;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsize').value = 80;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsize').value = 125;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsize').value = 200;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsize').value = 315;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsize').value = 500;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsize').value = 800;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsize').value = 1250;
        } else if (qua >= 500001) {
            document.getElementById('sampsize').value = 2000;
        } else if (qua == 1) {
            alert("Minimum Quantity is '2' ");
        } else {
            alert("Please enter a Quantity");
        }
    }
}

function specialsamplecheck() {
    var qua = document.getElementById('qty1').value;
    var spelvl = document.getElementById('spe_lvl').value;

    if (spelvl == 'S1') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsizespec').value = 8
        } else if (qua >= 500001) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua == 1) {
            alert("Minimum quantity is '2'");
        } else {
            alert("Please enter a Quantity");
        }
    } else if (spelvl == 'S2') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua >= 500001) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua == 1) {
            alert("Minimun quanitty is '2'");
        } else {
            alert("Please enter a Quantity");
        }
    } else if (spelvl == 'S3') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsizespec').value = 20;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsizespec').value = 20;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsizespec').value = 32;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsizespec').value = 32
        } else if (qua >= 500001) {
            document.getElementById('sampsizespec').value = 50;
        } else if (qua == 1) {
            alert("Minimum Quantity is '2'");
        } else {
            alert("Please enter a Quantity");
        }
    } else if (spelvl == 'S4') {
        if (qua >= 2 && qua <= 8) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 9 && qua <= 15) {
            document.getElementById('sampsizespec').value = 2;
        } else if (qua >= 16 && qua <= 25) {
            document.getElementById('sampsizespec').value = 3;
        } else if (qua >= 26 && qua <= 50) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 51 && qua <= 90) {
            document.getElementById('sampsizespec').value = 5;
        } else if (qua >= 91 && qua <= 150) {
            document.getElementById('sampsizespec').value = 8;
        } else if (qua >= 151 && qua <= 280) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua >= 281 && qua <= 500) {
            document.getElementById('sampsizespec').value = 13;
        } else if (qua >= 501 && qua <= 1200) {
            document.getElementById('sampsizespec').value = 20;
        } else if (qua >= 1201 && qua <= 3200) {
            document.getElementById('sampsizespec').value = 32;
        } else if (qua >= 3201 && qua <= 10000) {
            document.getElementById('sampsizespec').value = 32;
        } else if (qua >= 10001 && qua <= 35000) {
            document.getElementById('sampsizespec').value = 50;
        } else if (qua >= 35001 && qua <= 150000) {
            document.getElementById('sampsizespec').value = 80;
        } else if (qua >= 150001 && qua <= 500000) {
            document.getElementById('sampsizespec').value = 80
        } else if (qua >= 500001) {
            document.getElementById('sampsizespec').value = 125;
        } else if (qua == 1) {
            alert("Minimun quantity is '2'");
        } else {
            alert("Please enter a Quantity");
        }
    }

}

$('#copy').on('click', function () {
    var maj = $('#maj').val();
    var min = $('#min').val();
    var qty1 = $('#qty1').val();
    var ins_lvl = $('#ins_lvl').val();
    var spe_lvl = $('#spe_lvl').val();
    var spess = $('#sampsizespec').val();
    var genss = $('#sampsize').val();
    if (qty1 == "") {
        alert('Qty field is empty!');
    } else if (qty1 < 1) {
        alert('Qty cannot be 0 or negative number');
    } else if (ins_lvl == "") {
        alert('Define General Inspection Level!');
    } else if (spe_lvl == "") {
        alert('Define Special Inspection Level!');
    } else if (min == "") {
        alert('Define Minor AQL!');
    } else if (maj == "") {
        alert('Define Major AQL!');
    } else {
        $('#qty').val(qty1);
        $('#conf_genss').val(genss);
        $('#conf_spess').val(spess);
        $('#qtyerrorhand').val(1);
        $("#conf_qty").val(qty1);
        $('#cancel_copy').trigger('click');
    }
});

$('#Name_of_Factory').on('focusout', function () {
    var factory = $('#Name_of_Factory').val();
    var compid = $('#compid').val();
    $.ajax({
        url: 'php/ajax_check.php',
        type: 'POST',
        cache: false,
        async: false,
        data: {
            check_fac: 1,
            compid: compid,
            fname: factory
        },
        success: function (result) {
            if (result == 1) {
                alert('Factory Name Already Exists! Please rename the factory or give the factory name a prefix');
                $('#save_fac').prop('disabled', 'disabled');
            } else {
                $("#save_fac").removeAttr('disabled');
            }
        }
    });

});
$('#save_fac').on('click', function (event) {
    event.preventDefault();
    var factory = $('#Name_of_Factory').val();
    var factory_address = $('#factory_add').val();
    var factory_country = $('#factory_country option:selected').val();
    var factory_city = $('#factory_city').val();
    var factory_cperson = $('#factory_contact_person').val();
    var factory_cnumber = $('#factory_contact_number').val();
    var factory_email = $('#factory_email').val();
    var id = $('#compid').val();

    if (factory == "") {
        alert('Enter Factory name');
    } else if (factory_address == "") {
        alert('Enter Factory Address');
    } else if (factory_country == "") {
        alert('Select Factory Country');
    } else if (factory_city == "") {
        alert('Enter Factory City');
    } else if (factory_cperson == "") {
        alert('Enter factory Contact Person');
    } else if (factory_cnumber == "") {
        alert('Enter contact Number of Contact Person');
    } else if (factory_email == "") {
        alert('Enter Email Address of contact Person');
    } else if (!isValidEmailAddress(factory_email)) {
        alert('Email format is invalid!');
    } else {
        $.ajax({
            url: 'php/ajax.php',
            type: 'POST',
            async: false,
            cache: false,
            data: {
                buttonsave: 1,
                factoryname: factory,
                address: factory_address,
                city: factory_city,
                country: factory_country,
                contact: factory_cperson,
                number: factory_cnumber,
                email: factory_email,
                id: id
            },
            success: function (result) {
                var new_factory = $('#Name_of_Factory').val();
                $('#Factory_Name').append('<option value="' + new_factory + '" selected>' + new_factory + '</option>');
                if (result == 0) {
                    alert('New Factory details has been saved!');

                    $('#Factory_address').val(factory_address);
                    $('#country').val(factory_country);
                    $('#city').val(factory_city);
                    $('#contact_person').val(factory_cperson);
                    $('#contact_number').val(factory_cnumber);
                    $('#email').val(factory_email);
                    $('#background').hide(500);
                    $('#white_bg').hide(500);
                    $('#Name_of_Factory').val("");
                    $('#factory_add').val("");
                    $('#factory_country').val("");
                    $('#factory_city').val("");
                    $('#factory_contact_person').val("");
                    $('#factory_contact_number').val("");
                    $('#factory_email').val("");
                    $('#cancel_fac').trigger('click');

                } else if (result == 1) {
                    alert('There was a problemt saving the factory details. Please try again.');
                } else if (result == 2) {
                    alert('Please fill in all fields');
                }
            }
        });
    }
});

function isValidEmailAddress(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
}

$('#Factory_Name').on('change', function (event) {
    event.preventDefault();
    var facname = $(this).val();
    var cid = $('#compid').val();
    $('#Factory_Name').toggleClass('loader');
    $.ajax({

        url: 'php/ajax.php',
        type: 'POST',
        datatype: 'JSON',
        data: {
            search: 1,
            factory: facname,
            compid: cid
        },
        success: function (show) {
            //$('#Factory_Name').val(show.flist_name);
            $('#Factory_address').val(show.flist_address);
            $('#country').val(show.flist_country);
            $('#city').val(show.flist_city);
            $('#contact_person').val(show.flist_contact);
            $('#contact_number').val(show.flist_cnum);
            $('#email').val(show.flist_email);
            $('#Factory_Name').toggleClass('loader');
        }

    })

});

function getserviceType(curserviceType) {

    var serviceType = curserviceType.value;
    //alert(serviceType);
    $('#conf_service').val(serviceType);
}
