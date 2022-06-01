<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Our Locations</title>
    <meta charset="utf-8">
    <meta name="description" content="The TIC team is available in following countries:
Bangladesh, Cambodia, China, Egypt, Hong Kong, India, Indonesia, Japan, Laos, Malaysia, Myanmar, Pakistan, Philippines, Singapore, South Korea, Sri Lanka, Taiwan, Thailand, Turkey, and Vietnam." />
    <!-- Meta -->
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
        .parallax {
            background-image: url('images/backgrounds/edit_6.webp') !important;
            height: 400px;
        }
    </style>
    <style>
        table {
            margin-left: auto;
            margin-right: auto;
            /* font-size: 10px; */
            width: 100%;
            table-layout:fixed;
        }
  
        .hk {
            padding: -0 0 30px 0; /* top right bottom left */
        }

        .ph {
            padding: -0 0 30px 0; 
        }

        .cz1 {
            padding: -0 0 0 0; 
        }

        .my {
            padding: 0 0 10px 0; 
        }

        .cz2 {
            padding: 0 0 10px 0; 
        }

        .gr {
            padding: 0 0 10px 0; 
        }

        .cb {
            padding: 0 0 10px 0; 
        }

        .in {
            padding: 0 0 10px 0; 
        }

        .is {
            padding: 0 0 10px 0; 
        }
  
        /* tr:nth-child(even) {
            background-color: green;
        } */
    </style>
