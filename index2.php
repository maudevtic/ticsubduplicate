<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <meta name="description" content="The Inspection Company performs 3rd party quality control as factory audit, inspections service and sample testing in China, India, Malaysia, Cambodia, Indonesia, Thailand, Sri Lanka, Philippines, Taiwan, Hong Kong, Bangladesh, Vietnam, Myanmar, Laos and all over Asia." />
    <meta name="author" content="The Inspection Company">
    <title>TIC - The Inspection Company</title>
    <meta charset="utf-8">
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="canonical" href="https://the-inspection-company.com/" hreflang="en-gb">
    <!-- <style>
        body {
			background:url(images/sliders/report-inspection-results.webp);
	        margin: 0;
	        padding: 0;
	        background-size: cover;
	        background-position: center;
	        font-family: sans-serif;
        }
    </style> -->
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="tp-banner-container">
            <?php
                if ($_SESSION["language"] === '' || $_SESSION["language"] === 'en' || $_SESSION["language"] === null) {//English
                    include 'includes/slider-en.php';
                } else if ($_SESSION["language"] === "cz") {//Czech
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "da") {//Danish
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "fr") {//French
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "de") {//German
                    include 'includes/slider-de.php';
                } else if ($_SESSION["language"] === "it") {//Italian
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "pl") {//Polish
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "pt") {//Portuguese
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "ru") {//Russian
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "sk") {//Slovak
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "es") {//Spanish
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "sv") {//Swedish
                    include 'includes/slider.php';
                } else if ($_SESSION["language"] === "tk") {//Turkish
                    include 'includes/slider.php';
                }
            ?>
        </div>
        <div class="clearfix"></div>
        <div class="section_holder40" width="1903" height="610">
            <div class="container">
                <div style="margin-bottom:70px;">
                    <h1 class="lt_title_big"><?php displayText('index', $_SESSION["language"], 'title1'); ?></h1>
                    <div class="cl_title_line" width="7612" height="3"></div>
                    <p><?php displayText('index', $_SESSION["language"], 'p1'); ?></p>
                    <a class="btn btn-warning pull-right" href="about.php"><?php displayText('index', $_SESSION["language"], 'a1'); ?></a>
                </div>
                <div class="one_half">
                    <h1 class="lt_title_big_left black"><?php displayText('index', $_SESSION["language"], 'title2'); ?></h1>
                    <div class="clearfix"></div>
                    <div class="cl_title_line_left"></div>
                    <div class="clearfix"></div>

                    <a href="pre-production-inspection.php">
                        <div class="services_box">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe037;"></span></div>
                            <div class="text">
                                <h6><?php displayText('index', $_SESSION["language"], 'subtitle2'); ?></h6>
                                <p><?php displayText('index', $_SESSION["language"], 'p2'); ?></p>
                            </div>
                        </div>
                    </a>
                    <a href="order.php">
                        <div class="services_box last">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe034;"></span></div>
                            <div class="text">
                                <h6><?php displayText('index', $_SESSION["language"], 'subtitle3'); ?></h6>
                                <p><?php displayText('index', $_SESSION["language"], 'p3'); ?></p>
                            </div>
                        </div>
                    </a>

                    <a href="PA.php">
                        <div class="services_box">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe028;"></span></div>
                            <div class="text">
                                <h6><?php displayText('index', $_SESSION["language"], 'subtitle4'); ?></h6>
                                <p><?php displayText('index', $_SESSION["language"], 'p4'); ?></p>
                            </div>
                        </div>
                    </a>
                    <a href="mobile.php">
                        <div class="services_box last">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe090;"></span></div>
                            <div class="text">
                                <h6><?php displayText('index', $_SESSION["language"], 'subtitle5'); ?></h6>
                                <p><?php displayText('index', $_SESSION["language"], 'p5'); ?></p>
                            </div>
                        </div>
                    </a>

                    <a href="PA.php">
                        <div class="services_box nomargin">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe085;"></span></div>
                            <div class="text">
                                <h6><?php displayText('index', $_SESSION["language"], 'subtitle16'); ?></h6>
                                <p><?php displayText('index', $_SESSION["language"], 'p21'); ?></p>
                            </div>
                        </div>
                    </a>
                    <a href="mobile.php">
                        <div class="services_box last nomargin">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe035;"></span></div>
                            <div class="text">
                                <h6><?php displayText('index', $_SESSION["language"], 'subtitle17'); ?></h6>
                                <p><?php displayText('index', $_SESSION["language"], 'p22'); ?></p>
                            </div>
                        </div>
                    </a>

                </div>
                <div class="one_half last">
                    <h1 class="lt_title_big_left black"><?php displayText('index', $_SESSION["language"], 'title3'); ?></h1>
                    <div class="clearfix"></div>
                    <div class="cl_title_line_left"></div>
                    <div class="clearfix"></div>
                    <div class="list_holder">
                        <div class="icon_holder"><div class="img"></div></div>
                        <div class="text">
                            <h5 class="uppercase lessmar black"><?php displayText('index', $_SESSION["language"], 'subtitle6'); ?></h5>
                            <p class="black"><?php displayText('index', $_SESSION["language"], 'p6'); ?></p>
                        </div>
                    </div>
                    <div class="list_holder">
                        <div class="icon_holder"><div class="img two"></div></div>
                        <div class="text">
                            <h5 class="uppercase lessma black"><?php displayText('index', $_SESSION["language"], 'subtitle7'); ?></h5>
                            <p class="black"><?php displayText('index', $_SESSION["language"], 'p7'); ?></p>
                        </div>
                    </div>
                    <div class="list_holder">
                        <div class="icon_holder"><div class="img three"></div></div>
                        <div class="text">
                            <h5 class="uppercase lessma black"><?php displayText('index', $_SESSION["language"], 'subtitle15'); ?></h5>
                            <p class="black"><?php displayText('index', $_SESSION["language"], 'p20'); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="section_holder40" width="1903" height="610">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText('index', $_SESSION["language"], 'title4'); ?></h1>
                <div class="cl_title_line" width="7612" height="3"></div>
                <p class="lt_title_bottomtext"><?php displayText('index', $_SESSION["language"], 'p8'); ?></p>
                <div class="clearfix"></div>
                <a href="pre-production-inspection.php">
                    <div class="one_third">
                        <div class="text_holder">
                            <div class="icon">
                                <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe03f;"></span>
                                <div class="arrow"></div>
                            </div>
                            <div class="text">
                                <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'subtitle8'); ?></h4>
                                <p><?php displayText('index', $_SESSION["language"], 'p9'); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="DUPRO.php">
                    <div class="one_third">
                        <div class="text_holder">
                            <div class="icon">
                                <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe09b;"></span>
                                <div class="arrow"></div>
                            </div>
                            <div class="text">
                                <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'subtitle9'); ?></h4>
                                <p><?php displayText('index', $_SESSION["language"], 'p10'); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="PSI.php">
                    <div class="one_third last">
                        <div class="text_holder">
                            <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe001;"></span>
                                <div class="arrow"></div>
                            </div>
                            <div class="text">
                                <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'subtitle10'); ?></h4>
                                <p><?php displayText('index', $_SESSION["language"], 'p11'); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="margin_top1"></div>
                <a href="CLI.php">
                    <div class="one_third">
                        <div class="text_holder">
                            <div class="icon">
                                <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe03f;"></span>
                                <div class="arrow"></div>
                            </div>
                            <div class="text">
                                <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'subtitle11'); ?></h4>
                                <p><?php displayText('index', $_SESSION["language"], 'p12'); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="ST.php">
                    <div class="one_third">
                        <div class="text_holder">
                            <div class="icon">
                                <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe09b;"></span>
                                <div class="arrow"></div>
                            </div>
                            <div class="text">
                                <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'subtitle12'); ?></h4>
                                <p><?php displayText('index', $_SESSION["language"], 'p13'); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="PA.php">
                    <div class="one_third last">
                        <div class="text_holder">
                            <div class="icon">
                                <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe001;"></span>
                                <div class="arrow"></div>
                            </div>
                            <div class="text">
                                <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'subtitle13'); ?></h4>
                                <p><?php displayText('index', $_SESSION["language"], 'p14'); ?></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="container" id="industry_support">
            <h1 class="lt_title_big"><?php displayText('index', $_SESSION["language"], 'title5'); ?></h1>
            <div class="cl_title_line" width="7612" height="3"></div>
            <p class="lt_title_bottomtext aligncenter"><?php displayText('index', $_SESSION["language"], 'p15'); ?></p>
            <div class="cl_title_line" width="7612" height="3"></div>
            <div class="clearfix"></div>
            <!-- <div style="text-align:center !important;">
                <h2 style="color: #fe7e20 !important;"><?php displayText('index', $_SESSION["language"], 'subtitle14'); ?></h2> 
            </div> -->
            <div class="clearfix"></div>
            <div class="container-fluid center aligncenter">
                <label class="labelProduct fontEm15"><?php displayText('index', $_SESSION["language"], 'label1'); ?></label>
                <div class="container center">
                    <div class="row center flex-container">
                        <div class="col-lg-4 flex-item">
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/polishing-cloth.png" width="30px" height="30px" alt="Fabric" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-1'); ?></h6>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/sneakers--v5.png" width="30px" height="30px" alt="Footwear" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-2'); ?></h6>
                        </div>
                        <div class="col-lg-4 flex-item" id="textile">
                            <img id="productIcon" src="https://img.icons8.com/ios/50/000000/cloth.png" width="30px" height="30px" alt="Textile" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-3'); ?></h6>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/panties--v1.png" width="30px" height="30px" alt="Lingerie" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-4'); ?></h6>
                        </div>
                        <div class="col-lg-4 flex-item" id="garments">
                            <img id="productIcon" src="https://img.icons8.com/pastel-glyph/64/000000/tailoring-for-women.png" width="30px" height="30px" alt="Garments" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-5'); ?></h6>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/trilby.png" width="30px" height="30px" alt="Apparel" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-6'); ?></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="container-fluid center" style="text-align:center !important;">
                <label class="labelProduct fontEm15"><?php displayText('index', $_SESSION["language"], 'label2'); ?></label>
                <div class="container center">
                    <div class="row center flex-container">
                        <div class="col-lg-4 flex-item">
                            <img src="https://img.icons8.com/small/64/000000/sport-helmet.png" width="30px" height="30px" alt="Sports Equipment " />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-7'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/windows/24/000000/electronics.png" width="30px" height="30px" alt="Consumer Electronics" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-8'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/vacuum-cleaner--v2.png" width="30px" height="30px" alt="Household Goods" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-9'); ?></h6>
                        </div>
                        <div class="col-lg-4 flex-item" id="textile">
                            <img src="https://img.icons8.com/ios/50/000000/microwave.png" width="30px" height="30px" alt="Appliances" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-10'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/jewelry--v2.png" width="30px" height="30px" alt="Jewelry" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-12'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/ios/80/000000/mascara.png" width="30px" height="30px" alt="Cosmetics" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-11'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/ios/50/000000/crane.png" width="30px" height="30px" alt="Industrial Machinery" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-19'); ?></h6>
                        </div>
                        <div class="col-lg-4 flex-item" id="garments">
                            <img src="https://img.icons8.com/ios/50/000000/robot-2.png" width="30px" height="30px" alt="Toys" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-14'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/windows/100/000000/gifts.png" width="30px" height="30px" alt="Gifts" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-13'); ?></h6>
                            <br>
                            <img src="https://img.icons8.com/ios/50/000000/constructing.png" width="30px" height="30px" alt="Construction Machinery" />
                            <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-18'); ?></h6>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="container-fluid center aligncenter">
                    <label class="labelProduct fontEm15"><?php displayText('index', $_SESSION["language"], 'label3'); ?></label>
                    <div class="container_full center">
                        <div class="row center flex-container">
                            <div class="col-lg-4 flex-item">
                                <img id="productIcon" src="https://img.icons8.com/ios/50/000000/healthy-eating.png" width="30px" height="30px" alt="Fruits" />
                                <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-15'); ?></h6>
                            </div>
                            <div class="col-lg-4 flex-item">
                                <img id="productIcon" src="https://img.icons8.com/ios/50/000000/shrimp-and-lobster.png" width="30px" height="30px" alt="Sea Foods" />
                                <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-16'); ?></h6>
                            </div>
                            <div class="col-lg-4 flex-item">
                                <img id="productIcon" src="https://img.icons8.com/ios/50/000000/tin-can.png" width="30px" height="30px" alt="Can Goods" />
                                <h6 id="iconLabel"><?php displayText('index', $_SESSION["language"], 'h6-17'); ?></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--class="container-fluid center"-->
        </div><!--class="container" id="industry_support"-->
    </div><!--class="site_wrapper"-->

    <div class="clearfix"></div>
    <div class="section_holder38" id="facts">
        <div class="container">
            <h1 class="lt_title_big"><?php displayText('index', $_SESSION["language"], 'title6'); ?></h1>
            <div class="cl_title_line" width="7612" height="3"></div>
            <div class="clearfix"></div>
            <div class="one_fourth aligncenter">
                <i data-feather="globe"></i>
                <div class="text">
                    <h2 class="lessmar orange"><span id="countries">0</span>+</h2>
                    <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'h4-1'); ?></h4>
                    <p><?php displayText('index', $_SESSION["language"], 'p16'); ?></p>
                </div>
            </div>
            <div class="one_fourth last aligncenter">
                <i data-feather="users"></i>
                <div class="text">
                    <h2 class="lessmar orange"><span class="counter" data-target="1000">0</span>+</h2>
                    <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'h4-2'); ?></h4>
                    <p><?php displayText('index', $_SESSION["language"], 'p17'); ?></p>
                </div>
            </div>
            <div class="one_fourth last aligncenter">
                <i data-feather="home"></i>
                <div class="text">
                    <h2 class="lessmar orange"><span class="counter" data-target="12000">0</span>+</h2>
                    <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'h4-3'); ?></h4>
                    <p><?php displayText('index', $_SESSION["language"], 'p18'); ?></p>
                </div>
            </div>
            <div class="one_fourth aligncenter">
                <i data-feather="package"></i>
                <div class="text">
                    <h2 class="lessmar orange"><span class="counter" data-target="100000">0</span>+</h2>
                    <h4 class="lessmar"><?php displayText('index', $_SESSION["language"], 'h4-4'); ?></h4>
                    <p><?php displayText('index', $_SESSION["language"], 'p19'); ?></p>
                </div>
            </div>
        </div>
    </div>

    <div class="clearfix"></div>
    <h1 class="lt_title_big"><?php displayText('index', $_SESSION["language"], 'title7'); ?></h1>
    <div class="cl_title_line" width="7612" height="3"></div>
    <div class="section_holder30">
        <div class="container aligncenter">
            <div class="one_third">
                <div class="topic_holder boxShadow" width="330.937" height="100">
                    <img src="images/members/asq.webp" width="305.937" height="100" class="maxWidth100" alt="Certified Quality Improvement Associate">
                </div>
            </div>
            <div class="one_third">
                <div class="topic_holder boxShadow" width="330.937" height="100">
                    <img src="images/members/german-chamber.webp" width="305.937" height="100" class="maxWidth100" alt="German Chamber of Commerce in China">
                </div>
            </div>
            <div class="one_third last">
                <div class="topic_holder boxShadow" width="330.937" height="100">
                    <img src="images/members/iso.webp" width="305.937" height="100" class="maxWidth100" alt="International Standard Association">
                </div>
            </div>
            <div class="one_third">
                <div class="topic_holder boxShadow" width="330.937" height="100">
                    <img src="images/members/sira.webp" width="305.937" height="100" class="maxWidth100" alt="United Kingdom Accreditation Service">
                </div>
            </div>
            <div class="one_third">
                <div class="topic_holder boxShadow" width="330.937" height="100">
                    <img src="images/members/afoa.webp" width="305.937" height="100" class="maxWidth100" alt="American Fats and Oils Association">
                </div>
            </div>
            <div class="one_third last">
                <div class="topic_holder boxShadow" width="330.937" height="100">
                    <img src="images/members/sedex.webp" width="305.937" height="100" class="maxWidth100" alt="SEDEX">
                </div>
            </div>
        </div>
    </div>
    <?php include 'includes/footer.php'; ?>
    <?php include 'MAINCSS/js.php'; ?>
    <script>
        feather.replace()
    </script>
    <script>
        var cc = 0;
        $(document).on('scroll', function() {
            if ($(this).scrollTop() >= $('#industry_support').position().top) {
                // Enter num from and to
                if (cc == 0) {
                    $({
                        countNum: 0
                    }).animate({
                        countNum: 26
                    }, {
                        duration: 1500,
                        easing: 'linear',
                        step: function() {
                            // What todo on every count
                            //console.log(Math.floor(this.countNum));
                            $('#countries').text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            cc = 1;
                            //console.log('finished');
                        }
                    });
                }

                const counters = document.querySelectorAll('.counter');
                const speed = 1000; // The lower the slower
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        // Lower inc to slow and higher to slow
                        const inc = target / speed;
                        //console.log(inc);
                        //console.log(count);
                        //Check if target is reached
                        if (count < target) {
                            // Add inc to count and output in counter
                            counter.innerText = count + inc;
                            // Call function every ms
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
            }
        });
    </script>
    <script src="js/jquery-slider.js"></script>
</body>
</html>
<script>
    function myfunction() {
        var id = (new Date()).getTime();
        var myWindow = window.open(window.location.href + '?printerFriendly=true', id,
        "toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800,height=600,left = 240,top = 212");
        $.post("/ajax/friendlyPrintPage", postData).done(function(htmlContent) {
            myWindow.document.write(htmlContent);
            myWindow.focus();
        });
    }
</script>