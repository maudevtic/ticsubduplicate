<?php
session_start(); 
$language = $_POST['language'];
if ($_SESSION!== '' || $_SESSION!== null) {
    unset($_SESSION['language']);
}
if ($language === 'en') {
    $_SESSION["language"] = "en";
} else if ($language === "cz") {//Czech
    $_SESSION["language"] = 'cz';
} else if ($language === "da") {//Danish
    $_SESSION["language"] = 'da';
} else if ($language === "fr") {//French
    $_SESSION["language"] = 'fr';
} else if ($language === "de") {//German
    $_SESSION["language"] = 'de';
} else if ($language === "it") {//Italian
    $_SESSION["language"] = 'it';
} else if ($language === "pl") {//Polish
    $_SESSION["language"] = 'pl';
} else if ($language === "pt") {//Portuguese
    $_SESSION["language"] = 'pt';
} else if ($language === "ru") {//Russian
    $_SESSION["language"] = 'ru';
} else if ($language === "sk") {//Slovak
    $_SESSION["language"] = 'sk';
} else if ($language === "es") {//Spanish
    $_SESSION["language"] = 'es';
} else if ($language === "sv") {//Swedish
    $_SESSION["language"] = 'sv';
} else if ($language === "tk") {//Turkish
    $_SESSION["language"] = 'tk';
}

?>