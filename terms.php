<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Terms &amp; Conditions</title>
    <meta charset="utf-8">
    <meta name="description"
        content="OUR TERMS AND CONDITIONS All services provided by The Inspection Company Limited are governed by the following general conditions of service.
        1. General
        1.1 Unless otherwise specifically and expressly agreed in writing by The Inspection Company Limited (hereinafter called 'TIC'), all services provided by The Inspection Company Limited are governed by the following general conditions of service, which prevail any purchase terms and conditions." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
        .parallax {
            background-image: url('images/backgrounds/report.webp') !important;
            height: 400px !important;
        }
    </style>
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header_medium two parallax">
            <div class="container">
                <h3 class="bigtext"><?php displayText('terms', $_SESSION["language"], 'h3-1'); ?></h3>
                <h3 class="smalltext"><?php displayText('terms', $_SESSION["language"], 'h3-2'); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle">
                    <h3><?php displayText('terms', $_SESSION["language"], 'h3-3'); ?></h3>
                </div>
                <div class="pagenation">&nbsp;
                    <a href="index.php"><?php displayText('terms', $_SESSION["language"], 'a1-1'); ?></a><i>/</i>
                    <a href="about.php"><?php displayText('terms', $_SESSION["language"], 'a1-2'); ?></a><i>/</i>
                    <?php displayText('terms', $_SESSION["language"], 'div1'); ?>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="section_holder7 two">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText('terms', $_SESSION["language"], 'h1'); ?></h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext"><?php displayText('terms', $_SESSION["language"], 'p1'); ?></p>
                <div class="clearfix"></div>
                <div class="section_holder19">
                    <div class="container">
                        <div class="one_full">
                            <ul class="tabs">
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a1'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a2'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a3'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a4'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a5'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a6'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a7'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a8'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a9'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a10'); ?>
                                </li>
                                <li>
                                    <?php displayText('terms', $_SESSION["language"], 'a11'); ?>
                                </li>
                            </ul>
                            <div class="tabs-content">
                                <div id="demo-tab-1" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-1'); ?>
                                </div>
                                <div id="demo-tab-2" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-2'); ?>
                                </div>
                                <div id="demo-tab-3" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-3'); ?>
                                </div>
                                <div id="demo-tab-4" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-4'); ?>
                                </div>
                                <div id="demo-tab-5" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-5'); ?>
                                </div>
                                <div id="demo-tab-6" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-6'); ?>
                                </div>
                                <div id="demo-tab-7" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-7'); ?>
                                </div>
                                <div id="demo-tab-8" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-8'); ?>
                                </div>
                                <div id="demo-tab-9" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-9'); ?>
                                </div>
                                <div id="demo-tab-10" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-10'); ?>
                                </div>
                                <div id="demo-tab-11" class="tabs-panel">
                                    <?php displayText('terms', $_SESSION["language"], 'demo-tab-11'); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
</body>
</html>