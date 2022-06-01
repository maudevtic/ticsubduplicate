<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Inspection General App</title>
    <meta charset="utf-8">
    <meta name="description" content="ORDER MANAGEMENT To provide you the easiest way to avail our service, our Online Booking System are ready for your convenience. We have our own database for factories and products to make a re-inspection or re-audit easy with just a touch of your finger tips. Online check of the inspection status and online access to your reports guarantees best service for our clients." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
        .parallax {
            background-image: url('images/backgrounds/mobile.webp');
            height: 400px;
        }
    </style>
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header_medium two parallax">
            <div class="container">
                <h3 class="bigtext"><?php displayText("inspection-general-app", $_SESSION["language"], "h3-1"); ?></h3>
                <h3 class="smalltext"><?php displayText("inspection-general-app", $_SESSION["language"], "h3-2"); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <!--end header medium-->

        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle">
                    <h3><?php displayText("inspection-general-app", $_SESSION["language"], "h3-3"); ?></h3>
                </div>
                <div class="pagenation">&nbsp;
                    <a href="index.php"><?php displayText("inspection-general-app", $_SESSION["language"], "a1"); ?></a>
                    <i>/</i>
                    <?php displayText("inspection-general-app", $_SESSION["language"], "h3-3"); ?>
                </div>
            </div>
        </div>
        <!--end pagenation-->
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText("inspection-general-app", $_SESSION["language"], "h1-1"); ?></h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext"></p>
                <div class="clearfix"></div>
                <div class="section_holder25">
                    <div class="container">
                        <div class="content_left">
                            <h1 class="uppercase margin_top4"><?php displayText("inspection-general-app", $_SESSION["language"], "h1-2"); ?></h1>
                            <p><?php displayText("inspection-general-app", $_SESSION["language"], "p1"); ?></p>
                            <br />
                            <img src="images/mobile-app.webp" alt="Mobile Application" class="vw100" />
                            <div class="margin_top2"></div>
                            <div class="punchline_text_box">
                                <div class="left">
                                    <h5><?php displayText("inspection-general-app", $_SESSION["language"], "h5-1"); ?></h5>
                                </div>
                                <div class="right">
                                    <a class="knowmore_but" href="https://tic-service.company/create-account">
                                        <?php displayText("inspection-general-app", $_SESSION["language"], "a2"); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <?php include 'includes/rightside.php'; ?>
                    </div>
                    <div class="margin_top4"></div>
                </div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
</body>
</html>