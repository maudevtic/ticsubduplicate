<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en-gb">
<?php include 'includes/batbing.php'; ?>
<head>
    <title>TIC - Quality Standard</title>
    <meta charset="utf-8">
    <meta name="description"
        content="AQL - Acceptable Quality Limit
        The AQL-Standard provides a basis for the clients to decide on how they will proceed. Our inspectors work with the ISO 2859 tables and evaluate the AQL of the inspected product. The ISO 2859 refers to a U.S. standard with equivalents in national and international standard setting body (ANSI /ASQC Z 1.4, ISO 2859, NF06 -022, BS 6001, DIN 40080). We use the proven method of Acceptable Quality Level (AQL) to conduct product inspection ANSI/ASQ Z1.4-2008 and MIL STD 105E Standard for sampling." />
    <?php include '_includes/meta.php'; ?>
    <?php include 'MAINCSS/css.php'; ?>
    <style>
        .parallax {
            background-image: url('images/backgrounds/edit_5.webp') !important;
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
                <h3 class="bigtext"><?php displayText('our-quality-standard', $_SESSION["language"], 'h3-1'); ?></h3>
                <h3 class="smalltext"><?php displayText('our-quality-standard', $_SESSION["language"], 'h3-2'); ?></h3>
                <div style="">
                    <?php include_once 'includes/contactusgif.php'; ?>
                </div>
            </div>
        </div>
        <!--end header medium-->

        <div class="section_holder18">
            <div class="container">
                <div class="pagetitle">
                    <h3><?php displayText('our-quality-standard', $_SESSION["language"], 'h3-3'); ?></h3>
                </div>
                <div class="pagenation">
                    &nbsp;<a href="index.php"><?php displayText('our-quality-standard', $_SESSION["language"], 'a1'); ?></a> <i>/</i>
                    <a href="#"><?php displayText('our-quality-standard', $_SESSION["language"], 'a2'); ?></a> <i>/</i>
                    <?php displayText('our-quality-standard', $_SESSION["language"], 'div1'); ?>
                </div>
            </div>
        </div>
        <!--end pagenation-->
        <div class="clearfix"></div>
        <div class="section_holder20">
            <div class="container">
                <h1 class="lt_title_big">
                    <?php displayText('our-quality-standard', $_SESSION["language"], 'h1-1'); ?>
                </h1>
                <div class="lt_title_line"></div>
                <p class="lt_title_bottomtext">
                    <?php displayText('our-quality-standard', $_SESSION["language"], 'p1'); ?>
                </p>
                <div class="clearfix"></div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="table-responsive">
                            <h2 class="sub-header small dark-grey text-left">
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'h2-1'); ?>
                            </h2>
                            <table class="table table-bordered table-condensed">
                                <thead>
                                    <tr class="success">
                                        <th class="text-center" rowspan="2" style="vertical-align: middle">
                                            <?php displayText('our-quality-standard', $_SESSION["language"], 'th-4'); ?>
                                        </th>
                                        <th class="center" colspan="3">
                                            <?php displayText('our-quality-standard', $_SESSION["language"], 'th-1'); ?>
                                        </th>
                                        <th class="center" colspan="4">
                                            <?php displayText('our-quality-standard', $_SESSION["language"], 'th-2'); ?>
                                        </th>
                                    </tr>
                                    <tr class="success">
                                        <th class="text-center">I</th>
                                        <th class="text-center">II</th>
                                        <th class="text-center">III</th>
                                        <th class="text-center">S1</th>
                                        <th class="text-center">S2</th>
                                        <th class="text-center">S3</th>
                                        <th class="text-center">S4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th class="danger text-center">2 to 8</th>
                                        <td>A</td>
                                        <td>A</td>
                                        <td>B</td>
                                        <td>A</td>
                                        <td>A</td>
                                        <td>A</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">9 to 15</th>
                                        <td>A</td>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>A</td>
                                        <td>A</td>
                                        <td>A</td>
                                        <td>A</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center text-center">16 to 25</th>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>A</td>
                                        <td>A</td>
                                        <td>D</td>
                                        <td>D</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">26 to 50</th>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>E</td>
                                        <td>A</td>
                                        <td>B</td>
                                        <td>B</td>
                                        <td>C</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">51 to 90</th>
                                        <td>C</td>
                                        <td>E</td>
                                        <td>F</td>
                                        <td>B</td>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>C</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">91 to 150</th>
                                        <td>D</td>
                                        <td>F</td>
                                        <td>G</td>
                                        <td>B</td>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>D</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">151 to 280</th>
                                        <td>E</td>
                                        <td>G</td>
                                        <td>H</td>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>E</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">281 to 500</th>
                                        <td>F</td>
                                        <td>H</td>
                                        <td>J</td>
                                        <td>B</td>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>E</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">501 to 1,200</th>
                                        <td>G</td>
                                        <td>J</td>
                                        <td>K</td>
                                        <td>C</td>
                                        <td>C</td>
                                        <td>E</td>
                                        <td>F</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">1,201 to 3200</th>
                                        <td>H</td>
                                        <td>K</td>
                                        <td>L</td>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>E</td>
                                        <td>G</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">3,201 to 10,000</th>
                                        <td>J</td>
                                        <td>L</td>
                                        <td>M</td>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>F</td>
                                        <td>G</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">10,001 to 35,000</th>
                                        <td>K</td>
                                        <td>M</td>
                                        <td>N</td>
                                        <td>C</td>
                                        <td>D</td>
                                        <td>F</td>
                                        <td>H</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">35,001 to 150,000</th>
                                        <td>L</td>
                                        <td>N</td>
                                        <td>P</td>
                                        <td>D</td>
                                        <td>E</td>
                                        <td>G</td>
                                        <td>J</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">150,001 to 500,000</th>
                                        <td>M</td>
                                        <td>P</td>
                                        <td>Q</td>
                                        <td>D</td>
                                        <td>E</td>
                                        <td>G</td>
                                        <td>J</td>
                                    </tr>
                                    <tr>
                                        <th class="danger text-center">500,001 and over</th>
                                        <td>N</td>
                                        <td>Q</td>
                                        <td>R</td>
                                        <td>D</td>
                                        <td>E</td>
                                        <td>H</td>
                                        <td>K</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <br/>
                            <br/>
                            <h6>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'h6-1'); ?>
                            </h6>
                            <p>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'p2'); ?>
                            </p>
                            <br/>
                            <p>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'p3'); ?>
                            </p>
                            <br/>
                            <p>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'p4'); ?>
                            </p>
                            <br/>
                            <p>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'p5'); ?> :
                            </p>
                            <br/>
                            <p>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'p6'); ?>
                            </p>
                            <br>
                            <p>
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'p7'); ?>
                            </p>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="table-responsive">
                            <h2 class="sub-header small dark-grey text-left">
                                <?php displayText('our-quality-standard', $_SESSION["language"], 'h2-2'); ?>
                            </h2>
                            <table class="table table-bordered table-condensed">
                                <thead>
                                    <tr class="success">
                                        <th class="text-center" rowspan="3" style="vertical-align: middle">
                                            <?php displayText('our-quality-standard', $_SESSION["language"], 'th-5'); ?>
                                        </th>
                                        <th class="text-center" rowspan="3" style="vertical-align: middle">
                                            <?php displayText('our-quality-standard', $_SESSION["language"], 'th-6'); ?>
                                        </th>
                                        <th colspan="24">
                                            <?php displayText('our-quality-standard', $_SESSION["language"], 'th-3'); ?>
                                        </th>
                                    </tr>
                                    <tr class="success">
                                        <th colspan="2">0.065</th>
                                        <th colspan="2">0.10</th>
                                        <th colspan="2">0.15</th>
                                        <th colspan="2">0.25</th>
                                        <th colspan="2">0.4</th>
                                        <th colspan="2">0.65</th>
                                        <th colspan="2">1.0</th>
                                        <th colspan="2">1.5</th>
                                        <th colspan="2">2.5</th>
                                        <th colspan="2">4.0</th>
                                        <th colspan="2">6.5</th>
                                        <th colspan="2">10</th>
                                    </tr>
                                    <tr class="success">
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                        <th>Ac</th>
                                        <th>Re</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="danger text-center">A</td>
                                        <td class="danger text-center">2</td>
                                        <td colspan="2" rowspan="10" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="9" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="8" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="7" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="6" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="5" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="4" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="3" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" rowspan="2" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td colspan="2" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">B</td>
                                        <td class="danger text-center">3</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">C</td>
                                        <td class="danger text-center">5</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">D</td>
                                        <td class="danger text-center">8</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">E</td>
                                        <td class="danger text-center">13</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">F</td>
                                        <td class="danger text-center">20</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">G</td>
                                        <td class="danger text-center">32</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">H</td>
                                        <td class="danger text-center">50</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">J</td>
                                        <td class="danger text-center">80</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                        <td colspan="2" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">K</td>
                                        <td class="danger text-center">125</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center"><span class="fa fa-arrow-up"></span></td>
                                        <td colspan="2" class="text-center"><span class="fa fa-arrow-down"></span></td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">L</td>
                                        <td class="danger text-center">200</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td colspan="2" class="text-center"><span class="fa fa-arrow-arrow-up"></span></td>
                                        <td colspan="2" class="text-center"><span class="fa fa-arrow-down"></span></td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td colspan="2" rowspan="6" style="vertical-align: top" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">M</td>
                                        <td class="danger text-center">315</td>
                                        <td colspan="2" class="text-center"><span class="fa fa-arrow-up"></span></td>
                                        <td colspan="2" class="text-center"><span class="fa fa-arrow-down"></span></td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td colspan="2" rowspan="5" style="vertical-align: top" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">N</td>
                                        <td class="danger text-center">500</td>
                                        <td colspan="2" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-down"></span>
                                        </td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td colspan="2" rowspan="4" style="vertical-align: top" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">P</td>
                                        <td class="danger text-center">800</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td colspan="2" rowspan="3" style="vertical-align: top" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">Q</td>
                                        <td class="danger text-center">1250</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td colspan="2" rowspan="2" style="vertical-align: top" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="danger text-center">R</td>
                                        <td class="danger text-center">2000</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td colspan="2" style="vertical-align: bottom" class="text-center">
                                            <span class="fa fa-arrow-up"></span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="26">
                                            <span class="fa fa-arrow-down"></span>
                                            : <?php displayText('our-quality-standard', $_SESSION["language"], 'td-1'); ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="26">
                                            <span class="fa fa-arrow-up"></span>
                                            : <?php displayText('our-quality-standard', $_SESSION["language"], 'td-2'); ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="26">
                                            <b>Ac</b>: <?php displayText('our-quality-standard', $_SESSION["language"], 'td-3'); ?>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="26">
                                            <b>Re</b>: <?php displayText('our-quality-standard', $_SESSION["language"], 'td-4'); ?>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!--end section-->
        </div>
        <?php include 'includes/footer.php'; ?>
    </div>
    <!--end sitewraper-->
    <?php include 'MAINCSS/js.php'; ?>
</body>
</html>