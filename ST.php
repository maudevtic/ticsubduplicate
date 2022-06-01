<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Sample Test</title>
    <script src="https://kit.fontawesome.com/4e3a55c61a.js" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="description" content="SAMPLE TEST If you ask one of your suppliers to send you a sample, you usually have to pay for the sample and the shipping costs yourself. When the samples arrive at you and do not meet your expectations and specifications, you have wasted a lot of money and time. Your suppliers send the samples to our testing laboratory, where they are carefully inspected and tested. With 10 years of experience and local gifts, this is easier and faster than sending samples to you first." />
    <!-- Meta -->
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <script src="js/pixi.min.js"></script>
    <link rel="stylesheet" href="css/psi-new.css">
    <link rel="stylesheet" href="css/glide/glide.core.min.css">
    <link rel="stylesheet" href="css/glide/glide.theme.min.css">
    <link rel="stylesheet" href="css/servicesParallaxStyle.css">
    <style>
        @media (min-width: 992px) {
            .col-md-offset-2 {
                margin-left: 18.866666666666664%;
            }
            .col-md-2 {
                width: 19.676666666666664%;
            }
            .col-xs-offset-1 {
                margin-left: 4.6% !important;
            }
            div.col-md-2 {
                transition: width 2s ease;
            }
            div.col-md-2:hover {
                cursor: pointer;
                overflow: inherit;
                width: 24rem;
            }
            .glide__arrow--left {
                left: -5em;
            }
            .glide__arrow--right {
                right: -5em;
            }
        }

        .glide__arrow {
            background-color: #ff6e20;
            border: none;
            border-radius: 60rem;
            box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 20%);
            text-shadow: 0 0.25em 0.5em rgb(0 0 0 / 10%);
        }

    </style>
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header-body" height="535px" width="auto">
            <div class=" row">
                <!-- <div class=" img-container">
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
                            <?php displayText('sample-test', $_SESSION["language"], 'h2-1'); ?>
                        </h2>
                    </div>
                </div>
                <div class="col-md-4 col-md-offset-2 p-3">
                    <br>
                    <p>
                        <?php displayText('sample-test', $_SESSION["language"], 'p1'); ?>
                    </p><br>
                    <p>
                        <?php displayText('sample-test', $_SESSION["language"], 'p2'); ?>
                    </p><br>
                </div>
                <div class="col-md-4 m-auto">
                    <div style="padding:5%;">
                        <img src="images/ST/ST-content.webp" width="543.922" height=" 242.219" alt="PSI Apperance">
                    </div>
                </div>
            </div>
            <div class="orange_section padding-xl" height="705rem">
                <div>
                    <button class="contact-us-btn" onclick="showContactUsNewWindow()">
                        <a onclick="showContactUsNewWindow()">
                            <?php displayText('sample-test', $_SESSION["language"], 'a1'); ?>
                            <br>
                            <i class="fas fa-envelope"></i>
                        </a>
                    </button>
                </div>
                <br>
                <div class="container-fluid padding-xl col">
                    <div class="row padding-xl">
                        <p class="special-text" style="color:white; font-size:1.1rem;padding-left: 5rem; margin:0 auto;padding-bottom:5vw; text-align:center; width:75%;letter-spacing:0.01em;">
                            <?php displayText('sample-test', $_SESSION["language"], 'p3'); ?>
                        </p>
                    </div>
                    <div class="row padding-top-lg">
                        <div class="col-md-8 col-md-offset-2 ">
                            <div class="glide" height="206.062" width="366.328">
                                <div class="glide__track" data-glide-el="track">
                                    <ul class="glide__slides">
                                        <li class="glide__slide"><img src="images/ST/slides/slide1.webp" alt="SAMPLE TEST" height="206.062" width="366.328"></li>
                                        <li class="glide__slide"><img src="images/ST/slides/slide3.webp" alt="SAMPLE TEST" height="206.062" width="366.328"></li>
                                        <li class="glide__slide"><img src="images/ST/slides/slide2.webp" alt="SAMPLE TEST" height="206.062" width="366.328"></li>
                                        <li class="glide__slide"><img src="images/ST/slides/slide4.webp" alt="SAMPLE TEST" height="206.062" width="366.328"></li>
                                        <li class="glide__slide"><img src="images/ST/slides/slide5.webp" alt="SAMPLE TEST" height="206.062" width="366.328"></li>
                                    </ul>
                                </div>
                                <div class="glide__arrows" data-glide-el="controls">
                                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="fas fa-angle-double-left"></i></button>
                                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="fas fa-angle-double-right"></i></button>
                                </div>
                                <div class="glide__bullets" data-glide-el="controls[nav]">
                                    <button class="glide__bullet" data-glide-dir="=0"></button>
                                    <button class="glide__bullet" data-glide-dir="=1"></button>
                                    <button class="glide__bullet" data-glide-dir="=2"></button>
                                    <button class="glide__bullet" data-glide-dir="=3"></button>
                                    <button class="glide__bullet" data-glide-dir="=4"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="padding-bottom:15rem;position:relative"></div>
            </div>
        </div><!-- class="section_holder20" -->
        <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
    <script src="js/glide/glide.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        const config = {
            type: "carousel",
            focusAt: 'center',
            perView: 3,
            autoplay: 2000,
            swipeThreshold: 80,
            peek: {
                before: 50,
                after: 50
            },
        }
        new Glide('.glide', config).mount()
        $(document).ready(function() {
            window.setTimeout("fadeMyDiv();", 1500); //call fade in 3 seconds
        })
        function fadeMyDiv() {
            var language = '<?php echo $_SESSION["language"]; ?>';
            if (language ==='en') {
                lang = '<?php displayText("sample-test", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'fr') {
                lang = "<?php displayText("sample-test", $_SESSION["language"], "h2-1"); ?>";
            } else if (language === 'de') {
                lang = '<?php displayText("sample-test", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'pl') {
                lang = '<?php displayText("sample-test", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'ru') {
                lang = '<?php displayText("sample-test", $_SESSION["language"], "h2-1"); ?>';
            } else if (language === 'es') {
                lang = '<?php displayText("sample-test", $_SESSION["language"], "h2-1"); ?>';
            }
            $("#parallax").fadeIn('slow');
            $("#page-title").text(lang).fadeIn();
        }

        const collection = document.querySelector(".header-body");
        const section2Flex = document.querySelector(".special-text");

        collection.style.height = "535px";
        collection.style.width = "100%";
        collection.style.backgroundImage = "url(images/ST/ST-head.webp)";
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

        // const IMG_WIDTH = window.screen.width;
        // const IMG_HEIGHT = window.screen.width * 0.55;
        // const SCALE_FACTOR = 50;
        // const app = new PIXI.Application({
        //     width: IMG_WIDTH,
        //     height: IMG_HEIGHT
        // });
        // const container = document.getElementById("parallax");
        // container.appendChild(app.view);
        // const img = new PIXI.Sprite.from("images/ST/ST-head.webp");
        // img.width = IMG_WIDTH;
        // img.height = IMG_HEIGHT;
        // app.stage.addChild(img);
        // depthMap = new PIXI.Sprite.from("images/ST/ST-depth.webp");
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
</body>
</html>