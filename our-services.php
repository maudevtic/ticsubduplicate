<?php session_start(); ?>
<?php $title = "OUR SERVICES"; ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
	<title>TIC - <?php echo $title; ?></title>
	<meta charset="utf-8">
	<meta name="description" content="Pre-Production Inspection During Production Inspection Pre Shipment Inspection Container Loading Inspection. Quаlіtу соntrоl inspections bу ѕkіllеd and highly trаіnеd іnѕресtоrѕ іѕ a сruсіаl раrt of ensuring уоur products rеасh the specifications оf уоur bеnсhmаrk аnd your сuѕtоmеr еxресtаtіоnѕ." />
	<?php include '_includes/meta.php'; ?>
	<?php include 'MAINCSS/css.php'; ?>
	<style>
		.parallax {
			background-image: url('images/backgrounds/our-services.webp');
		}
	</style>
</head>
<body>
	<div class="site_wrapper">
		<?php include 'includes/nav.php'; ?>
		<div class="clearfix"></div>
		<div class="header_medium two parallax">
			<div class="container">
				<h3 class="bigtext"><?php displayText('our-services', $_SESSION["language"], 'h3-1'); ?></h3>
				<h3 class="smalltext"><?php displayText('our-services', $_SESSION["language"], 'h3-2'); ?></h3>
			</div>
		</div>
		<div class="section_holder18">
			<div class="container">
				<div class="pagetitle">
					<h3><?php displayText('our-services', $_SESSION["language"], 'h3-3'); ?></h3>
				</div>
				<div class="pagenation">&nbsp;
					<a href="index.php"><?php displayText('our-services', $_SESSION["language"], 'a1'); ?></a>
					<i>/</i>
					<a href="#"><?php displayText('our-services', $_SESSION["language"], 'a2'); ?></a>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="section_holder20">
			<div class="container">
				<h1 class="lt_title_big"><?php displayText('our-services', $_SESSION["language"], 'h1-1'); ?></h1>
				<div class="lt_title_line"></div>
				<p class="lt_title_bottomtext">
					<?php displayText('our-services', $_SESSION["language"], 'p1'); ?>
				</p>
				<div class="clearfix"></div>
				<div class="section_holder25">
					<div class="container">
						<div class="content_left">
							<div class="tab-content">
								<div id="home" class="tab-pane fade in active">
									<div class="text-center">
										<h1 class="uppercase"><?php displayText('our-services', $_SESSION["language"], 'h1-2'); ?></h1>
									</div>
									<a href="pre-production-inspection.php">
										<h3 class="margin_top4"><?php displayText('our-services', $_SESSION["language"], 'h3-4'); ?></h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p2'); ?>
									</p>
									<img src="images/our-services/during-production-inspection.webp" alt="Pre-Production Inspection" class="vw100">
									<a href="DUPRO.php">
										<h3 class="margin_top4"><?php displayText('our-services', $_SESSION["language"], 'h3-5'); ?></h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p3'); ?>
									</p>
									<img src="images/pre-production-inspection2.webp" alt="During Production Inspection" class="vw100">
									<a href="PSI.php">
										<h3 class="margin_top4"><?php displayText('our-services', $_SESSION["language"], 'h3-6'); ?></h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p4'); ?>
									</p>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p5'); ?>
									</p>
									<img src="images/our-services/pre-shipment-inspection.webp" alt="Pre Shipment Inspection" class="vw100">
									<a href="CLI.php">
										<h3 class="margin_top4"><?php displayText('our-services', $_SESSION["language"], 'h3-7'); ?></h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p6'); ?>
									</p>
									<img src="images/container-loading-inspection2.webp" alt="Container Loading Inspection" class="vw100">
								</div>
								<div id="menu1" class="tab-pane fade">
									<h1 class="uppercase"><?php displayText('our-services', $_SESSION["language"], 'h1-3'); ?></h1>
									<a href="PA.php">
										<h3 class="margin_top4"><?php displayText('our-services', $_SESSION["language"], 'h3-8'); ?></h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p7'); ?>
									</p>
									<br />
									<img src="images/physical-audit2.webp" alt="Physical Audit / Supplier Survey" class="vw100">
									<a href="DCA.php">
										<h3 class="margin_top4"><?php displayText('our-services', $_SESSION["language"], 'h3-9'); ?></h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p8'); ?>
									</p>
									<br />
									<img src="images/our-services/factory-audit.webp" alt="Detail Factory Audit" class="vw100">
									<a href="SA.php">
										<h3 class="margin_top4">
											<?php displayText('our-services', $_SESSION["language"], 'h3-10'); ?>
										</h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p9'); ?>
									</p>
									<img src="images/social-audit2.webp" alt="" class="vw100">
								</div>
								<div id="menu2" class="tab-pane fade">
									<h1 class="uppercase">
										<?php displayText('our-services', $_SESSION["language"], 'h1-4'); ?>
									</h1>
									<a href="ST.php">
										<h3 class="margin_top4">
											<?php displayText('our-services', $_SESSION["language"], 'h3-11'); ?>
										</h3>
									</a>
									<p>
										<?php displayText('our-services', $_SESSION["language"], 'p10'); ?>
									</p>
									<img src="images/sample-test2.webp" alt="Sample Test" class="vw100" />
								</div>
							</div>
						</div>
						<div class="right_sidebar">
							<div class="categories_holder">
								<h4 class="pro_sidebar_title"><?php displayText('our-services', $_SESSION["language"], 'h4-1'); ?></h4>
								<ul class="nav nav-pills nav-stacked">
									<li class="active"><a data-toggle="tab" href="#home"><?php displayText('our-services', $_SESSION["language"], 'a3'); ?></a></li>
									<li><a data-toggle="tab" href="#menu1"><?php displayText('our-services', $_SESSION["language"], 'a4'); ?></a></li>
									<li><a data-toggle="tab" href="#menu2"><?php displayText('our-services', $_SESSION["language"], 'a5'); ?></a></li>
								</ul>
							</div>
							<div class="clearfix"></div>
							<div class="sidebar_social_icons">
								<h4><?php displayText('our-services', $_SESSION["language"], 'h4-2'); ?></h4>
								<ul class="social_icon_st2">
									<li><a class="twitter" href="https://twitter.com/inspectionltd?lang=en"><i class="fa fa-twitter"></i></a></li>
									<li><a class="facebook" href="https://www.facebook.com/TheInspectionCompany/"><i class="fa fa-facebook"></i></a></li>
									<li><a class="in" href="https://www.linkedin.com/organization-guest/company/the-inspection-company-limited?challengeId=AQEwy1Oda6vu1gAAAXOYVLoH9ZbI_X_cPfiHVsZJ98rOFQ0g9WGiGQqs6KmfVhUKMXxTqO9nvTsfWjtn8spjYhQK7qVIsxGoXQ&submissionId=97787dcb-2217-2616-f0fd-3ce16109ab25"><i class="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
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