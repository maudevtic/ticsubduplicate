<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - During Production Inspection</title>
    <script src="https://kit.fontawesome.com/4e3a55c61a.js" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="description" content="DURING PRODUCTION INSPECTION (DUPRO) During production inspection, or “DUPRO”, are recommended when оrdеrіng a product for thе fіrѕt tіmе оr working with a nеw factory as if you have a have a bit quantity order with very strict quality requirements. Durіng production іnѕресtіоnѕ аllоws the buуеr to find аnd аddrеѕѕ аnу dеfесtѕ or deviation at a very early stage of the production process to avoid and prevent them еndіng up іn thе fіnаl рrоduсt. DUPRO tаkеѕ рlасе whеn 10-20% оf thе рrоduсtіоn hаѕ been completed and gіvіng уоu аn up-close look аt thе mаnufасturіng рrосеѕѕ, mаtеrіаl uѕе, and workflow." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <script src="js/pixi.min.js"></script>
    <link rel="stylesheet" href="css/psi-new.css">
    <link rel="stylesheet" href="css/glide/glide.core.min.css">
    <link rel="stylesheet" href="css/glide/glide.theme.min.css">
    <link rel="stylesheet" href="css/servicesParallaxStyle.css">
    <style>

        @media (min-width: 992px) {

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
            <!-- <div class="row">
                <div class="img-container">
                    <div id="parallax">
                        <div class="col-md-8 col-lg-offset-2 textBanner container-fluid">
                            <h1><?php displayText('during-production-inspection', $_SESSION["language"], 'h1-1'); ?></h1>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="col-md-8 col-lg-offset-2 textBanner container-fluid">
                <h1><?php displayText('during-production-inspection', $_SESSION["language"], 'h1-1'); ?></h1>
            </div>
        </div>
        <br>

        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="row">
                <div class="col-md-12 col-md-offset-2">
                    <h2 class="text16">
                        <?php displayText('during-production-inspection', $_SESSION["language"], 'h2-1'); ?>
                    </h2>
                </div>
                <div class="col-md-4 col-md-offset-2">
                    <br>
                    <p>
                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p1'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p2'); ?>
                    </p>
                    <br>
                </div>
                <div class="col-md-4 m-auto">
                    <div style="padding:5% 5% 5% 5%;">
                        <img src="images/inspection-page/during-production-inspection.webp" width="543.922" height=" 217.562" alt="DUPRO Apperance">
                    </div>
                </div>
            </div>
            <div class="orange_section" height="705px">
                <div>
                    <button class="contact-us-btn" onclick="showContactUsNewWindow()">
                        <a onclick="showContactUsNewWindow()">
                            <?php displayText('during-production-inspection', $_SESSION["language"], 'a1'); ?>
                        <br><i class="fas fa-envelope"></i></a>
                    </button>
                </div>
                <div class="container-fluid col">
                    <h1 class='text16White'>
                        <?php displayText('during-production-inspection', $_SESSION["language"], 'h1-2'); ?>
                    </h1>
                    <div class="col-md-12 section2Flex" style="padding-left: 0;">
                        <p style="color:white; font-size:1.1rem;padding-left: 8rem; margin:0 auto;padding-bottom:5vw; text-align:center; width:75%;letter-spacing:0.01em;">
                            <?php displayText('during-production-inspection', $_SESSION["language"], 'p3'); ?>
                        </p>
                    </div>
                </div>
                <div class="container-fluid col">
                    <h1 class='text17' style="padding-bottom:3%">
                        <?php displayText('during-production-inspection', $_SESSION["language"], 'h1-3'); ?>
                    </h1>
                    <div class="row container-fluid text-center centerIcon">
                        <div class="col-md-2 centered col-md-offset-1">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/clipart-investigate.webp" alt="Warehouse Icon" width="130" height="130"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p4'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('during-production-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/dupro/clipart-supervisor.webp" alt="Auditor Icon" width="130" height="130"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p5'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('during-production-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/dupro/clipart-dupro.webp" alt="BoxSize Icon" width="130" height="130"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p6'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('during-production-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/dupro/clipart-verify.webp" alt="Form Icon" width="130" height="130"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p7'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('during-production-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-2 centered">
                            <div class="content-box">
                                <div class="content-body">
                                    <img src="images/dupro/clipart-report.webp" alt="Warehouse Icon" width="130" height="130"
                                    style="min-width:90px !important;min-height:90px !important;width:80%;height:80%;">
                                    <p class="content-text">
                                        <?php displayText('during-production-inspection', $_SESSION["language"], 'p8'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="panel-footer text-center" onclick="showContactUsNewWindow()">
                                <span class="text13">
                                    <?php displayText('during-production-inspection', $_SESSION["language"], 'span1'); ?>
                                </span>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
        <div style="padding-bottom:25%"></div>
        <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
    <script src="js/jquery.matchHeight.js" type="text/javascript"></script>
    <script src="js/matchHeight.js" type="text/javascript">
        $(document).ready(function() {
            window.setTimeout("fadeMyDiv();", 1500); //call fade in 3 seconds
        })
        function fadeMyDiv() {
            $("#overlay").fadeOut('slow');
            $('#parallax').fadeIn('slow');
        }
    </script>
    <script type="text/javascript">
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
        //         let _depth3 = `${50 - (_mouseX - _w) * 0.000}% ${50 - (_mouseY - _h) * 0.000}%`;
        //         let x = `${_depth1},${_depth2},${_depth3}`;
        //         elem.style.backgroundPosition = x;
        //     }
        // })();

        const collection = document.querySelector(".header-body");
        const centered = document.querySelectorAll(".centered");
        const centerIcon = document.querySelector(".centerIcon");
        const section2Flex = document.querySelector(".section2Flex p");

        


        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/dupro/dupro-head.jpg)";
        collection.style.backgroundRepeat = "no-repeat";
        collection.style.backgroundPosition  = "center";
        collection.style.backgroundSize   = "100% 100%";
        // console.log(collection.offsetHeight)

        // console.log(centerIcon);

        function myload() {
            for (var i=0; i < centered.length; i++) {
                if ( centered[i].classList.contains('col-md-12') ) {
                    centered[i].classList.add("col-md-2");
                    centered[i].classList.remove("col-md-12");          
                }
                centered[i].style.paddingTop = '10px';
                centerIcon.style.paddingLeft = '5px';
                centered[i].style.width = '';
            }
        }

        function myResize() {
            const load_width = window.innerWidth;

            

            if(load_width > 746) {
                collection.style.backgroundSize   = "100% 100%";

                for (var i=0; i < centered.length; i++) {
                    if ( centered[i].classList.contains('col-md-12') ) {
                        centered[i].classList.add("col-md-2");
                        centered[i].classList.remove("col-md-12");
                        centered[i].style.width = ''; 
                        section2Flex.style.paddingLeft = '8rem';                       
                    }
                }
            }

            if(load_width < 746) {
                collection.style.backgroundSize   = "100% 70%";

                for (var i=0; i < centered.length; i++) {
                    if ( centered[i].classList.contains('col-md-2') ) {
                        centered[i].classList.add("col-md-12");
                        centered[i].classList.remove("col-md-2");
                        centered[i].classList.remove("col-md-2");
                        centered[i].style.width = '';
                        section2Flex.style.paddingLeft = '0';
                    }
                }
            }
        }


        

        
        window.addEventListener('load', myload);
        window.addEventListener('load', myResize);
        window.addEventListener('resize', myResize);
        
        jQuery(document).on("ready", (function() {

           

            jQuery(window).on("resize", (function() {

                

                jQuery(window).width() < 990 && jQuery(window).width() > 200 ? (
                        $('.contact-us-btn').hide(),
                        $('#left_col').removeClass('col-xs-offset-2'),
                        $('#left_col').addClass('centered'),
                        $('#padded-col').removeAttr('style'),
                        $('#last-col').removeClass('col-xs-offset-5'),
                        $('#last-col').addClass('centered'),
                        $('.p-5').removeClass('flex-container'),
                        $('.p-5').css('padding', '10%')) :
                    jQuery(window).width() > 720 ? (
                        $('#left_col').removeClass('centered'),
                        $('#left_col').addClass('col-xs-offset-2'),
                        $('.vTabs').show(),
                        $('#padded-col').css('padding-bottom', '10rem'),
                        $('#last-col').addClass('col-xs-offset-5'),
                        $('.contact-us-btn').show(),
                        $('.p-5').addClass('flex-container'),
                        $('.p-5').css('padding-left', '20%')) :
                    jQuery(document).width()
            })).trigger("resize")
        }));
    </script>
    <script src="js/header/DUPRO-header.js"></script>
</body>
</html>