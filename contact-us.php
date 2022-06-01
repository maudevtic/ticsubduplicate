<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us - T I C</title>
  <link rel="stylesheet" href="/css/font-awesome/css/fontawesome.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <link rel="stylesheet" href="css/popup-form.css" defer>
  <link rel="stylesheet" href="/css/honey-pot.css">
  <?php include '_includes/meta.php'; ?>
  <meta name="description" content="The Inspection Company performs 3rd party quality control as factory audit, inspections service and sample testing in China, India, Malaysia, Cambodia, Indonesia, Thailand, Sri Lanka, Philippines, Taiwan, Hong Kong, Bangladesh, Vietnam, Myanmar, Laos and all over Asia." />
  <!-- End Google Tag Manager (noscript) -->
</head>
<body>
  <style>
    .click-img {
      color: #fff;
      font-size: .7rem;
    }

    img#captcha_image {
      float: center !important;
    }

    textarea:focus {
      outline: none;
    }

    input:focus {
      outline: none !important;
    }
  </style>
  <?php
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
  <div class="container">
    <div class="contact_form" id="contact_form">
      <div class="whiteHeader">
        <h3 class="text13"><?php displayText('contact-us', $_SESSION['language'], 'h3-1'); ?></h3>
      </div>
      <div>
        <h6 class="text15"><?php displayText('contact-us', $_SESSION['language'], 'h6-1'); ?></h6>
      </div>
      <form action="vendor/phpmailer/send.php" method="POST" id="sky-form" class="sky-form" enctype="multipart/form-data">
        <section class="py-2">
          <input class="contactForm form-control" type="text" name="everIncrease" id="name" placeholder="<?php displayText('contact-us', $_SESSION['language'], 'placeholder1'); ?>" required>
        </section>
        <section class="py-2">
          <input class="contactForm form-control" name="lifeDreams" id="email_real" type="email" placeholder="<?php displayText('contact-us', $_SESSION['language'], 'placeholder2'); ?>" required>
          <input type="text" name="email" style="display: none;">
        </section>
        <section class="py-2">
          <input class="contactForm form-control" name="bonusHappines" id="phoneNumber" type="text" placeholder="<?php displayText('contact-us', $_SESSION['language'], 'placeholder3'); ?>" required>
        </section>
        <section class="py-2">
          <input class="contactForm form-control" type="text" name="sharingCaring" id="subject" placeholder="<?php displayText('contact-us', $_SESSION['language'], 'placeholder4'); ?>" required>
        </section>
        <section class="py-2">
          <textarea name="kindnessWithin" placeholder="<?php displayText('contact-us', $_SESSION['language'], 'placeholder5'); ?>" id="message" cols="30" rows="10" required></textarea>
        </section>
        <section class="py-2">
          <input type="file" id="file" name="easyPeasy" accept=".bmp, ,gif, ,png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .rar, .zip, .txt, .pdf">
        </section class="pb-2">
        <div class="row justify-content-md-center">
          <div class="col">
            <img id="captcha" src="/vendor/securimage368/securimage_show.php" alt="CAPTCHA Image" width="250" height="100" href="#"
            onclick="document.getElementById('captcha').src = '/vendor/securimage368/securimage_show.php?' + Math.random(); return false">
            </br>
            <label class="click-img">
              <?php displayText('contact-us', $_SESSION['language'], 'label1'); ?>
            </label></br>
            <label class="input">
              <input type="text" name="captcha_code"
              size="10" maxlength="6" autocomplete="off" required>
            </label>
          </div>
          <div class="row justify-content-md-center">
            <div class="col pull-right text-center">
              <button type="submit" name="sky-form" class="btn btn-primary" id="btnSubmit">
              <?php displayText('contact-us', $_SESSION['language'], 'button1'); ?>
              </button>
            </div>
          </div>
      </form>
    </div>
  </div>
</body>
</html>