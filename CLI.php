<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Container Loading Inspection</title>
    <script src="https://kit.fontawesome.com/4e3a55c61a.js" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="description" content="The inspector will verify the total available quantity and verify this with the packing list. Before the loading begins he will check the container for damages, dirty and wet as well the general loading permission and conditions. " />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <script src="js/pixi.min.js"></script>
    <link rel="stylesheet" href="css/psi-new.css">
    <link rel="stylesheet" href="css/glide/glide.core.min.css">
    <link rel="stylesheet" href="css/glide/glide.theme.min.css">
    <link rel="stylesheet" href="css/servicesParallaxStyle.css">
    <style>
        @media (min-width: 992px) {
            .col-md-2 {
                width: 16.666666666666664%;
            }

            .col-md-offset-3 {
                margin-left: 23.5%;
            }

            .col-md-offset-1 {
                margin-left: 4.333333333333332%;
            }

            .col-md-offset-left {
                margin-left: 2.333333333333332%;
            }
        }
    </style>
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header-body">
            <div class="row">
                <!-- <div class="img-container"> -->
                    <!-- <div id="parallax"> -->
                        <div class="col-md-8 col-lg-offset-2 textBanner container-fluid">
                            <h1 id="page-title">

                            </h1>
                        </div>
                    <!-- </div> -->
                <!-- </div> -->
            </div>
        </div>
        <br>
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="row">
                <div class="row">
                    <div class="col-md-12 col-md-offset-2">
                        <h2 class="text16">
                            <?php displayText('container-loading-inspection', $_SESSION["language"], 'h2-1'); ?>
                        </h2>
                    </div>
                </div>
                <div class="col-md-5 col-md-offset-2">
                    <br>
                    <p>
                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p1'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p2'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p3'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p4'); ?>
                    </p>
                    <br>
                </div>
                <div class="col-md-4  m-auto">
                    <div style="padding:5%;">
                        <img src="images/CLI/CLI-content.webp" width="543.922" height="305.906" alt="Container Loading Inspection" id="content-img">
                    </div>
                </div>
            </div>
            <div class="orange_section" height="705px">
                <div>
                    <button class="contact-us-btn" onclick="showContactUsNewWindow()">
                        <a onclick="showContactUsNewWindow()">
                            <?php displayText('container-loading-inspection', $_SESSION["language"], 'a1'); ?>
                        <br><i class="fas fa-envelope"></i></a>
                    </button>
                </div>
                <div class="container-fluid col">
                    <h1 class='text16White'>
                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'h1-1'); ?>
                    </h1>
                    <div class="col-md-12 section2Flex" style="padding-left: 0;">
                        <p style=" color:white; font-size:1.1rem;padding-left: 8rem; margin:0 auto;padding-bottom:5vw; text-align:center; width:75%;letter-spacing:0.01em;">
                            <?php displayText('container-loading-inspection', $_SESSION["language"], 'p5'); ?>
                        </p>
                    </div>
                </div>
                <div class="container-fluid col">
                    <h1 class='text17' style="padding-bottom:3%">
                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'h1-2'); ?>
                    </h1>
                    <div class="row3 container-fluid text-center ">
                        <div class="col-md-2 col-md-offset-1 section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/CLI/clipart-CLI.webp" width="130" height="130"
                                    alt="Warehouse Icon">
                                    <p class="content-text">
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p6'); ?>
                                        <br>
                                    </p>
                                </div>
                            </div>
                            <div class=" panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 col-md-offset-left section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-check.webp" alt="Auditor Icon" width="130" height="130">
                                    <p class="content-text">
                                        <br>
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p7'); ?>
                                        <br>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 col-md-offset-left section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/psi/boxsize.svg" width="130" height="130"
                                    alt="BoxSize Icon">
                                    <p class="content-text">
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p8'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 col-md-offset-left section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-selection.webp" width="130" height="130"
                                    alt="Warehouse Icon"
                                    style="min-width:95px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p9'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class=" panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 col-md-offset-left section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/CLI/clipart-certify.webp" width="130" height="130"
                                    alt="Warehouse Icon">
                                    <p class="content-text">

                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p10'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class=" panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <br>
                        <br>
                    </div>
                    <br>
                    <br>
                    <div class="row container-fluid text-center">
                        <div class="col-md-2 col-md-offset-3 section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/CLI/clipart-listen.webp"  width="130" height="130"
                                    alt="Warehouse Icon" 
                                    style="min-width:90px !important;min-height:90px !important;width:82%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p11'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 col-md-offset-left section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/CLI/clipart-notify.webp" width="130" height="130"
                                    alt="Warehouse Icon">
                                    <p class="content-text">
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p12'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class=" panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 col-md-offset-left section_2">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-graph.webp" width="130" height="130"
                                    alt="Warehouse Icon">
                                    <p class="content-text">
                                        <?php displayText('container-loading-inspection', $_SESSION["language"], 'p13'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                <?php displayText('container-loading-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <p style="color:white;padding-top:5%; font-size:1.1rem;padding-left: 8rem; margin:0 auto; text-align:center; width:75%;letter-spacing:0.01em;">
                    <?php displayText('container-loading-inspection', $_SESSION["language"], 'p14'); ?>
                </p>
                <div class="row" style="padding-bottom:3rem;position:relative">
                </div>
            </div>
        </div>
    </div>
    <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
    <script src="js/jquery.matchHeight.js" type="text/javascript"></script>
    <script src="js/matchHeight.js" type="text/javascript"></script>
    <script src="js/header/CLI-header.js" type="text/javascript"></script>
    <script type="text/javascript">
        var title = "CONTAINER LOADING INSPECTION";
        var acronym = "(CLI)"


        const collection = document.querySelector(".header-body");
        const section2Flex = document.querySelector(".section2Flex p");

        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/CLI/CLI-head.jpg)";
        collection.style.backgroundRepeat = "no-repeat";
        collection.style.backgroundPosition  = "center";
        collection.style.backgroundSize   = "100% 100%";

        function myResize() {
            const load_width = window.innerWidth;

            

            if(load_width > 746) {
                collection.style.backgroundSize   = "100% 100%";
                section2Flex.style.paddingLeft = '8rem';    
            }

            if(load_width < 746) {
                collection.style.backgroundSize   = "100% 70%";
                section2Flex.style.paddingLeft = '';    
            }
        }

        window.addEventListener('load', myResize);
        window.addEventListener('resize', myResize);


        $(document).ready(function() {
            window.setTimeout("fadeMyDiv();", 1200);
        })
        function fadeMyDiv() {
            var language = '<?php echo $_SESSION["language"]; ?>';
            if (language ==='en') {
                lang = '<?php displayText("container-loading-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'fr') {
                lang = '<?php displayText("container-loading-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'de') {
                lang = '<?php displayText("container-loading-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pl') {
                lang = '<?php displayText("container-loading-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'ru') {
                lang = '<?php displayText("container-loading-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'es') {
                lang = '<?php displayText("container-loading-inspection", $_SESSION["language"], "h2-1"); ?>';
            }
            $("#parallax").fadeIn(1000);
            $("#page-title").text(lang).fadeIn();
            $("#content-img").fadeIn('slow');
        }

        (function() {
            document.addEventListener("mousemove", parallax);
            const elem = document.querySelector("#parallax");
            function parallax(e) {
                let _w = window.innerWidth / 2;
                let _h = window.innerHeight / 2;
                let _mouseX = e.clientX;
                let _mouseY = e.clientY;
                let _depth1 = `${50 - (_mouseX - _w) * -0.0007}% ${50 - (_mouseY - _h) * -0.0007}%`;
                let _depth2 = `${50 - (_mouseX - _w) * 0.0007}% ${50 - (_mouseY - _h) * 0.0007}%`;
                let x = `${_depth1},${_depth2}`;
                elem.style.backgroundPosition = x;
            }
        })(
        );

        jQuery(document).on("ready", (function() {
            jQuery(window).on("resize", (function() {
                jQuery(window).width() < 990 && jQuery(window).width() > 200 ? (
                        $('.contact-us-btn').hide(),
                        $('.p-5').removeClass('flex-container'),
                        $('.p-5').css('padding', '10%')) :
                    jQuery(window).width() > 720 ? (
                        $('.contact-us-btn').show(),
                        $('.p-5').addClass('flex-container'),
                        $('.p-5').css('padding-left', '20%')) :
                    jQuery(document).width()
            })).trigger("resize")
        }));
    </script>
    <script src="js/servicesParallaxStyle.js"></script>
</body>
</html>