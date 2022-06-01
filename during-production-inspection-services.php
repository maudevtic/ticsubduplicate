<?php 
    function __autoload($class){
        include_once($class.".php");
    }
    $obj = new page_cont;

    $page_name = 'inspection_dupro';
    $lang = $_SESSION['lang'];

    $row = $obj->getPage($page_name,$lang,"tic_page");
    $title = $row['meta_title'];
    $description = $row['meta_desc'];
    $content = $row['page_content'];
    ?>
<?php include("head.php");?>

<?php include ("rtl.php"); ?>
<body dir="<?php echo $dir; ?>">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQG9W2V"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <?php include("header.php");?>
    <?php echo $content?>

    <a href="#" class="btn btn-ghost pull-right" id="totop" style=""><span class="glyphicon glyphicon-arrow-up"></span></a>
    <?php include("footer.php");?>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="includes/js/js_functions.js"></script>
    <script src="https://raw.githubusercontent.com/wagerfield/parallax/master/src/parallax.js"></script>
</body>

</html>
