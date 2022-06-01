$(document).ready(function () {
    $('#spage1').show();
    $('#spage2').hide();
    $('#spage3').hide();
    $('#spage4').hide();
    $('#spage5').hide();
    $('#swhite_bg').hide();
    $('#sbackground').hide();
    $('#sbgw').hide();
    $('#sbgb').hide();

    $('#sInspection_Service').on('change', function () {
        var insser = $(this).val();
        if (insser == 'Incoming Quality Inspection (IQC)' || insser == 'During Production Inspection (DUPRO)' || insser == 'Setting Up Production Lines (PLS)' || insser == 'Pre Shipment Inspection (PSI)') {
            $('#main_form').show();
            $('#secondary_form').hide();
            $('#Inspection_Service').val(insser);
        }
    });

    var prodnum = 1;

    $('#sconf_prodnum').val(prodnum);
    $(document).keypress(function (e) {
        if (e.which == 13 && e.target.nodeName != "TEXTAREA") return false;
    });

    $("#sInspection_Date").datepicker({
        minDate: 1,
        numberOfMonths: 2,
        onSelect: function (selectedDate) {
            $("#sShipment_Date").prop('disabled', false);
            $("#sShipment_Date").datepicker("option", "minDate", selectedDate);
        }
    });
    var count = 0;
    $("#sInspection_Date").on('click', function () {
        if (count == 0) {
            alert('Please take note that the price for inspections during Sundays and Holidays are doubled');
            count = count + 1;
        } else {
            return false;
        }
    });

    $('#snext1').on('click', function () {
        var ref = $('#sReference_Number').val();
        var srve = $('#sInspection_Service').val();
        var ins = $('#sInspection_Date').val();
        var sh = $('#sShipment_Date').val();
        var np = $('#snumber_product').val();

        if (ref == "") {
            alert('Reference Number Field is empty');
        } else if (srve == "") {
            alert('Select Inspection Service');
        } else if (ins == "") {
            alert('Pick an Inspection Date');
        } else if (sh == "") {
            alert('Pick a Shipment Date');
        } else if (np == "") {
            alert('How many products for this loading Inspection?');
            $('#snumber_product').css('border', '1px solid red');
        } else {
            $('#spage1').hide();
            $('#spage2').show(500);
            $('#sstep1').css("color", "#8d8d8d");
            $('#slegend1').css("color", "#8d8d8d");
            $('#sstep2').css("color", "#f71d3a");
            $('#slegend2').css("color", "#f71d3a");
            $('#snumber_product').css('border', '1px solid red');
        }
    });

    $('#sback2').on('click', function () {
        $('#spage2').hide();
        $('#spage1').show(500);
        $('#sstep1').css("color", "#f71d3a");
        $('#slegend1').css("color", "#f71d3a");
        $('#sstep2').css("color", "#8d8d8d");
        $('#slegend2').css("color", "#8d8d8d");
    });

    $('#snext2').on('click', function (event) {
        event.preventDefault();
        var hidf = $('#sName_of_Factory').val();
        var fn = $('#sFactory_Name').val();
        if (hidf != "" && hidf != fn) {
            $('#sFactory_Name').append('<option value="' + hidf + '" selected>' + hidf + '</option>');
        } else if (hidf == fn) {
            var facname = $('#sFactory_Name').val();
        } else {
            var facname = $('#sFactory_Name').val();
        }
        var fact = $('#sName_of_Factory').val();
        var facname = $('#sFactory_Name').val();
        var facadd = $('#sFactory_address').val();
        var country = $('#scountry').val();
        var city = $('#scity').val();
        var cp = $('#scontact_person').val();
        var cn = $('#scontact_number').val();
        var email = $('#semail').val();

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
        } else if (email == "") {
            alert('Enter Email Address of Contact Person');
        } else if (!isValidEmailAddress(email)) {
            alert('Email Format is invalid');
        } else {
            $('#spage2').hide();
            $('#spage3').show(500);
            $('#sstep3').css("color", "#f71d3a");
            $('#slegend3').css("color", "#f71d3a");
            $('#sstep2').css("color", "#8d8d8d");
            $('#slegend2').css("color", "#8d8d8d");
        }
    });

    function isValidEmailAddress(email) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(email);
    }
    $('#snew_fac').on('click', function () {
        $('#sbackground').show(500);
        $('#swhite_bg').show(500);
    });

    $('#scancel_fac').on('click', function () {
        $('#swhite_bg').hide(500);
        $('#sbackground').hide(500);
    });
    var cc = 0;
    $('#scontact_number').on('click', function () {

        if (cc == 0) {
            alert('You can add multiple contact numbers for this field, just use a comma to separate each number.');
            cc = cc + 1;
        } else {
            return false;
        }
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
                    country: factory_country,
                    city: factory_city,
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

    $('#ssprod').on('click', function () {
        $('#sname_of_product').hide();
        $('#sproduct_name').prop('type', 'text');
        $('#ssaprod').css('visibility', 'visible');
        $('#scan').css('visibility', 'visible');
        $(this).hide();
    });

    $('#scan').on('click', function () {
        $('#sname_of_product').show();
        $('#sproduct_name').prop('type', 'hidden');
        $('#ssaprod').css('visibility', 'hidden');
        $('#scan').css('visibility', 'hidden');
        $('#ssprod').show();
    });

    $('#ssave_prod').on('click', function (event) {
        event.preventDefault();
        var prodname = $('#sprod_name').val();
        var prodcat = $('#sprod_category').val();
        var prodbrand = $('#sprod_brand').val();
        var produnit = $('#sprod_unit').val()
        var prodpo = $('#sprod_po').val()
        var compid = $('#scompid').val();
        var prodcmf = $('#sprod_color').val();
        var prodtech = $('#sprod_spec').val();
        var prodship = $('#sprod_ship').val();
        var prodadd = $('#sprod_add').val()

        if (prodname == "") {
            alert('Enter Product Name');
        } else if (prodcat == "") {
            alert('Select Product Category');
        } else if (produnit == "") {
            alert('Please select Unit');
        } else if (prodbrand == "") {
            alert('Enter Product Brand (if not applicable please input N/A)');
        } else if (prodpo == "") {
            alert('Enter PO Number(if not applicable please input N/A)');
        } else if (prodcmf == "") {
            alert('Define Color/Material/Finish (if not applicable please input N/A)');
        } else if (prodtech == "") {
            alert('Define Technical Specifications/Rating (if not applicable please input N/A)');
        } else if (prodship == "") {
            alert('Define Shipping Mark (if not applicable please input N/A)');
        } else if (prodadd == "") {
            alert('Enter Additional Product Information (if not applicable please input N/A)');
        } else {

            $.ajax({
                url: 'php/ajax.php',
                type: 'POST',
                async: false,
                data: {
                    prodsave: 1,
                    compid: compid,
                    pname: prodname,
                    pcat: prodcat,
                    punit: produnit,
                    pbrand: prodbrand,
                    pcmf: prodcmf,
                    ptech: prodtech,
                    pship: prodship,
                    padd: prodadd,
                    ppo: prodpo
                },
                success: function (result) {
                    if (result == 0) {
                        $('.name_of_product').each(function () {
                            var new_prod = $('#sprod_name').val();
                            $(this).append('<option idd="' + compid + '" value="' + new_prod + '">' + new_prod + '</option>');
                            $(this).trigger("chosen:updated");
                        });
                        alert('New Product details has been saved!');
                        $('#sprod_name').val("");
                        $('#sprod_category').val("");
                        $('#sprod_po').val("");
                        $('#sprod_brand').val("");
                        $('#sprod_unit').val("")
                        $('#scompid').val("");
                        $('#sprod_color').val("");
                        $('#sprod_spec').val("");
                        $('#sprod_ship').val("");
                        $('#sprod_po').val("");
                        $('#sprod_add').val("");
                        $('#sbgw').hide(500);
                        $('#sbgb').hide(500);
                    } else if (result == 1) {
                        alert('There was a problem saving the product details. Pelase try again later.');
                    } else if (result == 2) {
                        alert("Please fill in all fields");
                    } else if (result == 3) {
                        alert("Product Name already exists! Please press cancel and select from the list or if you are adding a new product, give the product a different name.");
                    }
                }
            });
        }
    });


    $('#snext3').on('click', function () {
        var x = "";
        var y = "";
        var insdate = $('#sInspection_Date').val();
        var factory = $('#sFactory_Name').val();
        var refnum = $('#sReference_Number').val();

        var cmf = $('#scolor_material_finish').val();
        var tech = $('#stechnical_specifications_rating').val();
        var ship = $('#sshipping_mark').val();
        var add = $('#sadditional_info').val();
        var fl = $('#sfile').val();
        var count = 0;
        console.log(count);
        $('.name_of_product').each(function () {
            var notp = $(this).val();
            if (notp == "") {
                if (count == 0) {
                    alert('Select a Product from the list');
                    count = 1;
                }
                $(this).css({
                    'border': '1px solid red',
                    'background': '#ffffb2'
                });
            } else if (cmf == "") {
                if (count == 0) {
                    alert('Define Color/Material/Finish (if not applicable please input N/A)');
                    count = 1;
                }
            } else if (tech == "") {
                if (count == 0) {
                    alert('Define Technical Specifications and Rating (if not applicable please input N/A)');
                    count = 1;
                }

            } else if (ship == "") {
                if (count == 0) {
                    alert('Define Shipping Mark (if not applicable please input N/A)');
                    count = 1;
                }
            } else if (add == "") {
                if (count == 0) {
                    alert('Enter Additional Information for the Product (if not applicable please input N/A)');
                    count = 1;
                }
            } else if (fl == "") {
                if (count == 0) {
                    if (confirm("No Files are selected for upload. Are you sure you don't want to upload any file?")) {
                        $('.qty').each(function () {
                            var qty = $(this).val();
                            if (qty == "") {
                                $(this).css({
                                    'border': '1px solid red',
                                    'background': '#ffffb2'
                                });
                                if (count == 0) {
                                    alert('Enter the Quanity');
                                }
                            } else {
                                $('#spage3').hide();
                                $('#spage4').show(500);
                                $('#sstep4').css("color", "#f71d3a");
                                $('#slegend4').css("color", "#f71d3a");
                                $('#sstep3').css("color", "#8d8d8d");
                                $('#slegend3').css("color", "#8d8d8d");
                                count = 1;
                            }
                        });
                    }
                }
            } else {
                $('#spage3').hide();
                $('#spage4').show(500);
                $('#sstep4').css("color", "#f71d3a");
                $('#slegend4').css("color", "#f71d3a");
                $('#sstep3').css("color", "#8d8d8d");
                $('#slegend3').css("color", "#8d8d8d");
            }
        });

        $('#sconf_insdate').val(insdate);
        $('#sconf_factory').val(factory);
        $('#sconf_refnum').val(refnum);

    });
    //AJAX REQUESTS
    $('#sFactory_Name').on('change', function (event) {
        event.preventDefault();
        var facname = $(this).val();
        var cid = $('#scompid').val();
        $.ajax({
            url: 'php/ajax.php',
            type: 'POST',
            datatype: 'JSON',
            cache: false,
            data: {
                search: 1,
                factory: facname,
                compid: cid
            },
            success: function (show) {
                $('#sFactory_Name').val(show.flist_name);
                $('#sName_of_the_Factory').val(show.flist_name);
                $('#sFactory_address').val(show.flist_address);
                $('#scountry').val(show.flist_country);
                $('#sFactory_Country').val(show.flist_country);
                $('#scity').val(show.flist_city);
                $('#scontact_person').val(show.flist_contact);
                $('#scontact_number').val(show.flist_cnum);
                $('#semail').val(show.flist_email);
            }

        })

    });
    $('#sback3').on('click', function () {
        $('#spage3').hide();
        $('#spage2').show(500);
        $('#sstep2').css("color", "#f71d3a");
        $('#slegend2').css("color", "#f71d3a");
        $('#sstep3').css("color", "#8d8d8d");
        $('#slegend3').css("color", "#8d8d8d");
    });

    $('#sback5').on('click', function () {
        $('#spage4').hide();
        $('#spage3').show(500);
        $('#sstep3').css("color", "#f71d3a");
        $('#slegend4').css("color", "#f71d3a");
        $('#sstep4').css("color", "#8d8d8d");
        $('#slegend4').css("color", "#8d8d8d");
    });

    $('#saddlist').on('click', function () {
        $('#sbgw').show(500);
        $('#sbgb').show(500);
    })

    $('#scancel_prod').on('click', function () {
        $('#sbgw').hide(500);
        $('#sbgb').hide(500);
    });


    $('#spage3_inside').on('change', '.name_of_product', function (event) {
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
                $this.find('.product_category').val(show.plist_category);
                $this.find('.brand').val(show.plist_brand);
                $this.find('.unit').val(show.plist_unit);
            }
        });
    });

    $('#saprod').on('click', function () {
        $('#sln1').clone().appendTo('#spage3_inside');
        prodnum = prodnum + 1;
        $('#sconf_prodnum').val(prodnum);
    });

    $('body').on('click', '.del', function () {
        $(this).closest('tr').remove();
    });


    $('#sprod_name').on('focusout', function () {
        var prodname = $(this).val();
        var compid = $('#scompid').val();
        $.ajax({
            url: 'php/ajax_check.php',
            type: 'POST',
            cache: false,
            async: false,
            data: {
                check: 1,
                compid: compid,
                pname: prodname
            },
            success: function (result) {
                if (result == 1) {
                    alert('Product Name Already Exists! Please rename the product or give the product name a prefix');
                    $('#save_fac').prop('disabled', 'disabled');
                } else {
                    $("#save_fac").removeAttr('disabled');
                }
            }
        });

    });

    $('#sName_of_Factory').on('focusout', function () {
        var factory = $(this).val();
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
});
