<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Pre Production Inspection</title>
    <script src="https://kit.fontawesome.com/4e3a55c61a.js" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="description" content="PRE-PRODUCTION INSPECTION The Pre-Production Inspection (PPI) is the first step to assure the quality of your products. This type of quality control is performed before the production process begins. We will check the quantity and quality of the raw materials and components which are used for your order, and whether they are in conformity with the product specifications." />
    <?php include '_includes/meta.php'; ?>
    <?php
    if ($_SESSION["language"] === '' || $_SESSION["language"] === 'en' || $_SESSION["language"] === null) {
        include 'MAINCSS/css.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-en.css">
    <?php
    } else if ($_SESSION["language"] === "cz") {//Czech
        include 'MAINCSS/css-cz.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-cz.css">
    <?php    
    } else if ($_SESSION["language"] === "da") {//Danish
        include 'MAINCSS/css-da.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-da.css">
    <?php
    } else if ($_SESSION["language"] === "fr") {//French
        include 'MAINCSS/css-fr.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-fr.css">
    <?php
    } else if ($_SESSION["language"] === "de") {//German
        include 'MAINCSS/css-de.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-de.css">
    <?php
    } else if ($_SESSION["language"] === "it") {//Italian
        include 'MAINCSS/css-it.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-it.css">
    <?php
    } else if ($_SESSION["language"] === "pl") {//Polish
        include 'MAINCSS/css-pl.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-pl.css">
    <?php
    } else if ($_SESSION["language"] === "pt") {//Portuguese
        include 'MAINCSS/css-pt.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-pt.css">
    <?php
    } else if ($_SESSION["language"] === "ru") {//Russian
        include 'MAINCSS/css-ru.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-ru.css">
    <?php
    } else if ($_SESSION["language"] === "sk") {//Slovak
        include 'MAINCSS/css-sk.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-sk.css">
    <?php } else if ($_SESSION["language"] === "es") {//Spanish
        include 'MAINCSS/css-es.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-es.css">
    <?php
    } else if ($_SESSION["language"] === "sv") {//Swedish
        include 'MAINCSS/css-sv.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-sv.css">
    <?php
    } else if ($_SESSION["language"] === "tk") {//Turkish
        include 'MAINCSS/css-tk.php'; ?>
        <link rel="stylesheet" href="css/our-services/psi-new-tk.css">
    <?php } ?>
    <script src="js/pixi.min.js"></script>
    
    <link rel="stylesheet" href="css/glide/glide.core.min.css">
    <link rel="stylesheet" href="css/glide/glide.theme.min.css">
    <link rel="stylesheet" href="css/servicesParallaxStyle.css">
    <style>
        @media (min-width: 992px) {
            .col-md-2 {
                width: 18.666666666666664%;
            }
            .col-md-offset-2 {
                margin-left: 18.66666667%;
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
        <div class="header-body">
            <div class=" row">
                <!-- <div class=" img-container"> -->
                    <!-- <div id="parallax"> -->
                        <div class="col-md-8 col-lg-offset-2 textBanner container-fluid">
                            <h1 id="page-title"></h1>
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
                        <h2 class="text16"><?php displayText('pre-production-inspection', $_SESSION["language"], 'h2-1'); ?></h2>
                    </div>
                </div>
                <div class="col-md-4 col-md-offset-2 p-3">
                    <br>
                    <p><?php displayText('pre-production-inspection', $_SESSION["language"], 'p1'); ?></p>
                    <br>
                    <p><?php displayText('pre-production-inspection', $_SESSION["language"], 'p2'); ?>
                    </p>
                    <br>
                </div>
                <div class="col-md-4 m-auto">
                    <div style="padding:5% 5% 5% 5%;">
                        <img src="images/inspection-page/pre-production-inspection.webp" alt="PSI Apperance" width="543.922" height="217.562">
                    </div>
                </div>
            </div>
            <div class="orange_section">
                <div>
                    <button class="contact-us-btn" onclick="showContactUsNewWindow()">
                        <a>
                            <?php displayText('pre-production-inspection', $_SESSION["language"], 'a1'); ?><br>
                            <i class="fas fa-envelope"></i>
                        </a>
                    </button>
                </div>

                <div class="container-fluid col">
                    <h1 class='text16White'><?php displayText('pre-production-inspection', $_SESSION["language"], 'h1-1'); ?></h1>
                    <div class="col-md-12 section2Flex" style="padding-left: 0;">
                        <p style="color:white; font-size:1.1rem;padding-left: 8rem; margin:0 auto;padding-bottom:5vw; text-align:center; width:75%;letter-spacing:0.01em;">
                            <?php displayText('pre-production-inspection', $_SESSION["language"], 'p3'); ?>
                        </p>
                    </div>
                </div>

                <div class="container-fluid col">
                    <h1 class='text17' style="padding-bottom:3%">
                        <?php displayText('pre-production-inspection', $_SESSION["language"], 'h1-2'); ?>
                    </h1>
                    
                    <div class="row container-fluid text-center">
                        <div class="col-md-2 section_1 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-investigate.webp" width="130" height="130" alt="Warehouse Icon">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p4'); ?></p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                        </div>
                        <div class="col-md-2 section_1 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-selection.webp" width="130" height="130" alt="BoxSize Icon">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p5'); ?></p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                        </div>
                        <div class="col-md-2 section_1 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-raw.webp" width="130" height="130" alt="Form Icon">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p6'); ?></p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                        </div>
                        <div class="col-md-2 section_1 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-check.webp" alt="Warehouse Icon" width="130" height="130" style="min-width:95px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p7'); ?></p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                        </div>
                        <div class="col-md-2 section_1  centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-monitor.webp" width="130" height="130" alt="Warehouse Icon">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p8'); ?></p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row container-fluid text-center">
                        <div class="col-md-2 col-md-offset-3 section_1 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-production.webp" alt="Warehouse Icon" width="130" height="130" style="min-width:90px !important;min-height:90px !important;width:82%;height:80%;">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p9'); ?></p>
                                </div>
                            </div>
                            <div class=" panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                        </div>
                        <div class="col-md-2  section_1 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-graph.webp" alt="Warehouse Icon" width="130" height="130">
                                    <p class="content-text"><?php displayText('pre-production-inspection', $_SESSION["language"], 'p10'); ?></p>
                                </div>
                            </div>
                            <div class=" panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13"><?php displayText('pre-production-inspection', $_SESSION["language"], 'span1'); ?></span>
                            </div>
                            <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
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
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'de') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'fr') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pl') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'ru') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'es') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language ==='cz') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'sk') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'da') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'it') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pt') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'sv') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'tk') {
                lang = '<?php displayText("pre-production-inspection", $_SESSION["language"], "h2-1"); ?>';
            }
            $("#overlay").fadeOut('slow');
            $('#parallax').fadeIn('slow');
            $('#page-title').text(lang).fadeIn('slow');
        }

        const collection = document.querySelector(".header-body");

        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/PPI/ppi-head.webp)";
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

    </script>
    <!-- <script src="js/header/PPI-header.js"></script> -->
    <script src="js/servicesParallaxStyle.js"></script>
</body>
</html>