$(document).ready(function () {
    $("#sInspection_Date").datepicker({
        minDate: 1,
        numberOfMonths: 2,
        onSelect: function (selectedDate) {
            $("#sShipment_Date").prop('disabled', false);
            var serv = $('#sInspection_Service').val();
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var ins = $("#stoday").val();
            var ship = $("#sInspection_Date").val();
            var foo_date1 = getDateFromFormat(ins, "M/d/y");
            var foo_date2 = getDateFromFormat(ship, "M/d/y");
            var diff_date = Math.round((foo_date2 - foo_date1) / days);
            if (diff_date == 1) {
                alert("You are requesting a Service within 24 hours and our minimun time availability is 48 hours, but we'll do our best to perform this service. However, we may charge you additional fees for immediate inspection.");
            }
            $("#sShipment_Date").datepicker("option", "minDate", selectedDate);
            $("#sconf_insdate").val(selectedDate)
        }
    });

    $("#sShipment_Date").datepicker({
        numberOfMonths: 2,
        onSelect: function (selectedDate) {
            $("#sInspection_Date").datepicker("option", "maxDate", selectedDate);
        }
    });

    $('#sInspection_Service').on('change', function () {
        var insser = $(this).val();
        if (insser == 'Incoming Quality Inspection (IQC)' || insser == 'During Production Inspection (DUPRO)' || insser == 'Setting Up Production Lines (PLS)' || insser == 'Pre Shipment Inspection (PSI)') {
            $('#feedbackform').show();
            $('#sfeedbackform').hide();
            $('#Inspection_Service').val(insser);
        }
    });

    $('#spage1').show();
    $('#spage2').hide();
    $('#spage3').hide();
    $('#sbackground').hide();
    $('#swhite_bg').hide();
    var prodcount = 1;
    $('#ssaprod').on('click', function () {
        $('#ssln1').clone().appendTo('#sspage3_inside');
        prodcount = prodcount + 1;
    });
    $('body').on('click', '.del', function () {
        $(this).closest('tr').remove();
    });

    $('#sspage3_inside').on('change', '.sname_of_product', function (event) {
        event.preventDefault();
        var prodname = $(this).val();
        var cid = $('option:selected', this).attr('idd'); // not found this in html

        // should use this to find parent for current element, 
        // and this is the main part(to find only current match element)
        var $this = $(this).closest('tr');

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
                $this.find('.sname_of_product').val(show.plist_name);
                $this.find('.sproduct_category').val(show.plist_category);
                $this.find('.sunit').val(show.plist_unit);
            }
        });
    });

    $('#sqty').on('click', function () {
        $('#slight').show(500);
        $('#sfade').show(500);
    });

    $('#snext1').on('click', function () {
        var ref = $('#sReference_Number').val()
        var srve = $('#sInspection_Service').val()
        var ins = $('#sInspection_Date').val()
        var sh = $('#sShipment_Date').val()
        var file = $('#file').val();



        if (ref == "") {
            alert('Reference Number Field is empty');
        } else if (srve == "") {
            alert('Select Inspection Service');
        } else if (ins == "") {
            alert('Pick an Inspection Date');
        } else if (sh == "") {
            alert('Pick a Shipment Date');
        } else if (file == "") {
            if (confirm("No Files are selected for upload. Are you sure you don't want to upload any file?")) {
                $('.sname_of_product' && '.sqty').each(function () {
                    var notp = $(this).val();
                    if (notp == "") {
                        $(this).css('border', '1px solid black');
                        $(this).css('background', '#ffffb2');
                    } else {
                        $('#spage1').hide();
                        $('#spage2').show(500);
                        $('#sstep1').css("color", "#8d8d8d");
                        $('#slegend1').css("color", "#8d8d8d");
                        $('#sstep2').css("color", "#f71d3a");
                        $('#slegend2').css("color", "#f71d3a");
                        $('#sconf_refnum').val(ref);
                    }
                });
            } else {
                return false;
            }

        } else {

            $('.sqty').each(function () {
                var notp = $(this).val();
                if (notp == "") {
                    $(this).css('border', '1px solid black');
                    $(this).css('background', '#ffffb2');
                    $('.sname_of_product').each(function () {
                        var qty = $(this).val();
                        if (qty == "") {
                            $(this).css('border', '1px solid black');
                            $(this).css('background', '#ffffb2');
                        };
                    })
                } else {
                    $('#spage1').hide();
                    $('#spage2').show(500);
                    $('#sstep1').css("color", "#8d8d8d");
                    $('#slegend1').css("color", "#8d8d8d");
                    $('#sstep2').css("color", "#f71d3a");
                    $('#slegend2').css("color", "#f71d3a");
                }
            });

        }
        $('#sconf_service').val(srve);
    });

    $('#sName_of_Factory').on('focusout', function () {
        var factory = $('#sName_of_Factory').val();
        var compid = $('#scompid').val();
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
                    $('#ssave_fac').prop('disabled', 'disabled');
                } else {
                    $("#ssave_fac").removeAttr('disabled');
                }
            }
        });

    });
    $('#scancel_fac').on('click', function () {
        $('#sbackground').hide(500);
        $('#swhite_bg').hide(500);
    });
    $('#sadd_fac').on('click', function () {
        $('#sbackground').show(500);
        $('#swhite_bg').show(500);
    })

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

    $('#sFactory_Name').on('change', function (event) {
        event.preventDefault();
        var facname = $(this).val();
        var cid = $('#scompid').val();
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
            }

        });

    });

    $('#sback2').on('click', function () {
        $('#spage2').hide();
        $('#spage1').show(500);
        $('#sstep1').css("color", "#f71d3a");
        $('#slegend1').css("color", "#f71d3a");
        $('#sstep2').css("color", "#8d8d8d");
        $('#slegend2').css("color", "#8d8d8d");
    });

    $('#snext2').on('click', function () {

        var facname = $('#sFactory_Name').val();
        var facadd = $('#sFactory_address').val();
        var country = $('#scountry').val();
        var city = $('#scity').val();
        var cp = $('#scontact_person').val();
        var cn = $('#scontact_number').val();
        var em = $('#semail').val();

        if (facname == "") {
            alert('Select a Factory');
        } else if (facadd == "") {
            alert('Enter Factory Address');
        } else if (country == "") {
            alert('Pick a Country for your Factory');
        } else if (city == "") {
            alert('Enter City');
        } else if (cp == "") {
            alert('Enter the Contact Person in the Factory');
        } else if (cn == "") {
            alert('Enter the Contact Number of your Contact Person');
        } else if (em == "") {
            alert('Enter Email Address of Contact Person');
        } else if (!isValidEmailAddress(em)) {
            alert('Email Format is invalid');
        } else {
            $('#spage2').hide();
            $('#spage3').show(500);
            $('#sstep3').css("color", "#f71d3a");
            $('#slegend3').css("color", "#f71d3a");
            $('#sstep2').css("color", "#8d8d8d");
            $('#slegend2').css("color", "#8d8d8d");
            $('#sconf_factory').val(facname);
            $('#sconf_prodnum').val(prodcount);
        }
    });

    $('#sback5').on('click', function () {
        $('#spage3').hide();
        $('#spage2').show(500);
        $('#sstep2').css("color", "#f71d3a");
        $('#slegend2').css("color", "#f71d3a");
        $('#sstep3').css("color", "#8d8d8d");
        $('#slegend3').css("color", "#8d8d8d");
    });
    $('#scopy').on('click', function () {
        var maj = $('#smaj').val();
        var min = $('#smin').val();
        var qty1 = $('#sqty1').val();
        var ins_lvl = $('#sins_lvl').val();
        var spe_lvl = $('#sspe_lvl').val();
        var spess = $('#ssampsizespec').val();
        var genss = $('#ssampsize').val();
        if (qty1 == "") {
            alert('Qty field is empty!');
        } else if (ins_lvl == "") {
            alert('Define General Inspection Level!');
        } else if (spe_lvl == "") {
            alert('Define Special Inspection Level!');
        } else if (min == "") {
            alert('Define Minor AQL!');
        } else if (maj == "") {
            alert('Define Major AQL!');
        } else {
            $('#slight').hide(500);
            $('#sfade').hide(500);
            $('#sqty').val(qty1);
            $('#sconf_genss').val(0);
            $('#sconf_spess').val(0);
        }
    });
});
