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

?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53ZZLF8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<header id="header">
    <!-- Top header bar -->
    <div id="topHeader" width="2698" height="32">
        <div class="wrapper">
            <div class="top_nav three">
                <div class="container">
                    <ul>
                        <li><i class="fa fa-phone"></i> 852-3796-3305</li>
                        <li><a href="https://tic-service.company/"><i class="fa fa-user"></i> Login</a></li>
                        <li><a onclick="openNewAjaxTab()"><i class="fa fa-envelope-o"></i> Email Us</a></li>
                        <li>
                            <div class="country_selector">Language
                                <select name="forma" onchange="location = this.value;">
                                    <option selected="selected" value="US"> English</option>
                                    <!-- <option value="home/saudi.php">Arabic</option> -->
                                    <!-- <option value="home/denmark.php">Danish</option> -->
                                    <!--  <option value="home/netherlands.php">Dutch</option>
                                    <option value="home/france.php">French</option> -->
                                    <option value="/de/<?php echo $site ?>">German</option>
                                    <!--    <option value="home/italy.php">Italian</option>
                                    <option value="home/norway.php">Norwegian</option>
                                    <option value="home/poland.php">Polish</option>
                                    <option value="home/portugal.php">Portuguese</option>
                                    <option value="home/russia.php">Russian</option>
                                    <option value="home/spain.php">Spanish</option>
                                    <option value="home/sweden.php">Swedish</option>
                                    <option value="home/turkey.php">Turkish</option> -->
                                </select>
                            </div>
                        </li>
                        <li><a target="_blank" href="https://www.facebook.com/TheInspectionCompany/"><i class="fa fa-facebook"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/inspectionltd?lang=en"><i class="fa fa-twitter"></i></a></li>

                        <li class="last"><a href="https://www.linkedin.com/organization-guest/company/the-inspection-company-limited?challengeId=AQEwy1Oda6vu1gAAAXOYVLoH9ZbI_X_cPfiHVsZJ98rOFQ0g9WGiGQqs6KmfVhUKMXxTqO9nvTsfWjtn8spjYhQK7qVIsxGoXQ&submissionId=97787dcb-2217-2616-f0fd-3ce16109ab25"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                    <!-- end links -->
                </div>
            </div>
        </div>
    </div>
    <!-- end top navigation -->
    <div id="trueHeader" width="1686.250" height="68.984">
        <div class="wrapper">
            <div class="container">
                <!-- Logo -->
                <div class="logo"><a href="index.php" id="logo"></a></div>
                <!-- Menu -->
                <div class="menu_main">
                    <div class="navbar yamm navbar-default">
                        <div class="container">
                            <div class="navbar-header">
                                <div class="navbar-toggle navbar-collapse pull-right " data-toggle="collapse" width="909.489" height="68.523" data-target="#navbar-collapse-1"> <span>Menu</span>
                                    <button type="button"> <i class="fa fa-bars"></i></button>
                                </div>
                            </div>
                            <div id="navbar-collapse-1" class="navbar-collapse collapse pull-right">
                                <nav>
                                    <ul class="nav navbar-nav">
                                        <li class="dropdown yamm-fw"> <a href="about.php" class="dropdown-toggle<?php echo $current_page  == 'about.php' || $current_page  == 'quality.php' || $current_page  == 'location.php' || $current_page  == 'testimonial.php' || $current_page  == 'terms.php' || $current_page  == 'faqs.php' ? ' active' : NULL ?>">About Us</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Who We Are </p>
                                                                </li>
                                                                <li><a href="about.php"><i class="fa fa-font"></i> &nbsp; About TIC</a> </li>
                                                                <li><a href="quality.php"><i class="fa fa-check-circle"></i> &nbsp; Our Quality Standard</a> </li>
                                                                <li><a href="location.php"><i class="fa fa-map-marker"></i> &nbsp; Our Location</a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <br>
                                                                    <p> </p>
                                                                </li>
                                                                <li><a href="testimonial.php"><i class="fa fa-quote-left"></i> &nbsp; Testimonial</a> </li>
                                                                <li><a href="terms.php"><i class="	fa fa-warning"></i> &nbsp; Terms and Condition</a> </li>
                                                                <li><a href="faqs.php"><i class="fa fa-question-circle"></i> &nbsp; FAQs</a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <br>
                                                                    <p> </p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <!--end elements styles-->
                                        <li class="dropdown yamm-fw"> <a href="our-services" class="dropdown-toggle<?php echo $current_page  == 'pre-production-inspection.php' || $current_page  == 'DUPRO.php' || $current_page  == 'PSI.php' || $current_page  == 'CLI.php' || $current_page  == 'SUPL.php' || $current_page  == 'PA.php' || $current_page  == 'DCA.php' || $current_page  == 'SA.php' || $current_page  == 'ST.php' || $current_page  == 'our-services.php' ? ' active' : NULL ?>">Our Services</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Inspection Service </p>
                                                                </li>
                                                                <li><a href="pre-production-inspection.php"><i class="fa fa-check-circle-o"></i> &nbsp; Pre-Production Inspection</a> </li>
                                                                <li><a href="DUPRO.php"><i class="fa fa-check-circle-o"></i> &nbsp; During Production Inspection</a> </li>
                                                                <li><a href="PSI.php"><i class="fa fa-check-circle-o"></i> &nbsp; Pre Shipment Inspection</a> </li>
                                                                <li><a href="CLI.php"><i class="fa fa-check-circle-o"></i> &nbsp; Container Loading Inspection</a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Audit Services </p>
                                                                </li>

                                                                <li><a href="PA.php"><i class="fa fa-check-circle-o"></i> &nbsp; Physical Audit</a> </li>
                                                                <li><a href="DCA.php"><i class="fa fa-check-circle-o"></i> &nbsp; Detail Factory Audit</a> </li>
                                                                <li><a href="SA.php"><i class="fa fa-check-circle-o"></i> &nbsp; Social Audit</a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Sample Test Service</p>
                                                                </li>
                                                                <li><a href="ST.php"><i class="fa fa-check-circle-o"></i> &nbsp; Sample Test</a> </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown yamm-fw"> <a href="order.php" class="dropdown-toggle<?php echo $current_page  == 'order.php' || $current_page  == 'factory.php' || $current_page  == 'product.php' || $current_page  == 'report.php' || $current_page  == 'shipment.php' || $current_page  == 'mobile.php' || $current_page  == 'booking.php' || $current_page  == 'geo.php' ? ' active' : NULL ?>">Our Quality Platform</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Online Booking System </p>
                                                                </li>
                                                                <li><a href="order.php"><i class="fa fa-desktop"></i> &nbsp; Orders Management</a> </li>
                                                                <li><a href="factory.php"><i class="fa fa-institution"></i> &nbsp; Supplier Management</a> </li>
                                                                <li><a href="product.php"><i class="fa fa-gift"></i> &nbsp; Product Management</a> </li>
                                                                <li><a href="report.php"><i class="fa fa-file-archive-o"></i> &nbsp; Online Inspection Report</a> </li>
                                                                <li><a href="shipment.php"><i class="fa fa-check-circle-o"></i> &nbsp; Approve / Reject Shipment</a> </li>
                                                                <li><a href="KPI.php"><i class="fa fa-bar-chart"></i> &nbsp; Key Performance Indicator</a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Inspection Mobile App </p>
                                                                </li>
                                                                <li><a href="mobile.php"><i class="fa fa-mobile-phone"></i> &nbsp; Inspection General App</a> </li>
                                                                <li><a href="booking.php"><i class="	fa fa-bookmark-o"></i> &nbsp; Online Booking App</a> </li>
                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Geo Tracking Location</p>
                                                                </li>
                                                                <li><a href="geo.php"><i class="fa fa-map-marker"></i> &nbsp; Geo Tracking App</a> </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown yamm-fw" style="cursor:pointer"> <a onclick="openNewAjaxTab()" class="dropdown-toggle">Contact Us</a>
                                        </li>
                                        <li class="dropdown">
                                            <div class="margin_top1"></div>
                                            <a class="but_st1 small orange" href="https://tic-service.company/" alt="Log in Here">Log in</a>
                                            <a class="but_st1 small orange" href="https://tic-service.company/create-account">Create Account</a>

                                        </li>

                                    </ul>

                                </nav>
                            </div>
                        </div>
                    </div>

                </div>
                <a id="securesafe" onclick="window.open('https://www.sitelock.com/verify.php?site=the-inspection-company.com','SiteLock','width=600,height=600,left=160,top=170');"> </a>

            </div>

            <!-- end menu -->
        </div>
    </div>
    </div>
</header>
<script>

</script>
<style>
    #header .container {
        width: auto;
        max-width: 70rem;
    }

    #securesafe {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 75%;
        min-height: 65px;
        margin-top: 2px;
        margin-left: 15%;
        overflow: visible;
        position: relative;
        z-index: 2;
        text-indent: -999em;
        background: url('https://shield.sitelock.com/shield/the-inspection-company.com') no-repeat right;
    }
</style>