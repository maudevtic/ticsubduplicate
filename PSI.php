<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Pre Shipment Inspection</title>
    <script src="https://kit.fontawesome.com/4e3a55c61a.js" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="description" content="PRE SHIPMENT INSPECTION The Pre-Shipment Inspection (PSI) is one of the most conducted services by TIC. This is the last chance to avoid shipping wrong or defect products. Pre-shipment inspection ensures that production complies with specifications of the client. This inspection will take place, when the order is 100% finished in production and at least 80% of the order has been fully packed for shipping." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <script src="js/pixi.min.js"></script>
    <link rel="stylesheet" href="css/psi-new.css">
    <link rel="stylesheet" href="css/glide/glide.core.min.css">
    <link rel="stylesheet" href="css/glide/glide.theme.min.css">
    <link rel="stylesheet" href="css/servicesParallaxStyle.css">
    <style>
        .panel .panel-default .content-body {
            background: transparent !important;
        }
        @media (min-width: 992px) {
            .col-md-2 {
                width: 18.676666666666664%;
            }

            .col-md-offset-1 {
                margin-left: 3.6% !important;
            }

            .panel-footer {
                cursor: pointer;
            }
        }
    </style>
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header-body" height="535px" width="auto">
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
            <div class="row ">
                <div class="row">
                    <div class="col-md-12 col-md-offset-2">
                        <h2 class="text16">
                            <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'h2-1'); ?>
                        </h2>
                    </div>
                </div>
                <div class="col-md-4 col-md-offset-2 p-3">
                    <br>
                    <p>
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p1'); ?>
                    </p><br>
                    <p>
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p2'); ?>
                    </p><br>
                    <p>
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p3'); ?>
                    </p>
                </div>
                <div class="col-md-4 m-auto">
                    <br>
                    <div>
                        <img src="images/psi/sukatero.webp" width="800" height="600" alt="PSI Apperance">
                    </div>
                    <br>
                </div>
            </div>
            <div class="orange_section" height="705px" style="padding-bottom: 5%;">
                <div>
                    <button class="contact-us-btn" onclick="showContactUsNewWindow()">
                        <a onclick="showContactUsNewWindow()">
                            <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'a1'); ?>
                        <br>
                            <i class="fas fa-envelope"></i>
                        </a>
                    </button>
                </div>
                <div class="container-fluid">
                    <h1 class='text16White'>
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'h1-1'); ?>
                    </h1>
                    <div class="col-md-12 section2Flex">
                        <p style=" color:white; font-size:1.1rem;padding-bottom:5vw;text-align:center;">
                            <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p4'); ?>
                        </p>
                    </div>
                </div>
                <div class="col">
                    <h1 class='text17' style="padding-bottom:3%">
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'h1-2'); ?>
                    </h1>
                    <div class="row container-fluid text-center centerIcon">
                        <div class="col-md-2 col-md-offset-1">
                            <div class="content-box" style="background: transparent;">
                                <div class="content-body">
                                    <img src="images/psi/truckandwarehouse.svg" width="130" height="130"
                                    alt="Warehouse Icon"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p5'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="content-box" style=" background: transparent;">
                                <div class="content-body">
                                    <img src="images/psi/auditicon.svg" width="130" height="130"
                                    alt="Auditor Icon"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p6'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="content-box" style="background: transparent;">
                                <div class="content-body">
                                    <img src="images/psi/boxsize.svg" width="130" height="130"
                                    alt="BoxSize Icon"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p7'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="content-box" style=" background: transparent;">
                                <div class="content-body">
                                    <img src="images/psi/formIcon.svg" width="130" height="130"
                                    alt="Form Icon"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p8'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 ">
                            <div class="content-box" style=" background: transparent;">
                                <div class="content-body">
                                    <img src="images/psi/ledgerIcon.svg" width="130" height="130"
                                    alt="Warehouse Icon"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'p5'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="container-fluid row">
                <div class="container">
                    <h2 style="color: #FF811D;text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);text-transform: uppercase;left:0;" class="text18">
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'h2-2'); ?>
                    </h2>
                </div>
                <div class="container-fluid vTabs">
                    <?php include "includes/vertical-tabs.php" ?>
                </div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="container-fluid" style="padding-bottom: 10%;">
                    <h2 class="text18 text-center">
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'h2-3'); ?>
                    </h2>
                    <br>
                    <h4 class="text-center">
                        <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'h2-4'); ?>
                    </h4>
                    <img src="images/psi/approved_badge.svg" width="60px" height="60px"
                    alt="Approved"
                    class="text-center img-responsive approvedBadge">
                </div>
            </div>
        </div>
    </div>
    <?php include 'includes/footer.php'; ?>
    <?php include 'MAINCSS/js.php'; ?>
    <script src="js/jquery.matchHeight.js" type="text/javascript"></script>
    <script src="js/matchHeight.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            window.setTimeout("fadeMyDiv();", 1500); //call fade in 3 seconds
        })
        function fadeMyDiv() {
            var language = '<?php echo $_SESSION["language"]; ?>';
            if (language ==='en') {
                lang = '<?php displayText("pre-shipment-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'fr') {
                lang = '<?php displayText("pre-shipment-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'de') {
                lang = '<?php displayText("pre-shipment-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pl') {
                lang = '<?php displayText("pre-shipment-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'ru') {
                lang = '<?php displayText("pre-shipment-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'es') {
                lang = '<?php displayText("pre-shipment-inspection", $_SESSION["language"], "h2-1"); ?>';
            }
            $("#overlay").fadeOut('slow');
            $('#parallax').fadeIn('slow');
            $("#page-title").text(lang).fadeIn();
        }

        const collection = document.querySelector(".header-body");

        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/psi/psi-header.webp)";
        collection.style.backgroundRepeat = "no-repeat";
        collection.style.backgroundPosition  = "center";
        collection.style.backgroundSize   = "100% 100%";

        function myResize() {
            const load_width = window.innerWidth;

            

            if(load_width > 746) {
                collection.style.backgroundSize   = "100% 100%";
            }

            if(load_width < 746) {
                collection.style.backgroundSize   = "100% 70%";
            }
        }

        window.addEventListener('load', myResize);
        window.addEventListener('resize', myResize);


        // PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
        // const IMG_WIDTH = window.innerWidth;
        // const IMG_HEIGHT = window.innerHeight * 0.75;
        // const SCALE_FACTOR = 25;
        // const app = new PIXI.Application({
        //     width: IMG_WIDTH,
        //     height: IMG_HEIGHT,
        //     resizeTo: window 
        // });
        // const container = document.getElementById("parallax");
        // container.appendChild(app.view);
        // const img = new PIXI.Sprite.from("images/psi/psi-header.webp");
        // img.width = IMG_WIDTH;
        // img.height = IMG_HEIGHT;
        // app.stage.addChild(img);
        // depthMap = new PIXI.Sprite.from("images/psi/psi-depth.webp");
        // depthMap.width = IMG_WIDTH;
        // depthMap.height = IMG_HEIGHT;
        // app.stage.addChild(depthMap);
        // displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
        // app.stage.filters = [displacementFilter];
        // displacementFilter.scale.x = 0;
        // displacementFilter.scale.y = 0;
        // window.onmousemove = function(e) {
        //     displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) * 0.1 / 20;
        //     displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) * 0.1 / 20;
        // };

        // (function() {
        //     document.addEventListener("mousemove", parallax);
        //     const elem = document.querySelector("#parallax");
        //     function parallax(e) {
        //         let _w = window.innerWidth / 2;
        //         let _h = window.innerHeight / 2;
        //         let _mouseX = e.clientX;
        //         let _mouseY = e.clientY;
        //         let _depth1 = `${50 - (_mouseX - _w) * -0.0007}% ${50 - (_mouseY - _h) * -0.0007}%`;
        //         let _depth2 = `${50 - (_mouseX - _w) * 0.0007}% ${50 - (_mouseY - _h) * 0.0007}%`;
        //         let _depth3 = `${50 - (_mouseX - _w) * 0.000}% ${50 - (_mouseY - _h) * 0.00}%`;
        //         let x = `${_depth1},${_depth2}, ${_depth3}`;
        //         elem.style.backgroundPosition = x;
        //     }
        // })(
        // );

        jQuery(document).on("ready", (function() {
            jQuery(window).on("resize", (function() {
                jQuery(window).width() < 720 && jQuery(window).width() > 200 ? (
                        $('.contact_form').hide(),
                        $('.p-5').removeClass('flex-container'),
                        $('.p-5').css('padding', '10%')) :
                    jQuery(window).width() > 720 ? (
                        $('.vTabs').show(),
                        $('.contact_form').show(),
                        $('.p-5').addClass('flex-container'),
                        $('.p-5').css('padding-left', '20%')) :
                    jQuery(document).width()
            })).trigger("resize")
        }));
    </script>
    <script src="js/servicesParallaxStyle.js"></script>
</body>
</html>