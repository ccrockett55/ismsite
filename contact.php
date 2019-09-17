<?php
if($_POST["message"]) {
    mail("ccrockett55@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>