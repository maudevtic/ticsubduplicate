<script type='text/javascript'>
    var script = document.createElement('script');
    var prefix = document.location.protocol;
    script.async = true;
    script.type = 'text/javascript';
    var target = prefix + '//scripts.clixtell.com/track.js';
    script.src = target;
    var elem = document.head;
    elem.appendChild(script);
</script>
<?php
$url = $_SERVER['REQUEST_URI'];
$pieces = explode("/", $url);
$site = $pieces[1];

if ($_SESSION["language"] === '' || $_SESSION["language"] === 'en' || $_SESSION["language"] === null) {//English
    $_SESSION["language"] = 'en';
} else if ($_SESSION["language"] === "cz") {//Czech
    $_SESSION["language"] = 'cz';
} else if ($_SESSION["language"] === "da") {//Danish
    $_SESSION["language"] = 'da';
} else if ($_SESSION["language"] === "fr") {//French
    $_SESSION["language"] = 'fr';
} else if ($_SESSION["language"] === "de") {//German
    $_SESSION["language"] = 'de';
} else if ($_SESSION["language"] === "it") {//Italian
    $_SESSION["language"] = 'it';
} else if ($_SESSION["language"] === "pl") {//Polish
    $_SESSION["language"] = 'pl';
} else if ($_SESSION["language"] === "pt") {//Portuguese
    $_SESSION["language"] = 'pt';
} else if ($_SESSION["language"] === "ru") {//Russian
    $_SESSION["language"] = 'ru';
} else if ($_SESSION["language"] === "sk") {//Slovak
    $_SESSION["language"] = 'sk';
} else if ($_SESSION["language"] === "es") {//Spanish
    $_SESSION["language"] = 'es';
} else if ($_SESSION["language"] === "sv") {//Swedish
    $_SESSION["language"] = 'sv';
} else if ($_SESSION["language"] === "tk") {//Turkish
    $_SESSION["language"] = 'tk';
}

