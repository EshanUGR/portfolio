<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    try {
        $mail = new PHPMailer(true);
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ravinduesh@gmail.com'; // Your Gmail address
        $mail->Password = 'ocff rqja mssv kyzt'; // Your Gmail password
        $mail->SMTPSecure = 'tls'; // Encryption type
        $mail->Port = 587; // Port number

        // Recipients
        $mail->setFrom('your-email@gmail.com', 'Your Name');
        $mail->addAddress($email, $fullName); // Add a recipient
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "<h3>Contact Form Submission</h3><p><strong>Name:</strong> $fullName</p><p><strong>Email:</strong> $email</p><p><strong>Mobile:</strong> $mobile</p><p><strong>Message:</strong><br>$message</p>";

        $mail->send();
        header("Location:success.html");
        echo '<script>alert("Message has been sent successfully!"); window.location.href = "index.php";</script>';
        exit();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Error: Form submission method not allowed.";
}
?>
