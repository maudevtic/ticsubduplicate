<?php
function active($currect_page){
  $url_array =  explode('/', $_SERVER['REQUEST_URI']) ;
  $url = end($url_array);  
  if($currect_page == $url){
      echo 'active'; //class name in css 
  } 
}
?>
   <header id="header">
    <!-- Top header bar -->
    <div id="topHeader">
        <div class="wrapper">
            <div class="top_nav three">
                <div class="container">
                    <ul>

                        <li><i class="fa fa-phone"></i> 852-3796-3305</li>
                        <li><a href="#"><i class="fa fa-comments"></i> Chat ao Vivo</a></li>
                        <li><a href="https://tic-service.company/"><i class="fa fa-user"></i> Autenticação</a></li>
                        <li><a href="../contact/portugal.php"><i class="fa fa-envelope-o"></i> Envie-nos um email</a></li>
                        <li>
                            <div class="country_selector">País
                                <select name="forma" onchange="location = this.value;">
                                    <option selected="selected" value="US"> Portugal</option>
                                    <option value="../shipment.php">English</option>
                                    <option value="denmark.php">Denmark</option>
                                    <option value="netherlands.php">Dutch</option>
                                    <option value="france.php">French</option>
                                    <option value="germany.php">Germany</option>
                                    <option value="italy.php">Italian</option>
                                    <option value="norway.php">Norwegian</option>
                                    <option value="poland.php">Polish</option>
                                    <option value="russia.php">Russian</option>
                                    <option value="saudi.php">Arabic</option>
                                    <option value="sweden.php">Swedish</option>
                                    <option value="turkey.php">Turkish</option>
                                    <option value="spain.php">Spanish</option>

                                </select>
                            </div>
                        </li>
                        <li><a target="_blank" href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a target="_blank" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li class="last"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                    <!-- end links -->

                </div>
            </div>
        </div>
    </div>
    <!-- end top navigation -->

    <div id="trueHeader">
        <div class="wrapper">
            <div class="container">

                <!-- Logo -->
                <div class="logo"><a href="../home/portugal.php" id="logo"></a></div>

                <!-- Menu -->
                <div class="menu_main">
                    <div class="navbar yamm navbar-default">
                        <div class="container">
                            <div class="navbar-header">
                                <div class="navbar-toggle .navbar-collapse .pull-right " data-toggle="collapse" data-target="#navbar-collapse-1"> <span>Menu</span>
                                    <button type="button"> <i class="fa fa-bars"></i></button>
                                </div>
                            </div>
                            <div id="navbar-collapse-1" class="navbar-collapse collapse pull-right">
                                <nav>
                                    <ul class="nav navbar-nav">
                                        <li class="dropdown"> <a href="../home/portugal.php" class="dropdown-toggle "> Home</a></li>



                                        <li class="dropdown yamm-fw"> <a href="../about/portugal.php" class="dropdown-toggle ">Sobre Nós</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Quem Somos </p>
                                                                </li>
                                                                <li><a href="../about/portugal.php"><i class="fa fa-font"></i> &nbsp; Sobre TIC</a> </li>
                                                                <li><a href="../quality/portugal.php"><i class="fa fa-check-circle"></i> &nbsp; O Nosso Padrão de Qualidade</a> </li>
                                                                <li><a href="../location/portugal.php"><i class="fa fa-map-marker"></i> &nbsp; A Nossa Localização</a> </li>

                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <br>
                                                                    <p> </p>
                                                                </li>

                                                                <li><a href="../testimonial/portugal.php"><i class="fa fa-quote-left"></i> &nbsp; Testimonial</a> </li>
                                                                <li><a href="../terms/portugal.php"><i class="	fa fa-warning"></i> &nbsp; Terms and Condition</a> </li>
                                                                <li><a href="../faqs/portugal.php"><i class="fa fa-question-circle"></i> &nbsp; FAQs</a> </li>

                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <br>
                                                                    <p> </p>
                                                                </li>
                                                                <li><a href="#"><i class="fa fa-pencil"></i> &nbsp; Blog</a> </li>


                                                            </ul>

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <!--end elements styles-->


                                        <li class="dropdown yamm-fw"> <a href="../IQI/portugal.php" class="dropdown-toggle ">Inspection Services</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Inspection Service </p>
                                                                </li>
                                                                <li><a href="../IQI/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Incoming Quality Inspection</a> </li>
                                                                <li><a href="../DUPRO/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; During Production Inspection</a> </li>
                                                                <li><a href="../PSI/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Pre Shipment Inspection</a> </li>
                                                                <li><a href="../CLI/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Container Loading Inspection</a> </li>
                                                                <li><a href="../SUPL/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Setting Up Production Lines</a> </li>

                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Audit Services </p>
                                                                </li>

                                                                <li><a href="../PA/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Physical Audit</a> </li>
                                                                <li><a href="../DCA/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Detailed Company Audit</a> </li>
                                                                <li><a href="../SA/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Social Audit</a> </li>

                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Sample Test Service</p>
                                                                </li>
                                                                <li><a href="../ST/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Sample Test</a> </li>


                                                            </ul>

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>



                                        <li class="dropdown yamm-fw"> <a href="../order/portugal.php" class="dropdown-toggle <?php active('order/portugal.php');?>">Our Quality Platform</a>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <!-- Content container to add padding -->
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Sistema de Marcações Online </p>
                                                                </li>
                                                                <li><a href="../order/portugal.php"><i class="fa fa-desktop"></i> &nbsp; Orders Management</a> </li>
                                                                <li><a href="../factory/portugal.php"><i class="fa fa-institution"></i> &nbsp; Factory Management</a> </li>
                                                                <li><a href="../product/portugal.php"><i class="fa fa-gift"></i> &nbsp; Gestão de Produtos</a> </li>
                                                                <li><a href="../report/portugal.php"><i class="fa fa-file-archive-o"></i> &nbsp; Online Inspection Report</a> </li>
                                                                <li><a href="../shipment/portugal.php"><i class="fa fa-check-circle-o"></i> &nbsp; Aprovar / Rejeitar Remessa</a> </li>

                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Inspection Mobile App </p>
                                                                </li>

                                                                <li><a href="../mobile/portugal.php"><i class="fa fa-mobile-phone"></i> &nbsp; App Geral Inspeção</a> </li>
                                                                <li><a href="../booking/portugal.php"><i class="	fa fa-bookmark-o"></i> &nbsp; App Marcação Online</a> </li>


                                                            </ul>
                                                            <ul class="col-sm-6 col-md-4 list-unstyled ">
                                                                <li>
                                                                    <p> Monitorização de Geo-Localização</p>
                                                                </li>
                                                                <li><a href="../geo/portugal.php"><i class="fa fa-map-marker"></i> &nbsp; App Geo-Localização</a> </li>


                                                            </ul>

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown yamm-fw">
                                            <a href="../contact/portugal.php" class="dropdown-toggle <?php active('contact/portugal.php');?>">Contate-Nos</a>
                                        </li>
                                        <li class="dropdown">
                                            <div class="margin_top1"></div>
                                            <a class="but_st1 small orange" href="https://tic-service.company/create-account">Criar Conta</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end menu -->
            </div>
        </div>
    </div>
</header>
