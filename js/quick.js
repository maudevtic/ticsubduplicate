$(function () {
    $("#Inspection_Date").datepicker({
        minDate: 1,
        numberOfMonths: 2,
        onSelect: function (selectedDate) {
            $("#Shipment_Date").prop('disabled', false);
            var serv = $('#Inspection_Service').val();
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var ins = $("#today").val();
            var ship = $("#Inspection_Date").val();
            var foo_date1 = getDateFromFormat(ins, "M/d/y");
            var foo_date2 = getDateFromFormat(ship, "M/d/y");
            var diff_date = Math.round((foo_date2 - foo_date1) / days);
            if (diff_date == 1) {
                alert("You are requesting a Service within 24 hours and our minimun time availability is 48 hours, but we'll do our best to perform this service. However, we may charge you additional fees for immediate inspection.");
            }
            $("#Shipment_Date").datepicker("option", "minDate", selectedDate);
            $("#conf_insdate").val(selectedDate)
        }
    });

    $("#Shipment_Date").datepicker({
        numberOfMonths: 2,
        onSelect: function (selectedDate) {
            $("#Inspection_Date").datepicker("option", "maxDate", selectedDate);
        }
    });
    $('#Inspection_Service').on('change', function () {
        var services = $(this).val();
        if (services == "Container Loading Inspection (CLI)") {
            $('#feedbackform').hide();
            $('#sfeedbackform').show();
            $('#sInspection_Service').val(services);
        }
    });
    $('#page1').show();
    $('#page2').hide();
    $('#page3').hide();
    $('#background').hide();
    $('#white_bg').hide();
    $('#saprod').hide();
    $('#sfeedbackform').hide();


    $('#name_of_product').on('change', function (event) {
        event.preventDefault();
        var prodname = $(this).val();
        var cid = $('option:selected', this).attr('idd');
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
                $('#name_of_product').val(show.plist_name);
                $('#product_category').val(show.plist_category);
                $('#PO').val(show.plist_po);
                $('#unit').val(show.plist_unit);
                $('#brand').val(show.plist_brand);
                $('#color_material_finish').val(show.plist_cmf);
                $('#technical_specifications_rating').val(show.plist_spec);
                $('#shipping_mark').val(show.plist_ship);
            }
        });
    });

    $('#qty').on('click', function () {
        $('#light').show(500);
        $('#fade').show(500);
    });

    $('#next1').on('click', function () {
        var ref = $('#Reference_Number').val()
        var srve = $('#Inspection_Service').val()
        var ins = $('#Inspection_Date').val()
        var sh = $('#Shipment_Date').val()
        var pro = $('#product_category').val();
        var prod = $('#product_name').val();
        var qty = $('#qty').val();
        var unit = $('#unit').val();

        if (ref == "") {
            alert('Reference Number Field is empty');
        } else if (srve == "") {
            alert('Select Inspection Service');
        } else if (ins == "") {
            alert('Pick an Inspection Date');
        } else if (sh == "") {
            alert('Pick a Shipment Date');
        } else if (prod == "") {
            alert('Enter Product Name');
        } else if (pro == "") {
            alert('Select Product Category');
        } else if (qty == "") {
            alert('Enter Quantity');
        } else if (unit == "") {
            alert('Select Unit');
        } else {
            $('#page1').hide();
            $('#page2').show(500);
            $('#step1').css("color", "#8d8d8d");
            $('#legend1').css("color", "#8d8d8d");
            $('#step2').css("color", "#f71d3a");
            $('#legend2').css("color", "#f71d3a");
        }

        var ssgen = $('#sampsize').val();
        var se = $('#Inspection_Service').val();
        var th = $(this).val();
        var qtyqty = $('#qty').val();
        var pr = $('#name_of_product').val();
        $('#conf_qty').val(qtyqty);
        $('#conf_prod').val(pr);
        $('#Unit').val(th);
        if (ssgen <= 315) {
            $('#conf_manday').val(1);
        } else if (ssgen >= 316 && ssgen <= 500) {
            $('#conf_manday').val(2);
        } else if (ssgen >= 501 && ssgen <= 799) {
            $('#conf_manday').val(3);
        } else if (ssgen >= 800 && ssgen <= 1249) {
            $('#conf_manday').val(4);
        } else if (ssgen >= 1250 && ssgen <= 1999) {
            $('#conf_manday').val(5);
        } else if (ssgen >= 2000) {
            $('#conf_manday').val(6);
        }

        $("#conf_pr").val(prod);
        $("#conf_qty").val(qty);
        $('#conf_service').val(srve);
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
    $('#cancel_fac').on('click', function () {
        $('#background').hide(500);
        $('#white_bg').hide(500);
    });
    $('#add_fac').on('click', function () {
        $('#background').show(500);
        $('#white_bg').show(500);
    })

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
                $('#Factory_Name').val(show.flist_name);
                $('#Factory_address').val(show.flist_address);
                $('#country').val(show.flist_country);
                $('#city').val(show.flist_city);
                $('#contact_person').val(show.flist_contact);
                $('#contact_number').val(show.flist_cnum);
                $('#email').val(show.flist_email);
            }

        })

    });

    $('#back2').on('click', function () {
        $('#page2').hide();
        $('#page1').show(500);
        $('#step1').css("color", "#f71d3a");
        $('#legend1').css("color", "#f71d3a");
        $('#step2').css("color", "#8d8d8d");
        $('#legend2').css("color", "#8d8d8d");
    });

    $('#next2').on('click', function () {

        var facname = $('#Factory_Name').val();
        var facadd = $('#Factory_address').val();
        var country = $('#country').val();
        var city = $('#city').val();
        var cp = $('#contact_person').val();
        var cn = $('#contact_number').val();
        var em = $('#email').val();

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
            $('#page2').hide();
            $('#page3').show(500);
            $('#step3').css("color", "#f71d3a");
            $('#legend3').css("color", "#f71d3a");
            $('#step2').css("color", "#8d8d8d");
            $('#legend2').css("color", "#8d8d8d");
        }
    });

    $('#back5').on('click', function () {
        $('#page3').hide();
        $('#page2').show(500);
        $('#step2').css("color", "#f71d3a");
        $('#legend2').css("color", "#f71d3a");
        $('#step3').css("color", "#8d8d8d");
        $('#legend3').css("color", "#8d8d8d");
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
        } else if (ins_lvl == "") {
            alert('Define General Inspection Level!');
        } else if (spe_lvl == "") {
            alert('Define Special Inspection Level!');
        } else if (min == "") {
            alert('Define Minor AQL!');
        } else if (maj == "") {
            alert('Define Major AQL!');
        } else {
            $('#light').hide(500);
            $('#fade').hide(500);
            $('#qty').val(qty1);
            $('#conf_genss').val(genss);
            $('#conf_spess').val(spess);
        }

    });
});
