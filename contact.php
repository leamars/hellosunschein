<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["essay"]);

    if ($name == "" or $email == "" or $subject == "" or $message == "") {
        header("Location: contact.php?status=incomplete");
        exit;
    }

    foreach($_POST as $value) {
        if(stripos($value, 'Content-Type:') !== FALSE) {
            header("Location: contact.php?status=spam");
            exit;
        }
    }

    if($_POST["address"] != "") {
        header("Location: contact.php?status=spam");
        exit;
    }

    require_once("inc/phpMAILER/class.phpmailer.php");
    $mail = new PHPMailer();

    if (!$mail->ValidateAddress($email)) {
        header("Location: contact.php?status=invalidEmail");
        exit;
    }

    $email_body = "";

    $email_body = $email_body 
    . "Name: " . $name . "<br />" 
    . "Email: " . $email . "<br />" 
    . "Subject: " . $subject . "<br />"
    . "Message: " . $message;

    $mail->SetFrom($email, $name);
    $address = "leyamars@gmail.com";
    $mail->AddAddress($address, "hellosunschein");

    $mail->Subject = "hellosunschein Contact Form Submission | " . $name;
    $mail->MsgHTML($email_body);

    $subject = "hellosunschein Contact Form Submission | " . $subject;
    $headers = "From: " . $name;

    if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
        mail($address, $subject, $email_body, $headers);
        exit;
    } 

    header("Location: contact.php?status=thanks");
    exit;
}
?>

<?php
$activeClass = "contact_active"; 
$other = false;
include('inc/header.php'); 
?>

</script>
    
    <div class="container">

        <div class="row content height_fix">          
           
           <div class="col-lg-1"></div>
            <div class="col-lg-4">
            
            <h2>Leave me a message (:</h2>
            <p>Hey, I'd love to hear from you, whether you'd like me to participate in a future project of yours, bash my code, 
            or just say hello. </p>
            <form id="form" action="contact.php" method="post" id="contact">
            <fieldset>
            <legend align="center">Contact</legend>

            <?php if (isset($_GET["status"]) and $_GET["status"] == "thanks") { ?>
            <p>Thanks for the message, I promise to be in touch shortly!</p>
            <?php } if (isset($_GET["status"]) and $_GET["status"] == "spam") { ?>
            <p>Are you trying to spam me? Shame on you!</p>
            <?php } if (isset($_GET["status"]) and $_GET["status"] == "invalidEmail") { ?>
            <p>The email you provided seems to be invalid. Try again, bro.</p>
            <?php } if (isset($_GET["status"]) and $_GET["status"] == "incomplete") { ?>
            <p>Hey, you! You sent me an incomplete form. Shame on you! Try again.</p> <?php } ?> 
            <label for="name">Name:</label> <br />
            <input type="text" id="name" name="name"><br />
            <label for="email">Email:</label> <br />
            <input type="text" id="email" name="email"><br />
            <label for="subject">Subject:</label> <br />
            <input type="text" id="subject" name="subject"><br />
            <label style="display: none" for="address">Address:</label> <br />
            <input style="display: none" type="address" id="address" name="address"><br />
            <label for="essay">What's troubling you?</label><br />
            <textarea name="essay" rows="5" cols="25" id="essay"></textarea> <br /> <br />
            <button onClick = <?php $success = true; ?>type="submit">Submit</button>
            </fieldset>
            </form>
            </div>  
            
            <div class="col-lg-6">
            
            <img class="image-center img-responsive" src="images/leacontact.png" />
            </div>
            <div class="col-lg-1"></div>

            
        </div>

        </div>
    
<?php include('inc/footer.php'); ?>
