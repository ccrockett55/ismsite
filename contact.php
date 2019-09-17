<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST['message'];
    
    $email_from = 'li.crockett7@gmail.com';
    $email_subject = 'New Form';

    $email_body = "User Name: $name.\n".
                  'User Email: $email.\n'.
                   'User Message: $message.\n';
    
    $to = 'ccrockett55@gmail.com';

    $headers = 'From: $email_form \r\n';
    $headers = 'Reply-To: $email \r\n';

    mail($to, $email_subject, $email_body, $headers);
    header('Location: index.html');


?>