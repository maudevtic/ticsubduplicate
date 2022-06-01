$(document).ready(function () {

    $("#validate").change(function () {
        var email = $("#validate").val();
        if (email != 0) {
            if (isValidEmailAddress(email)) {
                $("#validEmail").html("<img src='images/available.png' title='Email format is valid'> E-Mail-Format ist gültig");
                var email = $(this).val();
                if (email.length < 6) {
                    $("#email-result").html('');
                    return;
                }
                if (email.length >= 6) {
                    $("#email-result").html('<img src="images/ajax-loader.gif" />');
                    $.post('php/checker.php', {
                        'email': email
                    }, function (data) {

                        if (data == 1) {
                            $("#email-result").html('<img src="images/available.png" title="Email available! check Email format" /> E-Mail zur Verfügung.');
                            $("#emailcheck1").val(1);
                        } else if (data == 0) {
                            $("#email-result").html('<img src="images/not-available.png" title="Email not available"/> E-Mail nicht verfügbar.');
                            $("#emailcheck1").val(0);
                        }
                    });
                }
                $("#emailcheck2").val(1);
            } else {
                $("#validEmail").html("<img src='images/not-available.png' title='Email format is invalid'> E-Mail-Format ist ungültig");
                var email = $(this).val();

                $("#email-result").html('<img src="images/ajax-loader.gif" />');
                $.post('php/checker.php', {
                    'email': email
                }, function (data) {
                    //alert(data);
                    $("#email-result").html(data);
                    if (data == 1) {
                        $("#email-result").html('<img src="images/available.png" title="Email available! check Email format" /> E-Mail zur Verfügung.');
                        $("#emailcheck1").val(1);
                    } else if (data == 0) {
                        $("#email-result").html('<img src="images/not-available.png" title="Email not available"/> E-Mail nicht verfügbar.');
                        $("#emailcheck1").val(0);
                    }
                });

                $("#emailcheck2").val(0);
            }
        } else {
            $("#validEmail").css({
                "background-image": "none"
            });
        }

        if (email == "") {
            $("#email-result").html("<span class='label label-danger'>Geben Sie bitte per E-Mail</span>");
            $("#validEmail").empty();
            $("#emailcheck1").val(0);
            $("#emailcheck2").val(0);
        }
    });

    $("#cname").keyup(function () {
        if ($('#cname').val() != "") {
            $("#cname_msg").html("");
        } else {
            $("#cname_msg").html("<span class='label label-danger'>Bitte geben Sie Firmennamen</span>");
        }
    });

    $("#cweb").keyup(function () {
        if ($('#cweb').val() != "") {
            $("#cweb_msg").html("");
        } else {
            $("#cweb_msg").html("<span class='label label-danger'>Bitte geben Sie Ihre Unternehmens-Website</span>");
        }
    });

    $("#cadd1").keyup(function () {
        if ($('#cadd1').val() != "") {
            $("#cadd1_msg").html("");
        } else {
            $("#cadd1_msg").html("<span class='label label-danger'>Bitte geben Sie Ihre Firmenadresse!</span>");
        }
    });

    $("#cadd2").keyup(function () {
        if ($('#cadd2').val() != "") {
            $("#cadd2_msg").html("");
        } else {
            $("#cadd2_msg").html("<span class='label label-danger'>Geben Sie die Rechnungsadresse!</span>");
        }
    });

    $("#country").change(function () {
        if ($('#country').val() != "") {
            $("#country_msg").html("");
        } else {
            $("#country_msg").html("<span class='label label-danger'>Bitte wählen Sie Firma Land!</span>");
        }
    });

    $("#city").keyup(function () {
        if ($('#city').val() != "") {
            $("#city_msg").html("");
        } else {
            $("#city_msg").html("<span class='label label-danger'>Bitte geben Sie Stadt!</span>");
        }
    });

    $("#zip").keyup(function () {
        if ($('#zip').val() != "") {
            $("#zip_msg").html("");
        } else {
            $("#zip_msg").html("<span class='label label-danger'>Bitte geben Sie Postleitzahl!</span>");
        }
    });

    $("#fname").keyup(function () {
        if ($('#fname').val() != "") {
            $("#fname_msg").html("");
        } else {
            $("#fname_msg").html("<span class='label label-danger'>Bitte geben Sie Kontaktnamen!</span>");
        }
    });

    $("#title").keyup(function () {
        if ($('#title').val() != "") {
            $("#title_msg").html("");
        } else {
            $("#title_msg").html("<span class='label label-danger'>Bitte geben Sie Position!</span>");
        }
    });
    $("#phone").keyup(function () {
        if ($('#phone').val() != "") {
            $("#phone_msg").html("");
        } else {
            $("#phone_msg").html("<span class='label label-danger'>Bitte geben Sie die Telefonnummer!</span>");
        }
    });

});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function validate_form() {
    var email = $('#validate').val();
    var emailcheck1 = $('#emailcheck1').val();
    var emailcheck2 = $('#emailcheck2').val();
    var password = $('#password1').val();
    var repassword = $('#password2').val();
    var cname = $('#cname').val();
    var cweb = $('#cweb').val();
    var cadd1 = $('#cadd1').val();
    var cadd2 = $('#cadd2').val();
    var country = $('#country').val();
    var ctext = $('#country_text').val();
    var city = $('#city').val();
    var zip = $('#zip').val();
    var fname = $('#fname').val();
    var title = $('#title').val();
    var acode = $('#acode').val();
    var phone = $('#phone').val();
    var pl = password.length;


    if (email == "") {
        $("#email-result").html("<span class='label label-danger'>Geben Sie bitte per E-Mail.</span>");
        $('#validate').focus();
        return false;
    } else if (emailcheck2 == 0) {
        $('#validate').focus();
        return false;
    } else if (emailcheck1 == 0) {
        $('#validate').focus();
        return false;
    } else if (!isValidEmailAddress(email)) {
        $('#validate').focus();
        return false;
    } else if (password == "") {
        $('#password1').focus();
        return false;
    } else if (password != repassword) {
        $('#password2').focus();
        return false;
    } else if (pl < 6) {
        $('#password2').focus();
        return false;
    } else if (cname == "") {
        $("#cname_msg").html("<span class='label label-danger'>Bitte geben Sie Firmennamen.</span>");
        $('#cname').focus();
        return false;
    } else if (cweb == "") {
        $("#cweb_msg").html("<span class='label label-danger'>>Bitte geben Sie Ihre Unternehmens-Website!</span>");
        $('#cweb').focus();
        return false;
    } else if (cadd1 == "") {
        $("#cadd1_msg").html("<span class='label label-danger'>Bitte geben Sie Ihre Firmenadresse!</span>");
        $('#cadd1').focus();
        return false;
    } else if (cadd2 == "") {
        $("#cadd2_msg").html("<span class='label label-danger'>Geben Sie die Rechnungsadresse!</span>");
        $('#cadd2').focus();
        return false;
    } else if (country == "") {
        $("#country_msg").html("<span class='label label-danger'>Bitte wählen Sie Firma Land!</span>");
        $('#country').focus();
        return false;
    } else if (city == "") {
        $("#city_msg").html("<span class='label label-danger'>Bitte geben Sie Stadt!</span>");
        $('#city').focus();
        return false;
    } else if (zip == "") {
        $("#zip_msg").html("<span class='label label-danger'>Bitte geben Sie Postleitzahl!</span>");
        $('#zip').focus();
        return false;
    } else if (fname == "") {
        $("#fname_msg").html("<span class='label label-danger'>Bitte geben Sie Kontaktnamen!</span>");
        $('#fname').focus();
        return false;
    } else if (title == "") {
        $("#title_msg").html("<span class='label label-danger'>Bitte geben Sie Position!</span>");
        $('#title').focus();
        return false;
    } else if (acode == "") {
        alert("Please Enter Area Code");
        return false;
    } else if (phone == "") {
        $("#phone_msg").html("<span class='label label-danger'>Bitte geben Sie die Telefonnummer!</span>");
        $('#phone').focus();
        return false;
    } else {
        return true;
    }
}
