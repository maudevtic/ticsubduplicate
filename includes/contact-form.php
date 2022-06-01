<!--end pagenation-->
<div class="contact_form" id="contact_form">
  <div class="whiteHeader">
    <h3 class="text13">Ask For Quotation</h5>
  </div>
  <div>
    <h6 class="text15">We'll respond within 24 hours.</h6>
  </div>
  <form action="/vendor/phpmailer/send.php" method="POST" id="sky-form" class="sky-form" enctype="multipart/form-data">
    <section style="padding-left: 5%;">
      <input class="contactForm form-control" type="text" name="name" id="name" placeholder="NAME" required>
    </section>
    <section style="padding-left: 5%;">
      <input class="contactForm form-control" name="email" id="email" type=email placeholder="E-MAIL" required>
    </section>
    <section style="padding-left: 5%;">
      <input class="contactForm form-control" name="phoneNumber" id="phoneNumber" type="text" placeholder="NUMBER" required>
    </section>
    <section style="padding-left: 5%;">
      <input class="contactForm form-control" type="text" name="subject" id="subject" placeholder="SUBJECT" required>
    </section>
    <section style="padding-left: 5%;">
      <textarea name="message" placeholder="MESSAGE" id="message" cols="30" rows="10" required></textarea>
    </section>
    <section>
      <input type="file" id="file" name="attachment"
      accept=".bmp, ,gif, ,png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .rar, .zip, .txt, .pdf">
    </section>
    <div class="row text-center">
      <div class="col-xs-2"></div>
      <div class="col-md-7">
        <img id="captcha" src="/vendor/securimage-master/securimage_show.php" alt="CAPTCHA Image" width="250"
          height="100" />
        <label class="input">
          <a href="#" onclick="document.getElementById('captcha').src='/vendor/securimage-master/securimage_show.php?' + Math.random(); return false">
            <i class="icon-append icon-refresh"></i>
          </a>
          <input type="text" name="captcha_code" size="10" maxlength="6" autocomplete="off" required>
        </label>
      </div>
    <div class="row text-center">
      <div class="col pull-right" style="padding-right: 25% im !important;">
        <button type="submit" name="sky-form" class="button" onclick="VerifyAndSubmit()"
          id="btnSubmit"><a>SUBMIT</a></button>
      </div>
      <div class="col pull-left" style="padding-top:5% im !important;">
        <button class="closebtn" href="javascript:void(0)" onclick="closeNav()"><a>X</a></button>
      </div>
    </div>
  </form>
</div>
<?php
  include_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/securimage-master/securimage.php'; 
  $securimage = new Securimage();
  if ($securimage->check($_POST['captcha_code']) === false) {
    echo 'alert("The security code entered was incorrect")';
    echo "</script>";
    exit;
  }
  require $_SERVER['DOCUMENT_ROOT'] . '/vendor/phpmailer/send.php';
?>
<style>
  .sky-form fieldset {
    display: block;
    padding: 0px 0px 5px;
    border: none;
    background: none;
  }

  .sky-form footer {
    display: block;
    padding: 0px 0px 25px;
  }

  textarea {
    width: 300px;
    height: 150px;
  }

  form {
    padding-left: 0%;
    padding-right: 5%;
    position: center;
    left: 5%;
    width: 80%;
    padding-top: 0;
  }

  button {
    width: 100%;
  }

  input[type="file"] {
    color: #fff;
    height: 40px;
    text-align: center;
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  .custom-file-input::before {
    content: 'Select Files';
    width: 100%;
    height: 50%;
    text-align: center;
    border-radius: 58px;
    color: #FF9037;
    display: block;
    background: linear-gradient(180deg, #FFFFFF 0%, #E6E6E6 100%);
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    box-shadow: 8.57253e-16px 14px 28px rgb(51 51 51 / 14%), inset -2.09551e-16px -3.42222px 3.42222px #dfdfdf, inset 2.09551e-16px 3.42222px 3.42222px #ffffff;
    font-weight: 700;
    font-size: 10pt;
  }

  .custom-file-input:hover::before {
    border-color: black;
  }

  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
</style>
