<div class="tabs">
  <div class="tab-header">
    <div class="active">
      <i class="fas fa-ruler-vertical"></i> <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title1'); ?> 
    </div>
    <div>
      <i class="fas fa-cogs"></i> <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title2'); ?>
    </div>
    <div>
      <i class="fas fa-hard-hat"></i> <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title3'); ?>
    </div>
    <div>
      <i class="fas fa-truck-loading"></i> <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title4'); ?>
    </div>
    <div>
      <i class="fas fa-box"></i> <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title5'); ?>
    </div>
    <div>
      <i class="fa fa-bar-chart"></i> <?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title6'); ?>
    </div>
  </div>
  <div class="tab-indicator"></div>
  <div class="tab-content">
    <div class="active row">
      <section class="col-md-7">
        <h2><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title1'); ?></h2>
        <p><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'subtitle1'); ?></p>
      </section>
      <section class="col-xs-3">
        <img src="images/psi/appearance.webp" width="250" height="167" alt="TIC Test">
      </section>
    </div>
    <div class="row">
      <section class="col-md-7">
        <h2><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title2'); ?></h2>
        <p><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'subtitle2'); ?></p>
      </section>
      <section class="col-xs-3">
        <img src="images/psi/function.webp" width="500" height="333.37" alt="TIC Function Test">
      </section>
    </div>
    <div class="row">
      <section class="col-md-7">
        <h2><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title3'); ?></h2>
        <p><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'subtitle3'); ?></p>
      </section>
      <section class="col-xs-3">
        <img src="images/psi/safety.webp" width="250" height="167" alt="TIC Safety Test">
      </section>
    </div>
    <div class="row">
      <section class="col-md-7">
        <h2><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title4'); ?></h2>
        <p><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'subtitle4'); ?></p>
      </section>
      <section class="col-xs-3">
        <img src="images/psi/transport.webp" width="500" height="333.37" alt="TIC Transport Inspection">
      </section>
    </div>
    <div class="row">
      <section class="col-md-7">
        <h2><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title5'); ?></h2>
        <p><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'subtitle5'); ?></p>
      </section>
      <section class="col-xs-3">
        <img src="images/psi/packaging.webp" width="250" height="167" alt="TIC Packaging Inspection">
      </section>
    </div>
    <div class="row">
      <section class="col-md-7">
        <h2><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'title6'); ?></h2>
        <p><?php displayText('pre-shipment-inspection', $_SESSION["language"], 'subtitle6'); ?></p>
      </section>
      <section class="col-xs-3">
        <img src="images/psi/generaltest.webp" width="250" height="167" alt="TIC General Test Inspection">
      </section>
    </div>
  </div>
  <br>
  <br>
</div>
<style>
  * {
    box-sizing: border-box;
  }

  section>img {
    width: 19vw;
  }

  .tabs {
    position: relative;
    top: 60%;
    left: 0;
    transform: translate(20%, 10%);
    width: 70vw;
    height: 40vh;
    padding: 30px 30px;
    background: #fff;
    overflow: hidden;
  }

  .tabs .tab-header {
    float: left;
    width: 180px;
    height: 130%;
    border-right: 2px solid #ccc;
    padding: 50px 0px;
  }

  .tabs .tab-header>div {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    color: #888;
    cursor: pointer;
    padding-left: 10px;
  }

  .tabs .tab-header>div:hover,
  .tabs .tab-header>div.active {
    color: #FF8D31;
  }

  .tabs .tab-header div i {
    display: inline-block;
    margin-left: 10px;
    margin-right: 5px;
  }

  .tabs .tab-content {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .tabs .tab-content>div>i {
    display: inline-flex;
    width: 50px;
    height: 50px;
    background: #555;
    color: #f5f5f5;
    font-size: 25px;
    font-weight: 600;
    text-align: left;
    line-height: 50px;
    border-radius: 50%;
  }

  .tabs .tab-content>div {
    position: absolute;
    text-align: left;
    padding: 40px 20px;
    top: -200%;
    transition: all 500ms ease-in-out;
  }

  .tabs .tab-content>div.active {
    top: 0px;
  }

  .tabs .tab-indicator {
    position: absolute;
    width: 4px;
    height: 50px;
    background: #FF8D31;
    left: 205px;
    top: 80px;
    transition: all 500ms ease-in-out;
  }
</style>
<script>
  function _class(name) {
    return document.getElementsByClassName(name);
  }

  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

  for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");
      _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      // console.log(i);
    });
  }
</script>