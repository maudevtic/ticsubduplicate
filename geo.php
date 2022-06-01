<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Geo Tracking App</title>
    <meta charset="utf-8">
    <meta name="description" content="TIC GEO TRACKING APP Our geo tracking app will provide you real time information of your inspection and use your time more efficiently to track/monitor inspection." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
        .parallax {
            background-image: url('images/backgrounds/shipment.webp');
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
                <h3 class="bigtext"><?php displayText("geo-tracking-app", $_SESSION["language"], "h3-1"); ?></h3>
                <h3 class="smalltext"><?php displayText("geo-tracking-app", $_SESSION["language"], "h3-2"); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle">
                    <h3><?php displayText("geo-tracking-app", $_SESSION["language"], "h3-3"); ?></h3>
                </div>
                <div class="pagenation">&nbsp;
                    <a href="index.php"><?php displayText("geo-tracking-app", $_SESSION["language"], "a1"); ?></a>
                    <i>/</i>
                    <?php displayText("geo-tracking-app", $_SESSION["language"], "h3-3"); ?>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText("geo-tracking-app", $_SESSION["language"], "h1-1"); ?></h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext"></p>
                <div class="clearfix"></div>
                <div class="section_holder25">
                    <div class="container">
                        <div class="content_left">
                            <h1 class="uppercase margin_top4"><?php displayText("geo-tracking-app", $_SESSION["language"], "h1-2"); ?></h1>
                            <p><?php displayText("geo-tracking-app", $_SESSION["language"], "p1"); ?></p>
                            <br />
                            <img src="images/inspection-tracking.webp" alt="Geo inspection Tracking" class="vw100" />
                            <div class="margin_top2"></div>
                            <div class="punchline_text_box">
                                <div class="left">
                                    <h5><?php displayText("geo-tracking-app", $_SESSION["language"], "h5-1"); ?></h5>
                                </div>
                                <div class="right">
                                    <a class="knowmore_but" href="https://tic-service.company/create-account">
                                        <?php displayText("geo-tracking-app", $_SESSION["language"], "a2"); ?>
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