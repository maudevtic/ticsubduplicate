<?php
$url = $_SERVER["REQUEST_URI"];
if (
    $url == '/tic_new/contact.php'
    || $url == '/tic_new/'
    || $url == '/tic_new/index.php'
    || $url == '/tic_new/about.php'
    || $url == '/tic_new/quality.php'
    || $url == '/tic_new/location.php'
    || $url == '/tic_new/testimonial.php'
    || $url == '/tic_new/terms.php'
    || $url == '/tic_new/faqs.php'
    || $url == '/tic_new/IQI.php'
    || $url == '/tic_new/PSI.php'
    || $url == '/tic_new/DUPRO.php'
    || $url == '/tic_new/CLI.php'
    || $url == '/tic_new/SUPL.php'
    || $url == '/tic_new/PA.php'
    || $url == '/tic_new/DCA.php'
    || $url == '/tic_new/SA.php'
    || $url == '/tic_new/ST.php'
    || $url == '/tic_new/order.php'
    || $url == '/tic_new/factory.php'
    || $url == '/tic_new/product.php'
    || $url == '/tic_new/report.php'
    || $url == '/tic_new/shipment.php'
    || $url == '/tic_new/mobile.php'
    || $url == '/tic_new/booking.php'
    || $url == '/tic_new/geo.php'
) { ?>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="js/style-switcher/styleswitcher.js"></script>
    <script src="js/universal/jquery.js"></script>
    <script src="js/style-switcher/jquery-1.js"></script>
    <script src="js/style-switcher/styleselector.js"></script>
    <script src="js/revolutionslider/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script src="js/revolutionslider/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script src="js/revolutionslider/custom1.js"></script>
    <script src="js/mainmenu/bootstrap.min.js"></script>
    <script src="js/mainmenu/customeUI.js"></script>
    <script src="js/mainmenu/sticky.js"></script>
    <script src="js/mainmenu/modernizr.custom.75180.js"></script>
    <script src="js/tabs/assets/js/responsive-tabs.min.js"></script>
    <script src="js/accordion/custom.js"></script>
    <script src="js/scrolltotop/totop.js"></script>
    <script src="js/flexslider/jquery.flexslider.js"></script>
    <script src="js/flexslider/custom.js"></script>
<?php } else { ?>
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="js/style-switcher/styleswitcher.js"></script>
    <script src="js/universal/jquery.js"></script>
    <script src="js/style-switcher/jquery-1.js"></script>
    <script src="js/style-switcher/styleselector.js"></script>
    <script src="js/revolutionslider/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script src="js/revolutionslider/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script src="js/revolutionslider/custom1.js"></script>
    <script src="js/mainmenu/bootstrap.min.js"></script>
    <script src="js/mainmenu/customeUI.js"></script>
    <script src="js/mainmenu/sticky.js"></script>
    <script src="js/mainmenu/modernizr.custom.75180.js"></script>
    <script src="js/tabs/assets/js/responsive-tabs.min.js"></script>
    <script src="js/accordion/custom.js"></script>
    <script src="js/scrolltotop/totop.js"></script>
    <script src="js/flexslider/jquery.flexslider.js"></script>
    <script src="js/flexslider/custom.js"></script>
<?php } ?>
<script>
    function showContactUsNewWindow() {
        var myWindow = window.open("https://the-inspection-company.com/contact-us.php", "myWindow", "width=500,height=900");
    }
</script>
<!--Start of Tawk.to Script-->
<script>
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/555564deae385e6c559d4351/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.0/jquery.cookie.min.js">
</script>
<script type="text/javascript">
    $(document).ready(function() {
        if ($.cookie('pop') == null) {
            $("#notif-modal").modal();
            $.cookie('pop', '1', {
                expires: 999999
            });
        }
    });
</script>
<script>
    function myFunction(url, title, w, h) {
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        console.log(left);
        console.log(top);
        var myWindow = window.open("https://the-inspection-company.com/contact-us.php", "myWindow", "width=500,height=900", );
    }
    jQuery(document).on("ready", (function() {
        jQuery(window).on("resize", (function() {
            jQuery(window).width() < 990 && jQuery(window).width() > 200 ? (
                    $('.contact-us-btn').hide(),
                    $('.section_1').removeClass('centered'),
                    $('#securesafe').hide()) :
                jQuery(window).width() > 720 ? (
                    $('.section_1').addClass('centered'),
                    $('.contact-us-btn').show(),
                    $('#securesafe').show()) :
                jQuery(document).width()
        })).trigger("resize")
    }));

    function ChangeLanguage(lang) {
        var language = lang.value;
        $.ajax({
            url: "language.php",
            type: "POST",
            data: {
                language: language,
            },
            success: function (result) {
                location.reload();
                if(result=='ok'){
                    $('#header').html(result);
                    location.reload();
                }else{
                    
                }
            }
        });
    }
</script>
<!--End of Tawk.to Script-->