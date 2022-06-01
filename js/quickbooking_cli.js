$(document).ready(function () {

    var navListItems = $('div.setup-panel_cli div a'),
        allWells = $('.setup-content_cli'),
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
        var curStep = $(this).closest(".setup-content_cli"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel_cli div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='url'],textarea, email,select,select[readonly],input[type='hidden']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            //if (!curInputs[i].validity.valid){
            if (curInputs[i].hasAttribute('required') && curInputs[i].value === '') {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
                $("#" + $(curInputs[i]).attr('id') + "ErrorCLI").show("fast");

            } else {
                $("#" + $(curInputs[i]).attr('id') + "ErrorCLI").hide("fast");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    allBackBtn.click(function () {
        var curStep = $(this).closest(".setup-content_cli"),
            curStepBtn = curStep.attr("id"),
            backStepWizard = $('div.setup-panel_cli div a[href="#' + curStepBtn + '"]').parent().prev().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'],textarea, select,select[readonly],input[type='hidden']"),
            isValid = true;



        if (isValid)
            backStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel_cli div a.btn-primary').trigger('click');
});

$(document).ready(function () {
    $('#sInspection_Service').on('change', function () {
        var insser = $(this).val();
        if (insser == 'Incoming Quality Inspection (IQC)' || insser == 'During Production Inspection (DUPRO)' || insser == 'Setting Up Production Lines (PLS)' || insser == 'Pre Shipment Inspection (PSI)') {
            $('.formncli').show();
            $('.formcli').hide();
            $('#Inspection_Service').val(insser);
            $('form.formncli').attr('id', 'fileupload');

            $('form.formcli').attr('id', '');
            $(function () {
                'use strict';

                // Initialize the jQuery File Upload widget:
                $('#fileupload').fileupload({
                    // Uncomment the following to send cross-domain cookies:
                    //xhrFields: {withCredentials: true},
                    url: 'server/php/'
                });

                $('#fileupload')
                    .bind('fileuploadstarted', function (e) {
                        alert("Your Attachment are being uploaded, kindly wait for the Booking Success message");
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
    $("#sInspection_Date").datepicker({
        startDate: "today",
        calendarWeeks: true,
        autoclose: true,
        todayHighlight: true
    });
    $("#sInspection_Date").change(function () {
        var selectedDate = $(this).val();

        if (selectedDate != "") {
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var ins = $("#stoday").val();
            var ship = $("#sInspection_Date").val();
            var foo_date1 = getDateFromFormat(ins, "M/d/y");
            var foo_date2 = getDateFromFormat(ship, "M/d/y");
            var diff_date = Math.round((foo_date2 - foo_date1) / days);
            //alert(diff_date);
            if (diff_date <= 1) {
                alert("You are requesting a Service within 24 hours and our minimun time availability is 48 hours, but we'll do our best to perform this service. However, we may charge you additional fees for immediate inspection.");
            }
            $("#sconf_insdate").val(selectedDate)

        }
    });

    var prodcount = 1;
    $('#sconf_prodnum').val(prodcount);

    $('#ssaprod').on('click', function () {
        $('#ssln1').clone().appendTo('#sspage3_inside');
        prodcount = prodcount + 1;
        $('#sconf_prodnum').val(prodcount);
    });
    $('body').on('click', '.del', function () {
        $(this).closest('tr').remove();
        prodcount = prodcount - 1;
        $('#sconf_prodnum').val(prodcount);
    });
});

function checkdate2() {
    if (document.getElementById('schangedate').checked) {
        document.getElementById('sdatechange').value = "Do not Allow Factory to Change Date";
    } else {
        document.getElementById('sdatechange').value = "Allow factory to Change date";
    }
}

$('#sspage3_inside').on('change', '.sname_of_product', function (event) {
    event.preventDefault();
    var prodname = $(this).val();
    var cid = $('option:selected', this).attr('idd'); // not found this in html

    // should use this to find parent for current element, 
    // and this is the main part(to find only current match element)
    var $this = $(this).closest('tr');
    $this.find('.sname_of_product').toggleClass('loader');
    $.ajax({
        url: 'php/ajax.php',
        type: 'POST',
        datatype: 'JSON',
        cache: false,
        data: {
            psearch: 1,
            product: prodname,
            compid: cid
        },
        success: function (show) {

            // using $this as this would refer to previous context,
            // and find the sibling element only
            // Here you need to find element to attach the data
            // i could't find the match id in your html snippet
            // try this first
            //$this.find('.sname_of_product').val(show.plist_name);
            $this.find('.sproduct_category').val(show.plist_category);
            $this.find('.sunit').val(show.plist_unit);
            $this.find('.sname_of_product').toggleClass('loader');
        }
    });
});

$('#ssave_fac').on('click', function (event) {
    event.preventDefault();
    var factory = $('#sName_of_Factory').val();
    var factory_address = $('#sfactory_add').val();
    var factory_country = $('#sfactory_country option:selected').val();
    var factory_city = $('#sfactory_city').val();
    var factory_cperson = $('#sfactory_contact_person').val();
    var factory_cnumber = $('#sfactory_contact_number').val();
    var factory_email = $('#sfactory_email').val();
    var id = $('#scompid').val();

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
                var new_factory = $('#sName_of_Factory').val();
                $('#sFactory_Name').append('<option value="' + new_factory + '" selected>' + new_factory + '</option>');
                if (result == 0) {
                    alert('New Factory details has been saved!');

                    $('#sFactory_address').val(factory_address);
                    $('#scountry').val(factory_country);
                    $('#scity').val(factory_city);
                    $('#scontact_person').val(factory_cperson);
                    $('#scontact_number').val(factory_cnumber);
                    $('#semail').val(factory_email);
                    $('#sbackground').hide(500);
                    $('#swhite_bg').hide(500);
                    $('#sName_of_Factory').val("");
                    $('#sfactory_add').val("");
                    $('#sfactory_country').val("");
                    $('#sfactory_city').val("");
                    $('#sfactory_contact_person').val("");
                    $('#sfactory_contact_number').val("");
                    $('#sfactory_email').val("");
                    $('#sconf_factory').val(new_factory);
                    $('#scancel_fac').trigger('click');
                } else if (result == 1) {
                    alert('There was a problemt saving the factory details. Please try again.');
                } else if (result == 2) {
                    alert('Please fill in all fields');
                }
            }
        });
    }
});

function checkExtensioncli(filename) {
    var match = /\..+$/;
    var ext = filename.match(match);
    if (allowedExtensions[ext]) {
        return true;
    } else {
        alert("Some files have an invalid file extension");
        //will clear the file input box.
        document.getElementById('sfile').value = null;
        return false;
    }
}

$('#sFactory_Name').on('change', function (event) {
    event.preventDefault();
    var facname = $(this).val();
    var cid = $('#scompid').val();
    $('#sFactory_Name').toggleClass('loader');
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
            $('#sFactory_Name').val(show.flist_name);
            $('#sFactory_address').val(show.flist_address);
            $('#scountry').val(show.flist_country);
            $('#scity').val(show.flist_city);
            $('#scontact_person').val(show.flist_contact);
            $('#scontact_number').val(show.flist_cnum);
            $('#semail').val(show.flist_email);
            $('#sconf_factory').val(show.flist_name);
            $('#sFactory_Name').toggleClass('loader');
        }

    });

});

function getRefnum() {
    var ref = $('#sReference_Number').val()
    $('#sconf_refnum').val(ref);
}
