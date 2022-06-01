<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <?php include '_includes/meta.php'; ?>
    <title>TIC - About Us</title>
    <meta charset="utf-8">
    <meta name="description"
        content="The Inspection Company Ltd.
        The Inspection Company Ltd has been founded in 2007 with the aim to avoid buyers risk on purchasing goods from Asia and improve the products quality. We perform professional Quality Control as Factory Audit, Inspections Service and Sample Testing. No matter if you are SME or multination enterprise; TIC handles each case as an individual job with same priority. Based on your needs and demands, we evaluate a tailor made solutions and service plans to fulfill your standard. For each single Quality Control Service, we develop a specific work instruction, adequate to the product and to your demands" />
    
    <?php include 'MAINCSS/css.php'; ?>
    <style>
    .parallax {
        background-image: url('images/backgrounds/edit_4.webp') !important;
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
                <h3 class="bigtext"><?php displayText('about', $_SESSION["language"], 'h3-1'); ?></h3>
                <h3 class="smalltext"><?php displayText('about', $_SESSION["language"], 'h3-2'); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>

        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle"><h3><?php displayText('about', $_SESSION["language"], 'h3-3'); ?></h3></div>
                <div class="pagenation">
                    &nbsp;
                    <a href="index.php"><?php displayText('about', $_SESSION["language"], 'a1'); ?></a><i>/</i>
                    <a href="about.php"><?php displayText('about', $_SESSION["language"], 'a2'); ?></a><i>/</i>
                    <?php displayText('about', $_SESSION["language"], 'div1'); ?>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText('about', $_SESSION["language"], 'h1-1'); ?></h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext"><?php displayText('about', $_SESSION["language"], 'p1'); ?></p>
                <div class="clearfix"></div>
                <div class="one_half">
                    <br/>
                    <br/>
                    <img src="images/site-img35.webp" alt="About Us" class="vw100" />
                </div>
                <div class="one_half last">
                    <h6><?php displayText('about', $_SESSION["language"], 'h6-1'); ?></h6>
                    <p><?php displayText('about', $_SESSION["language"], 'p2'); ?></p>
                    <br/>
                    <p><?php displayText('about', $_SESSION["language"], 'p3'); ?></p>
                    <br/>
                    <p><?php displayText('about', $_SESSION["language"], 'p4'); ?></p>
                </div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
</body>
</html>