</head>
<body>
    <div class="site_wrapper">
        <?php include 'includes/nav.php'; ?>
        <div class="clearfix"></div>
        <div class="header_medium two parallax">
            <div class="container">
                <h3 class="bigtext"><?php displayText('our-locations', $_SESSION["language"], 'h3-1'); ?></h3>
                <h3 class="smalltext"><?php displayText('our-locations', $_SESSION["language"], 'h3-2'); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <!--end header medium-->
        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle">
                    <h3>
                        <!-- <?php displayText('our-locations', $_SESSION["language"], 'h3-3'); ?> -->
                    </h3>
                </div>
                <div class="pagenation">
                    &nbsp;<a href="index.php">
                        <?php displayText('our-locations', $_SESSION["language"], 'a1'); ?>
                    </a><i>/</i>
                    <a href="#">
                        <?php displayText('our-locations', $_SESSION["language"], 'a2'); ?>
                    </a> <i>/</i>
                    <?php displayText('our-locations', $_SESSION["language"], 'div1'); ?>
                </div>
            </div>
        </div>
        <!--end pagenation-->
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big">
                    <?php displayText('our-locations', $_SESSION["language"], 'h1-1'); ?>
                </h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext">
                    <?php displayText('our-locations', $_SESSION["language"], 'p1'); ?>
                </p>
                <p class="lt_title_bottomtext" style="text-align:left !important;">
                <strong>
                    <?php displayText('our-locations', $_SESSION["language"], 'strong1'); ?>:
                </strong>
                <br>
                    <?php displayText('our-locations', $_SESSION["language"], 'p2'); ?>
                </p>
                <p class="lt_title_bottomtext" style="margin: 0 auto 30px">
                    <strong>
                        <?php displayText('our-locations', $_SESSION["language"], 'strong2'); ?>
                    </strong>
                    <br>
                    <a href="https://api.whatsapp.com/send?phone=905537990676" target="_blank" width="50px" height="50px" style="vertical-align: middle;background:url('images/wa.svg');">
                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                        <a href=" https://api.whatsapp.com/send?phone=905537990676" target="_blank" class="wa" style="text-decoration: none;">
                            &nbsp;: +90-5537-990-676
                        </a>
                    </a>
                </p>
                <p class="lt_title_bottomtext">
                    <strong>
                        <?php displayText('our-locations', $_SESSION["language"], 'strong3'); ?>
                    </strong>
                    <br>
                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank" width="50px" height="50px" style="vertical-align: middle;background:url('images/wa.svg');">
                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                        <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                            &nbsp;: +86-1392-2862-121
                        </a>
                    </a>
                </p>
                <div class="clearfix"></div>
                <div class="section_holder30">
                    <div class="container">
                        <h3 class="uppercase">
                            <?php displayText('our-locations', $_SESSION["language"], 'h3-4'); ?>
                        </h3>
                        <br />
                        <iframe height="600" width="1165" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/my-maps/1371bc31-f847-4260-bc3c-5dae6c1fde96?center=27.355287326837786,65.55444976242522&zoom=1&maptype=sat"></iframe>

                        <div class="clearfix"></div>

                        <table>
                            <!-- row without fixed height-->
                            <tr height="250px">
                                <td class="hk">
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-1'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Level 12, Infinitus Plaza, 199 Des Voeux Road Central, Sheung Wan, Hong Kong</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone"> : +852-3796-3305
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/fax.webp" alt="Fax" title="Fax"> : +852-3796-3000
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank" width="50px" height="50px" style="vertical-align: middle;background:url('images/wa.svg');">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td class="ph">
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-2'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Lot 1, Block 13, Cecilia Village 1, Brgy. M.S Garcia, Cabanatuan City, Nueva Ecija, Philippines</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +63-44-8038499
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td class="cz1">
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-3'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Room # A509, Internet Innovation and Creation Service Zone, #G Bldg., Lian He industrial Village, Gongyuan Nan Road, She kou, Nanshan District, Shenzhen, China</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +86-755-8278-2520
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/fax.webp" alt="Fax" title="Fax">
                                                        : +86-755-8278-2521
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <!-- row without fixed height-->
                            <tr height="175px">
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-4'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">No.17, Jalan 3/72 Bandar Sunway, 46150 Petaling Jaya, Selangor</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +603-5623-1762
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-5'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">B1701, Liyuanshangdu Building, No.39, Lane.158, Huancheng West RD, Ningbo 315010 P.R.C.</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +86-574-87585098
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-6'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Oelstorfer Landstr. 19 21376 Salzhausen, Germany</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +49-4172-9886130
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <!-- row without fixed height-->
                            <tr height="175px">
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;">
                                            </span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-7'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">18th Floor, Canadia Tower,#315 Monivong Blvd., Corner Ang Doung Street.12202, Phnom Penh, Cambodia</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +855-(0)-23-96-23-56
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-8'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">F-109 First Floor Sector 8 Noida U.P 201301 New Delhi, India
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +91-688-8876
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-13'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Tevfikbey Mah. 2. Güven Sokç No: 1-3 Küçük Çekmece Istanbul</a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <!-- row without fixed height-->
                            <tr height="175px">
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon"><span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span></div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-10'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">DBS Bank Tower 28/F, Ciputra World One Jl. Prof. Dr. Satrio Kav. 3 - 5, Jakarta 12940</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +62-212-9888-385
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-11'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Regus UTC Building, Level - 19,8, Pantha Path, Kawran Bazar, Dhaka - 1215, Bangladesh
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +880-961-1886-7645
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="topic_holder">
                                        <div class="icon">
                                            <span class="glyph-item mega" aria-hidden="true" data-icon="&#xe033;"></span>
                                        </div>
                                        <div class="text">
                                            <h4 class="lessmar">
                                                <?php displayText('our-locations', $_SESSION["language"], 'h4-12'); ?>
                                            </h4>
                                            <ul class="list">
                                                <li>
                                                    <a href="#">Enterprise Building, 3rd Floor, 1 Km Thokar Niaz Baig, Multan Road, Lahore.</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="images/telephone_icon.webp" alt="Telephone" title="Telephone">
                                                        : +92-423-230-3822
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://api.whatsapp.com/send?phone=8613922862121" target="_blank">
                                                        <img src="images/whatsapp_icon.webp" alt="Whatsapp" title="Whatsapp">
                                                        <a href=" https://api.whatsapp.com/send?phone=8613922862121" target="_blank" class="wa" style="text-decoration: none;">
                                                            &nbsp;: +86-1392-2862-121
                                                        </a>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
    <?php include 'MAINCSS/js.php'; ?>
</body>
</html>