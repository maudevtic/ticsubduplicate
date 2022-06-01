<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<?php
$url = $_SERVER["REQUEST_URI"];
function PageName() {
  return substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
}

$current_page = PageName();
if(
    $url == '/tic_new/contact.php'
    || $url == '/tic_new/'
    || $url == '/tic_new/index.php'
    || $url == '/tic_new/about.php'
    || $url == '/tic_new/quality.php'
    || $url == '/tic_new/location.php'
    || $url == '/tic_new/testimonial.php'
    || $url == '/tic_new/terms.php'
    || $url == '/tic_new/faqs.php'
    || $url == '/tic_new/IQI.php'
    || $url == '/tic_new/PSI.php'
    || $url == '/tic_new/DUPRO.php'
    || $url == '/tic_new/CLI.php'
    || $url == '/tic_new/SUPL.php'
    || $url == '/tic_new/PA.php'
    || $url == '/tic_new/DCA.php'
    || $url == '/tic_new/SA.php'
    || $url == '/tic_new/ST.php'
    || $url == '/tic_new/order.php'
    || $url == '/tic_new/factory.php'
    || $url == '/tic_new/product.php'
    || $url == '/tic_new/report.php'
    || $url == '/tic_new/shipment.php'
    || $url == '/tic_new/mobile.php'
    || $url == '/tic_new/booking.php'
    || $url == '/tic_new/geo.php'
  ) { ?>

<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="../css/slider-setup.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="css/responsive-leyouts.css" media="screen" rel="stylesheet" type="text/css">
<link href="js/mainmenu/sticky.css" rel="stylesheet" type="text/css">
<link href="js/mainmenu/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="js/mainmenu/demo.css" rel="stylesheet" type="text/css">
<link href="js/mainmenu/menu.css" rel="stylesheet" type="text/css">
<link href="js/revolutionslider/css/style.css" media="screen" rel="stylesheet" type="text/css">
<link href="js/revolutionslider/rs-plugin/css/settings.css" media="screen" rel="stylesheet" type="text/css">
<link href="css/Simple-Line-Icons-Webfont/simple-line-icons.css" media="screen" rel="stylesheet" type="text/css">
<link href="js/flexslider/flexslider.css" media="screen" rel="stylesheet" type="text/css">
<link href="js/accordion/accordion.css" media="all" rel="stylesheet" type="text/css">
<link href="js/tabs/assets/css/responsive-tabs.css" rel="stylesheet" type="text/css">
<link href="js/tabs/assets/css/responsive-tabs2.css" rel="stylesheet" type="text/css">
<link href="js/tabs/assets/css/responsive-tabs11.css" rel="stylesheet" type="text/css">
<link href="js/style-switcher/color-switcher.css" media="screen" rel="stylesheet" type="text/css">
<link href="css/colors/orange.css" rel="alternate" type="text/css" title="orange">
<link href="js/form/sky-forms.css" media="all" rel="stylesheet" type="text/css">
<link href="../css/product-tabs.css" rel="stylesheet">
<link href="images/favicon.ico" rel="shortcut icon">

<?php }else{ ?>

<link href="../css/reset.css" rel="stylesheet" type="text/css">
<link href="../css/style.css" rel="stylesheet" type="text/css">
<link href="../css/slider-setup.css" rel="stylesheet">
<link href="../css/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="../css/responsive-leyouts.css" media="screen" rel="stylesheet" type="text/css">
<link href="../js/mainmenu/sticky.css" rel="stylesheet" type="text/css">
<link href="../js/mainmenu/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../js/mainmenu/demo.css" rel="stylesheet" type="text/css">
<link href="../js/mainmenu/menu.css" rel="stylesheet" type="text/css">
<link href="../js/revolutionslider/css/style.css" media="screen" rel="stylesheet" type="text/css">
<link href="../js/revolutionslider/rs-plugin/css/settings.css" media="screen" rel="stylesheet" type="text/css">
<link href="../css/Simple-Line-Icons-Webfont/simple-line-icons.css" media="screen" rel="stylesheet" type="text/css">
<link href="../js/flexslider/flexslider.css" media="screen" rel="stylesheet" type="text/css">
<link href="../js/accordion/accordion.css" media="all" rel="stylesheet" type="text/css">
<link href="../js/tabs/assets/css/responsive-tabs.css" rel="stylesheet" type="text/css">
<link href="../js/tabs/assets/css/responsive-tabs2.css" rel="stylesheet" type="text/css">
<link href="../js/tabs/assets/css/responsive-tabs11.css" rel="stylesheet" type="text/css">
<link href="../js/style-switcher/color-switcher.css" media="screen" rel="stylesheet" type="text/css">
<link href="../css/colors/orange.css" rel="alternate" type="text/css" title="orange">
<link href="../js/form/sky-forms.css" media="all" rel="stylesheet" type="text/css">
<link href="../css/product-tabs.css" rel="stylesheet">
<link href="../images/favicon.ico" rel="shortcut icon">
<?php } ?>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
<style>
.navbar-nav .dropdown:last-child{
    margin-left:10px!important;
}
.responsive_img{
    width:100%!important;
}
.vw100{
    max-width:100%!important;
}
.img_size1{
    max-width:100%!important;
    text-align:center!important;
    display:block!important;
}
@media only screen and (min-width:600px){
    .responsive_img{
        width:50%!important;
    }
    .img_size1{
        max-width:50%!important;
        text-align:center!important;
        display:block!important;
        margin-right:10px!important;
    }
}
@media only screen and (min-width:768px){
    .responsive_img{
        width:40%!important;
    }
    .img_size1{
        max-width:50%!important;
        text-align:center!important;
        display:block!important;
        margin-right:10px!important
    }
}
#with_style li {
    list-style:disc!important
}

a.but_st1.small.orange {
    color:#fff!important
}

a.but_st1.small.orange:hover {
    color:#ff9d12!important
}

body.modal-open .modal {
    display:flex!important;height:100%
}

body.modal-open .modal .modal-dialog{
    margin:auto
}
.modal-header {
    background-color:#ff9d12;color:#fff!important
}

.modal-header .modal-title {
    color:#fff!important
}

.modal-content {
    border:1px solid #ff9d12!important
}

.modal-backdrop {
    background-color:transparent!important
}
.parallax {
    background-image:url(images/site-img34.jpg);
    height:300px;
    max-width:100%!important;
    background-attachment:fixed;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover
}

.positionflex {
    position: flex;
    margin-left: 3% !important;
}
</style>
<!-- Modal -->
<div class="modal fade" id="notif-modal" role="dialog" style="z-index:999999999999 !important;">
    <div class="modal-dialog modal-md">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Warning!</h4>
            </div>
            <div class="modal-body">
                <h4>There is fake inspection certificate and reports provided by non TIC inspector...</h4>
                <h4>If you have any doubt please contact your account manager.</h4>
            </div>
        </div>
    </div>
</div>
