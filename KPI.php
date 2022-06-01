<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Key Perfomance Indicator (KPI)</title>
    <meta charset="utf-8">
    <meta name="description" content="Key Perfomance Indicator(KPI) The developed Online Booking System provides the utmost convenience to clients when it comes to manage your products inspection. Save your products and factories on your personal online database for easy re-inspection and new projects on same factory and products. The Inspection Company Ltd. handles each quality control services as an individual job with same priority and we evaluate a tailor made solution and service plan to fulfil your standard with developed work instructions adequate to your requirements for a specific product." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
        .parallax {
            background-image: url('images/kpi-bg.webp');
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
                <h3 class="bigtext"><?php displayText("key-perfomance-indicator", $_SESSION["language"], "h3-1"); ?></h3>
                <h3 class="smalltext"><?php displayText("key-perfomance-indicator", $_SESSION["language"], "h3-2"); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle"><h3><?php displayText("key-perfomance-indicator", $_SESSION["language"], "h3-3"); ?></h3></div>
                <div class="pagenation">&nbsp;
                    <a href="index.php"><?php displayText("key-perfomance-indicator", $_SESSION["language"], "a1"); ?></a>
                    <i>/</i>
                    <?php displayText("key-perfomance-indicator", $_SESSION["language"], "h3-3"); ?>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText("key-perfomance-indicator", $_SESSION["language"], "h1-1"); ?></h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext"></p>
                <div class="clearfix"></div>                
                <div class="section_holder25">
                    <div class="container">
                        <div class="content_left">
                            <h1 class="uppercase margin_top4"><?php displayText("key-perfomance-indicator", $_SESSION["language"], "h3-3"); ?></h1>
                            <p><?php displayText("key-perfomance-indicator", $_SESSION["language"], "p1"); ?></p>
                            <br/>
                            <img src="images/KPI.webp" alt="Approve/Reject Shipment" class="vw100" />
                            <div class="margin_top2"></div>
                            <div class="punchline_text_box">
                                <div class="left">
                                    <h5><?php displayText("key-perfomance-indicator", $_SESSION["language"], "h5-1"); ?></h5>
                                </div>
                                <div class="right">
                                    <a class="knowmore_but" href="https://tic-service.company/create-account">
                                        <?php displayText("key-perfomance-indicator", $_SESSION["language"], "a2"); ?>
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