function displayTextWithYear() {
    $year = date('Y');
    if ($_SESSION["language"] === '' || $_SESSION["language"] === 'en' || $_SESSION["language"] === null) {
        echo "Copyright © 2012 - ".$year." TIC | All rights reserved.";
    } else if ($_SESSION["language"] === "cz") {//Czech
        echo "Copyright © 2012 - ".$year." TIC | Všechna práva vyhrazena";
    } else if ($_SESSION["language"] === "da") {//Danish
        echo "Copyright © 2012 - ".$year." TIC | Alle rettigheder forbeholdes";
    } else if ($_SESSION["language"] === "fr") {//French
        echo "Copyright © 2012 - ".$year." TIC | Tous droits réservés.";
    } else if ($_SESSION["language"] === "de") {//German
        echo "Copyright © 2012 - ".$year." TIC | Alle Rechte vorbehalten.";
    } else if ($_SESSION["language"] === "it") {//Italian
        echo "Copyright © 2012 - ".$year." TIC | Tutti i diritti riservati";
    } else if ($_SESSION["language"] === "pl") {//Polish
        echo "Prawa Autorskie © 2012 - ".$year." TIC | Wszelkie prawa zastrzeżone.";
    } else if ($_SESSION["language"] === "pt") {//Portuguese
        echo "Copyright © 2012 - ".$year." TIC | Todos os direitos reservados";
    } else if ($_SESSION["language"] === "ru") {//Russian
        echo "Авторское право © 2012 - ".$year." TIC | Все права защищены.";
    } else if ($_SESSION["language"] === "sk") {//Slovak
        echo "Copyright © 2012 - ".$year." TIC | Všetky práva vyhradené";
    } else if ($_SESSION["language"] === "es") {//Spanish
        echo "Copyright © 2012 - ".$year." TIC | Todos los derechos reservados.";
    } else if ($_SESSION["language"] === "sv") {//Swedish
        //$_SESSION["language"] = 'sv';
    } else if ($_SESSION["language"] === "tk") {//Turkish
        //$_SESSION["language"] = 'tk';
    }
}
function displayText($tableName, $alp2, $columnName) {
    try {
        require 'config.php';
        $handler->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $result = $handler->prepare("SELECT `$columnName` FROM `$tableName` WHERE alp2=:alp2 ");
        $result->bindParam(':alp2', $alp2);
        $result->execute();
        $rows = $result->fetchAll();
        foreach($rows as $row):
            echo $row[$columnName];
        endforeach;
        $handler = null;
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
}


?>

<header id="header">
    <!-- <div id="topHeader">
        <div class="wrapper">
            <div class="top_nav three">
                <div class="container">
                    <ul>
                        <li><i class="fa fa-phone"></i> 852-3796-3305</li>
                        <li><a href="https://tic-service.company/"><i class="fa fa-user"></i> <?php displayText('top-nav', $_SESSION["language"], 'login'); ?></a></li>
                        <li><a onclick="showContactUsNewWindow()"><i class="fa fa-envelope-o"></i> <?php displayText('top-nav', $_SESSION["language"], 'email'); ?></a></li>
                        <li>
                            <div class="country_selector"><?php //displayText('top-nav', $_SESSION["language"], 'language'); ?>
                                <select name="forma" id="ChangeLanguage" onchange="ChangeLanguage(this)">
                                    <option value="en" <?php if ($_SESSION["language"]=='en') { echo "selected='selected'"; } ?>>English</option>
                                    <option value="cz" <?php if ($_SESSION["language"]=='cz') { echo "selected='selected'"; } ?>>Czech</option>
                                    <option value="da" <?php if ($_SESSION["language"]=='da') { echo "selected='selected'"; } ?>>Danish</option>
                                    <option value="fr" <?php if ($_SESSION["language"]=='fr') { echo "selected='selected'"; } ?>>French</option>
                                    <option value="de" <?php if ($_SESSION["language"]=='de') { echo "selected='selected'"; } ?>>German</option>
                                    <option value="it" <?php if ($_SESSION["language"]=='it') { echo "selected='selected'"; } ?>>Italian</option>
                                    <option value="pl" <?php if ($_SESSION["language"]=='pl') { echo "selected='selected'"; } ?>>Polish</option>
                                    <option value="pt" <?php if ($_SESSION["language"]=='pt') { echo "selected='selected'"; } ?>>Portuguese</option>
                                    <option value="ru" <?php if ($_SESSION["language"]=='ru') { echo "selected='selected'"; } ?>>Russian</option>
                                    <option value="sk" <?php if ($_SESSION["language"]=='sk') { echo "selected='selected'"; } ?>>Slovak</option>
                                    <option value="es" <?php if ($_SESSION["language"]=='es') { echo "selected='selected'"; } ?>>Spanish</option>
                                    <option value="sv" <?php if ($_SESSION["language"]=='sv') { echo "selected='selected'"; } ?>>Swedish</option>
                                    <option value="tk" <?php if ($_SESSION["language"]=='tk') { echo "selected='selected'"; } ?>>Turkish</option>
                                </select>
                            </div>
                        </li>
                        <li><a target="_blank" href="https://www.facebook.com/TheInspectionCompany/"><i class="fa fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/inspectionltd?lang=en"><i class="fa fa-twitter"></i></a></li>
                        <li class="last">
                            <a href="https://www.linkedin.com/organization-guest/company/the-inspection-company-limited?challengeId=AQEwy1Oda6vu1gAAAXOYVLoH9ZbI_X_cPfiHVsZJ98rOFQ0g9WGiGQqs6KmfVhUKMXxTqO9nvTsfWjtn8spjYhQK7qVIsxGoXQ&submissionId=97787dcb-2217-2616-f0fd-3ce16109ab25">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> -->
    <div id="trueHeader">
        <div class="wrapper">
            <div class="container">
                <!-- Logo -->
                <div class="logo column">
                    <a href="https://the-inspection-company.com/2022/" id="logo">
                    </a>
                </div>
                <!-- Menu -->
                <div class="menu_main column">
                    <div class="navbar yamm navbar-default">
                        <div class="container">
                            <div class="navbar-header">
                                <div class="navbar-toggle navbar-collapse pull-right"
                                data-toggle="collapse" width="909.489" height="68.523"
                                data-target="#navbar-collapse-1">
                                    <span>Menu</span>
                                    <button type="button">
                                        <i class="fa fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                            <div id="navbar-collapse-1" class="navbar-collapse collapse pull-right">
                                <nav>
                                    <ul class="nav navbar-nav">
                                        <li class="dropdown yamm-fw">
                                            <a href="about.php"
                                            class="dropdown-toggle<?php echo
                                            $current_page  == 'about.php' ||
                                            $current_page  == 'quality.php' ||
                                            $current_page  == 'location.php' ||
                                            $current_page  == 'testimonial.php' ||
                                            $current_page  == 'terms.php' ||
                                            $current_page  == 'faqs.php' ? ' active' : NULL ?>">
                                                <?php displayText('main-nav', $_SESSION["language"], 'nav1'); ?>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p><?php displayText('nav1-submenu', $_SESSION["language"], 'submenu1'); ?></p></li>
                                                                <li><a href="about.php"><i class="fa fa-font"></i> &nbsp; <?php displayText('nav1-submenu', $_SESSION["language"], 'submenu2'); ?></a></li>
                                                                <li><a href="quality.php"><i class="fa fa-check-circle"></i> &nbsp; <?php displayText('nav1-submenu', $_SESSION["language"], 'submenu3'); ?></a></li>
                                                                <li><a href="location.php"><i class="fa fa-map-marker"></i> &nbsp; <?php displayText('nav1-submenu', $_SESSION["language"], 'submenu4'); ?></a></li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><br><p></p></li>
                                                                <li><a href="testimonial.php"><i class="fa fa-quote-left"></i> &nbsp; <?php displayText('nav1-submenu', $_SESSION["language"], 'submenu5'); ?></a> </li>
                                                                <li><a href="terms.php"><i class="	fa fa-warning"></i> &nbsp; <?php displayText('nav1-submenu', $_SESSION["language"], 'submenu6'); ?></a> </li>
                                                                <li><a href="faqs.php"><i class="fa fa-question-circle"></i> &nbsp; <?php displayText('nav1-submenu', $_SESSION["language"], 'submenu7'); ?></a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><br><p></p></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <!--end elements styles-->
                                        <li class="dropdown yamm-fw">
                                            <a href="our-services"
                                            class="dropdown-toggle<?php echo
                                            $current_page  == 'pre-production-inspection.php' ||
                                            $current_page  == 'DUPRO.php' ||
                                            $current_page  == 'PSI.php' ||
                                            $current_page  == 'CLI.php' ||
                                            $current_page  == 'SUPL.php' ||
                                            $current_page  == 'PA.php' ||
                                            $current_page  == 'DCA.php' ||
                                            $current_page  == 'SA.php' ||
                                            $current_page  == 'ST.php' ||
                                            $current_page  == 'our-services.php' ? ' active' : NULL ?>">
                                                <?php displayText('main-nav', $_SESSION["language"], 'nav2'); ?>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p><?php displayText('nav2-submenu', $_SESSION["language"], 'submenu1'); ?></p></li>
                                                                <li><a href="pre-production-inspection.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu2'); ?></a></li>
                                                                <li><a href="DUPRO.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu3'); ?></a></li>
                                                                <li><a href="PSI.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu4'); ?></a></li>
                                                                <li><a href="CLI.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu5'); ?></a></li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p><?php displayText('nav2-submenu', $_SESSION["language"], 'submenu6'); ?></p></li>
                                                                <li><a href="PA.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu7'); ?></a></li>
                                                                <li><a href="DCA.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu8'); ?></a></li>
                                                                <li><a href="SA.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu9'); ?></a></li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p><?php displayText('nav2-submenu', $_SESSION["language"], 'submenu10'); ?></p></li>
                                                                <li><a href="ST.php"><i class="fa fa-check-circle-o"></i> &nbsp; <?php displayText('nav2-submenu', $_SESSION["language"], 'submenu11'); ?></a> </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown yamm-fw">
                                            <a href="order.php" 
                                            class="dropdown-toggle<?php echo
                                            $current_page  == 'order.php' ||
                                            $current_page  == 'factory.php' ||
                                            $current_page  == 'product.php' ||
                                            $current_page  == 'report.php' ||
                                            $current_page  == 'shipment.php' ||
                                            $current_page  == 'KPI.php' ||
                                            $current_page  == 'mobile.php' ||
                                            $current_page  == 'booking.php' ||
                                            $current_page  == 'geo.php' ? ' active' : NULL ?>">
                                                <?php displayText('main-nav', $_SESSION["language"], 'nav3'); ?>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p><?php displayText('nav3-submenu', $_SESSION["language"], 'submenu1'); ?> </p></li>
                                                                <li><a href="order.php"><i class="fa fa-desktop"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu2'); ?></a></li>
                                                                <li><a href="factory.php"><i class="fa fa-institution"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu3'); ?></a></li>
                                                                <li><a href="product.php"><i class="fa fa-gift"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu4'); ?></a></li>
                                                                <li><a href="report.php"><i class="fa fa-file-archive-o"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu5'); ?></a></li>
                                                                <li><a href="shipment.php"><i class="fa fa-check-circle-o"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu6'); ?></a></li>
                                                                <li><a href="KPI.php"><i class="fa fa-bar-chart"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu7'); ?></a></li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p> <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu8'); ?> </p></li>
                                                                <li><a href="mobile.php"><i class="fa fa-mobile-phone"></i> &nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu9'); ?></a></li>
                                                                <li><a href="booking.php"><i class="fa fa-bookmark-o"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu10'); ?></a></li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li><p> <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu11'); ?></p></li>
                                                                <li><a href="geo.php"><i class="fa fa-map-marker"></i>&nbsp; <?php displayText('nav3-submenu', $_SESSION["language"], 'submenu12'); ?></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown yamm-fw" style="cursor:pointer">
                                            <a onclick="showContactUsNewWindow()" class="dropdown-toggle">
                                                <?php displayText('main-nav', $_SESSION["language"], 'nav4'); ?>
                                            </a>
                                        </li>
                                        <li class="dropdown">
                                            <div class="margin_top1"></div>
                                            <a class="but_st1 small orange" href="https://tic-service.company/" alt="Log in Here">
                                                <?php displayText('main-nav', $_SESSION["language"], 'nav5'); ?>
                                            </a>
                                            <a class="but_st1 small orange" href="https://tic-service.company/create-account" alt="Create Account Here">
                                                <?php displayText('main-nav', $_SESSION["language"], 'nav6'); ?>
                                            </a>
                                        </li>
                                        <li class="dropdown">
                                            <div class="country_selector">
                                                <select name="forma" id="ChangeLanguage" onchange="ChangeLanguage(this)">
                                                    <option value="en" <?php if ($_SESSION["language"]=='en') { echo "selected='selected'"; } ?>>English</option>
                                                    <option value="cz" <?php if ($_SESSION["language"]=='cz') { echo "selected='selected'"; } ?>>Czech</option>
                                                    <option value="da" <?php if ($_SESSION["language"]=='da') { echo "selected='selected'"; } ?>>Danish</option>
                                                    <option value="fr" <?php if ($_SESSION["language"]=='fr') { echo "selected='selected'"; } ?>>French</option>
                                                    <option value="de" <?php if ($_SESSION["language"]=='de') { echo "selected='selected'"; } ?>>German</option>
                                                    <option value="it" <?php if ($_SESSION["language"]=='it') { echo "selected='selected'"; } ?>>Italian</option>
                                                    <option value="pl" <?php if ($_SESSION["language"]=='pl') { echo "selected='selected'"; } ?>>Polish</option>
                                                    <option value="pt" <?php if ($_SESSION["language"]=='pt') { echo "selected='selected'"; } ?>>Portuguese</option>
                                                    <option value="ru" <?php if ($_SESSION["language"]=='ru') { echo "selected='selected'"; } ?>>Russian</option>
                                                    <option value="sk" <?php if ($_SESSION["language"]=='sk') { echo "selected='selected'"; } ?>>Slovak</option>
                                                    <option value="es" <?php if ($_SESSION["language"]=='es') { echo "selected='selected'"; } ?>>Spanish</option>
                                                    <option value="sv" <?php if ($_SESSION["language"]=='sv') { echo "selected='selected'"; } ?>>Swedish</option>
                                                    <option value="tk" <?php if ($_SESSION["language"]=='tk') { echo "selected='selected'"; } ?>>Turkish</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="securesafe column">
                    <a id="securesafe"
                        onclick="window.open('https://www.sitelock.com/verify.php?site=the-inspection-company.com','SiteLock','width=600,height=600,left=160,top=170');">
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>