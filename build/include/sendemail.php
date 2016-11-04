<?php

require_once('phpmailer/class.phpmailer.php');

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->Host = "smtp.example.com";
// optional
// used only when SMTP requires authentication  
$mail->SMTPAuth = true;
$mail->Username = 'root';
$mail->Password = 'bakes1416';

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
    if( $_POST['name'] != '' AND $_POST['email'] != '' AND $_POST['msg'] != '' ) {

        $name = $_POST['name'];
        $email = $_POST['email'];
        $type = $_POST['type'];
        $dropbox_url = $_POST['dropbox_url'];
        $message = $_POST['msg'];

        //$subject = isset($subject) ? $subject : 'New Message From Contact Form';

        $botcheck = $_POST['botcheck'];

        $toemail = 'zindex14@gmail.com'; // Your Email Address
        $toname = 'We Pro'; // Your Name

        if( $botcheck == '' ) {

            $mail->SetFrom( $email , $name );
            $mail->AddReplyTo( $email , $name );
            $mail->AddAddress( $toemail , $toname );
            //$mail->Subject = $subject;

            $name = isset($name) ? "Name: $name<br><br>" : '';
            $email = isset($email) ? "Email: $email<br><br>" : '';
            $type = isset($type) ? "Type of project: $type<br><br>" : '';
            $dropbox_url = isset($dropbox_url) ? "Dropbox URL: $dropbox_url<br><br>" : '';
            $message = isset($message) ? "Message: $message<br><br>" : '';

            $referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This Form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';

            $body = "$name $email $type $dropbox_url $message $referrer";

            $mail->MsgHTML( $body );
            $sendEmail = $mail->Send();

            if( $sendEmail == true ):
                echo 'We have <strong>successfully</strong> received your message and will get back to you as soon as possible.';
            else:
                echo 'Email <strong>could not</strong> be sent due to some unexpected error. Please try again later.<br /><br /><strong>Reason:</strong><br />' . $mail->ErrorInfo . '';
                //echo 'Not sent: <pre>'.print_r(error_get_last(), true).'</pre>';
            endif;
        } else {
            echo 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
        }
    } else {
        echo 'Please <strong>Fill up</strong> all the Fields and Try Again.';
    }
} else {
    echo 'An <strong>unexpected error</strong> occured. Please Try Again later.';
}

?>