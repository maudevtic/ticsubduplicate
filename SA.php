<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Social Audit</title>
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
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header-body" height="535px" width="auto">
            <div class="row">
                <!-- <div class="img-container">
                    <div id="parallax"> -->
                        <div class="col-md-8 col-lg-offset-2 textBanner container-fluid">
                            <h1 id="page-title"></h1>
                        </div>
                    <!-- </div>
                </div> -->
            </div>
        </div>
        <br>
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="row">
                <div class="row">
                    <div class="col-md-12 col-md-offset-2">
                        <h2 class="text16">
                            <?php displayText('social-audit', $_SESSION["language"], 'h2-1'); ?>
                        </h2>
                    </div>
                </div>
                <div class="col-md-4 col-md-offset-2 p-3">
                    <br>
                    <p>
                        <?php displayText('social-audit', $_SESSION["language"], 'p1'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('social-audit', $_SESSION["language"], 'p2'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('social-audit', $_SESSION["language"], 'p3'); ?>
                    </p>
                </div>
                <div class="col-md-4 m-auto">
                    <div style="padding:3% 3% 0 3%; transform: scale(0.7);">
                        <img src="images/SA/img1.webp" alt="PSI Apperance" width="543.922" height=" 538.391">
                    </div>
                </div>
            </div>
            <div class="row" style="margin:0 auto;">
                <div class="col-md-4 col-md-offset-2 ">
                    <div style="transform: scale(0.7);">
                        <img src="images/SA/img2.webp" alt="PSI Apperance" width="604.328" height=" 593.172">
                    </div>
                </div>
                <div class="col-md-4 ">
                    <br>
                    <p>
                        <?php displayText('social-audit', $_SESSION["language"], 'p4'); ?>
                    </p>
                    <br>
                    <p>
                        <?php displayText('social-audit', $_SESSION["language"], 'p5'); ?>
                    </p>
                </div>
            </div>
            <div class="orange_section padding-xl" height="705rem">
                <div>
                    <button class="contact-us-btn" onclick="showContactUsNewWindow()">
                        <a onclick="showContactUsNewWindow()">
                        <?php displayText('social-audit', $_SESSION["language"], 'a1'); ?>
                        <br><i class="fas fa-envelope"></i></a>
                    </button>
                </div>
                <br>
                <div class="container-fluid col padding-xl">
                    <h1 class='text16White'>
                    <?php displayText('social-audit', $_SESSION["language"], 'h1-1'); ?>
                    </h1>
                </div>
                <div class="container-fluid col">
                    <div class="row padding-md">
                        <div class="col-md-2 col-xs-offset-3">
                            <div class="glide" width="282" height="219.047">
                                <div class="glide__track" data-glide-el="track">
                                    <ul class="glide__slides">
                                        <li class="glide__slide"><img src="images/SA/healthandsafety.svg" alt=""></li>
                                        <li class="glide__slide"><img src="images/SA/law.svg" alt=""></li>
                                        <li class="glide__slide"><img src="images/SA/disc.svg" alt=""></li>
                                        <li class="glide__slide"><img src="images/SA/compensate.svg" alt=""></li>
                                        <li class="glide__slide"><img src="images/SA/env.svg" alt=""></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-xs-offset-1">
                            <ul class="bullets" style="line-height: 1.9rem;">
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li1'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li2'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li3'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li4'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li5'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li6'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li7'); ?></li>
                            </ul>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div class="container-fluid col padding-xl">
                        <h1 class='text16White'><?php displayText('social-audit', $_SESSION["language"], 'h1-2'); ?></h1>
                    </div>
                    <div class="row ">
                        <div class="col-md-3 col-xs-offset-3">
                            <ul class="bullets">
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li8'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li9'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li10'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li11'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li12'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li13'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li14'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li15'); ?></li>
                                <li class="a"><?php displayText('social-audit', $_SESSION["language"], 'li16'); ?></li>
                            </ul>
                        </div>
                        <div class="row" style="padding-bottom:3rem;position:relative"></div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div><!-- class="site_wrapper" -->
    <?php include 'MAINCSS/js.php'; ?>
    <script src="js/glide/glide.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        const config = {
            type: "carousel",
            focusAt: 'center',
            perView: 1,
            gap: 100,
            autoplay: 2000,
            swipeThreshold: 80,
        }
        new Glide('.glide', config).mount()
        $(document).ready(function() {
            window.setTimeout("fadeMyDiv();", 1000);
        })
        function fadeMyDiv() {
            var language = '<?php echo $_SESSION["language"]; ?>';
            if (language ==='en') {
                lang = '<?php displayText("social-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'fr') {
                lang = '<?php displayText("social-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'de') {
                lang = '<?php displayText("social-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pl') {
                lang = '<?php displayText("social-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'ru') {
                lang = '<?php displayText("social-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'es') {
                lang = '<?php displayText("social-audit", $_SESSION["language"], "h2-1"); ?>';
            }
            $("#parallax").fadeIn('slow');
            $("#page-title").text(lang).fadeIn();
        }

        const collection = document.querySelector(".header-body");

        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/SA/SA-head.webp)";
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

        // const IMG_WIDTH = window.screen.width;
        // const IMG_HEIGHT = window.screen.width * 0.6;
        // const SCALE_FACTOR = 50;
        // const app = new PIXI.Application({
        //     width: IMG_WIDTH,
        //     height: IMG_HEIGHT
        // });
        // const container = document.getElementById("parallax");
        // container.appendChild(app.view);
        // const img = new PIXI.Sprite.from("images/SA/SA-head.webp");
        // img.width = IMG_WIDTH;
        // img.height = IMG_HEIGHT;
        // app.stage.addChild(img);
        // depthMap = new PIXI.Sprite.from("images/SA/SA-depth.webp");
        // depthMap.width = IMG_WIDTH;
        // depthMap.height = IMG_HEIGHT;
        // app.stage.addChild(depthMap);
        // displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
        // app.stage.filters = [displacementFilter];
        // displacementFilter.scale.x = 0;
        // displacementFilter.scale.y = 0;
        // container.addEventListener("mousemove", (e) => {
        //     displacementFilter.scale.x = (IMG_WIDTH / 2 - e.clientX) * 0.1 / SCALE_FACTOR;
        //     displacementFilter.scale.y = (IMG_HEIGHT / 2 - e.clientY) * 0.1 / SCALE_FACTOR;
        // })

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
                        $('#left_col').removeClass('col-xs-offset-2'),
                        $('#left_col').addClass('col-xs-offset-1'),
                        $('.p-5').removeClass('flex-container'),
                        $('.p-5').css('padding', '10%')) :
                    jQuery(window).width() > 720 ? (
                        $('#left_col').removeClass('col-xs-offset-1'),
                        $('#left_col').addClass('col-xs-offset-2'),
                        $('.vTabs').show(),
                        $('.contact-us-btn').show(),
                        $('.p-5').addClass('flex-container'),
                        $('.p-5').css('padding-left', '20%')) :
                    jQuery(document).width()
            })).trigger("resize")
        }));
    </script>
</body>
</html>