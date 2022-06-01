<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Physical Audit / Supplier Survey</title>
    <script src="https://kit.fontawesome.com/4e3a55c61a.js" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="description" content="PHYSICAL AUDIT / SUPPLIER SURVEY Due to many fraud companies existing on the internet, we highly recommend having at least a supplier survey for new clients. No matter if this is a factory, a trading company or sales agent, this tool can help you to prevent losing lots of money and to avoid troubles for your company." />
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
            <div class=" row">
                <!-- <div class=" img-container"> -->
                    <!-- <div id="parallax"> -->
                        <div class="col-md-8 col-lg-offset-2 textBanner container-fluid">
                            <h1 id="page-title">
                            </h1>
                        </div>
                    <!-- </div>
                </div> -->
            </div>
        </div>
    </div>
    <br>

    <div class="clearfix"></div>
    <div class="section_holder20">
        <div class="row">
            <div class="row">
                <div class="col-md-12 col-md-offset-2">
                    <h2 class="text16">
                        <?php displayText('physical-audit', $_SESSION["language"], 'h2-1'); ?>
                    </h2>
                </div>
            </div>
            <div class="col-md-4 col-md-offset-2 p-3">
                <br>
                <p>
                    <?php displayText('physical-audit', $_SESSION["language"], 'p1'); ?>
                </p>
                <br>
            </div>
            <div class="col-md-4 m-auto">
                <br>
                <div><img src="images/inspection-page/physical-audit.webp" alt="PSI Apperance" width="543.922" height=" 217.562"></div>
                <br>
            </div>
        </div>
        <div class="orange_section padding-xl" height="705rem">
            <div>
                <button class="contact-us-btn" onclick="showContactUsNewWindow()"><a onclick="showContactUsNewWindow()">
                    <?php displayText('physical-audit', $_SESSION["language"], 'a1'); ?>
                <br><i class="fas fa-envelope"></i></a>
                </button>
            </div>
            <br>
            <div class="container-fluid col padding-xl">
                <h1 class='text16White'>
                    <?php displayText('physical-audit', $_SESSION["language"], 'h1-1'); ?></li>
                </h1>
                <div class="col-md-12 section2Flex" style="padding-left: 0;">
                    <p style=" color:white; font-size:1.1rem;padding-left: 8rem; margin:0 auto;padding-bottom:5vw; text-align:center; width:75%;letter-spacing:0.01em;">
                        <?php displayText('physical-audit', $_SESSION["language"], 'p2'); ?>
                    </p>
                </div>
            </div>
            <div class="container-fluid col">
                <div class="row padding-md ">
                    <div class="col-md-2 col-md-offset-2 ">
                        <div class="glide">
                            <div class="glide__track" data-glide-el="track">
                                <ul class="glide__slides">
                                    <li class="glide__slide"><img src="images/PA/location.svg" alt=""></li>
                                    <li class="glide__slide"><img src="images/PA/verify.svg" alt=""></li>
                                    <li class="glide__slide"><img src="images/PA/bank.svg" alt=""></li>
                                    <li class="glide__slide"><img src="images/psi/auditicon.svg" alt=""></li>
                                    <li class="glide__slide"><img src="images/PA/capabilities.svg" alt=""></li>
                                    <li class="glide__slide"><img src="images/PA/photos.svg" alt=""></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-offset-1">
                        <ul class="bullets" style="line-height: 1.9rem;">
                            <li class="a"><?php displayText('physical-audit', $_SESSION["language"], 'li1'); ?></li>
                            <li class="a"><?php displayText('physical-audit', $_SESSION["language"], 'li2'); ?></li></li>
                            <li class="a"><?php displayText('physical-audit', $_SESSION["language"], 'li3'); ?></li></li>
                            <li class="a"><?php displayText('physical-audit', $_SESSION["language"], 'li4'); ?></li></li>
                            <li class="a"><?php displayText('physical-audit', $_SESSION["language"], 'li5'); ?></li></li>
                            <li class="a"><?php displayText('physical-audit', $_SESSION["language"], 'li6'); ?></li></li>
                        </ul>
                    </div>
                </div>
                <br>
                <br>
                <div class="row"></div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
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
            window.setTimeout("fadeMyDiv();", 1200); //call fade in 3 seconds
        })
        function fadeMyDiv() {
            var language = '<?php echo $_SESSION["language"]; ?>';
            if (language ==='en') {
                lang = '<?php displayText("physical-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'fr') {
                lang = '<?php displayText("physical-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'de') {
                lang = '<?php displayText("physical-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pl') {
                lang = '<?php displayText("physical-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'ru') {
                lang = '<?php displayText("physical-audit", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'es') {
                lang = '<?php displayText("physical-audit", $_SESSION["language"], "h2-1"); ?>';
            }
            $("#parallax").fadeIn('slow');
            $("#page-title").text(lang).fadeIn();
        }

        const collection = document.querySelector(".header-body");
        const section2Flex = document.querySelector(".section2Flex p");

        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/PA/pa-head.webp)";
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

        // PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
        // const IMG_WIDTH = window.screen.width;
        // const IMG_HEIGHT = window.screen.width * 0.6;
        // const SCALE_FACTOR = 25;
        // const app = new PIXI.Application({
        //     width: IMG_WIDTH,
        //     height: IMG_HEIGHT
        // });
        // const container = document.getElementById("parallax");
        // container.display = 'fixed';
        // container.appendChild(app.view);
        // const img = new PIXI.Sprite.from("images/PA/pa-head.webp");
        // img.width = IMG_WIDTH;
        // img.height = IMG_HEIGHT;
        // app.stage.addChild(img);
        // depthMap = new PIXI.Sprite.from("images/PA/pa-depth.webp");
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
    <script src="js/servicesParallaxStyle.js"></script>
</body>
</html>