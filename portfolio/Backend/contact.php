<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_form = 'premraj259@outlook.com';

  $email_subject = "New form submited on portfolio site";

  $email_body = "User Name: $name.\n".
                  "User Email: $visitor_email/\n".
                    "User Message: $message.\n".

    $to = "premraj259@outlook.com";

    $headers = "Form: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>