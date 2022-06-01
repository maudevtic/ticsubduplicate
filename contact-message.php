<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Global site tag (gtag.js) - Google Analytics: UA-XXXXXX-1 und Google Ads: 1234XXXX -->
  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75420572-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-75420572-1');
  </script> -->

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
  <title>Contact-Us by TIC</title>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
  <script src="sweetalert2.min.js"></script>
<link rel="stylesheet" href="sweetalert2.min.css">
<?php include '_includes/meta.php'; ?>
</head>
<body>
</body>
</html>
<script>
  if (<?php echo $_GET['is_sent'] ?> === 1) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you! We have received your message. Your opinions and comments are very important to us and we read every message that we receive. Our goal is to improve our service in any way we can, and we appreciate your taking the time to fill out our feedback form.',
      showConfirmButton: true,
      confirmButtonText:'CLOSE',
      timer: 0
    }).then((result) => {
      if (result.value) {
        var daddy = window.self;
        daddy.opener = window.self;
        daddy.close();
      }
    })
  } else if(<?php echo $_GET['is_sent']?> === 2) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'The security code entered was incorrect',
      confirmButtonText:'CLOSE',
      footer: '<a href ="https://the-inspection-company.com/contact-us.php">Want to try again?</a>',
    }).then((result) => {
      if (result.value) {
        var daddy = window.self;
        daddy.opener = window.self;
        daddy.close();
      }
    })
  } else if (<?php echo $_GET['is_sent']?> === 3) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'an error occurred please try again later',
      confirmButtonText:'CLOSE',
      footer: '<a href ="https://the-inspection-company.com/contact-us.php">Want to try again?</a>'
    }).then((result) => {
      if (result.value) {
        var daddy = window.self;
        daddy.opener = window.self;
        daddy.close();
      }
    })
  }
</script>