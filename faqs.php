<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>The Inspection Company - FAQs</title>
    <meta charset="utf-8">
    <meta name="description"
        content="1. How can I figure out the right sample size and acceptance number?2. What are usually the major defects found during the TIC-Inspections?3. What happens if the vendor does not provide the specified quantity of finished products to complete the inspection you have ordered?4. How can TIC ensure anti-bribery? . Can I also book one service containing more than one type of product?" />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
    .parallax {
            background-image: url('images/backgrounds/faqs.webp') !important;
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
                <h3 class="bigtext"><?php displayText('faqs', $_SESSION["language"], 'h3-1'); ?></h3>
                <h3 class="smalltext"><?php displayText('faqs', $_SESSION["language"], 'h3-2'); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle">
                    <h3><?php displayText('faqs', $_SESSION["language"], 'h3-3'); ?></h3>
                </div>
                <div class="pagenation">&nbsp;
                    <a href="index.php"><?php displayText('faqs', $_SESSION["language"], 'a1'); ?></a><i>/</i>
                    <a href="about.php"><?php displayText('faqs', $_SESSION["language"], 'a2'); ?></a><i>/</i>
                    <?php displayText('faqs', $_SESSION["language"], 'div1'); ?>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big"><?php displayText('faqs', $_SESSION["language"], 'h1'); ?></h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext">
                    <?php displayText('faqs', $_SESSION["language"], 'p1'); ?>
                </p>
                <div class="clearfix"></div>
                <div class="section_holder19">
                    <div class="container">
                        <div class="one_half">
                            <div class="accrodation">
                                <span class="acc-trigger active">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a3'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content1'); ?>
                                    </div>
                                </div>
                                <span class="acc-trigger">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a4'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content2'); ?>
                                    </div>
                                </div>
                                <span class="acc-trigger">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a5'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content3'); ?>
                                    </div>
                                </div>
                                <span class="acc-trigger">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a6'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content4'); ?>
                                    </div>
                                    <a class="but_st1 small orange " href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a7'); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="one_half last">
                            <div class="accrodation">
                                <span class="acc-trigger">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a8'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content5'); ?>
                                    </div>
                                </div>
                                <span class="acc-trigger">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a9'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content6'); ?>
                                    </div>
                                </div>
                                <span class="acc-trigger">
                                    <a href="#">
                                        <?php displayText('faqs', $_SESSION["language"], 'a10'); ?>
                                    </a>
                                </span>
                                <div class="acc-container">
                                    <div class="content">
                                        <?php displayText('faqs', $_SESSION["language"], 'content7'); ?>
                                    </div>
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