<?php

	if(!isset($_POST['submit'])) { die('Der skete en fejl. Prøv igen senere.'); }

	if (strlen($_POST['name']) > 1) {
		$input_name = $_POST['name']; }
	else { die('Indtast venligst et navn.'); }

	if (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
		$input_email = $_POST['mail']; }
	else { die('Indtast venligst en e-mail adresse.'); }

	if (strlen($_POST['subject']) > 2) {
		$input_subject = $_POST['subject']; }
	else { die('Indtast venligst et emne.'); }

	if (strlen($_POST['message']) > 10) {
		$input_message = $_POST['message']; }
	else { die('Indtast venligst en besked på minimum 10 tegn.'); }


	require_once('smtp/class.phpmailer.php');
	require_once('smtp/class.smtp.php');

	$mail = new PHPMailer;

	$mail->isSMTP();
	$mail->Host = 'send.one.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'robot@tmptmp.dk'; // One.com email address
	$mail->Password = 'Tvk200799'; // One.com email password
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;

	$mail->setFrom('robot@tmptmp.dk', 'TMPTMP'); // One.com email address
	$mail->addAddress('thomasvknudsen@tmptmp.dk');
	$mail->addReplyTo($input_email, $input_name); // One.com email address

	$mail->isHTML(true);

	$mail->Subject = 'Ny besked fra tmptmp.dk';
	$mail->Body    = '
	<br><b>Name:</b> '.$input_name.'
	<br><b>Email:</b> '.$input_email.'
	<br><b>Subject:</b> '.$input_subject.'
	<br><br><b>Message:</b><br>'.$input_message.'
	<br><br><br><b>Sendt fra tmptmp.dk</b>';
	$mail->AltBody = 'Besked modtaget fra '.$input_name.', sendt fra tmptmp.dk';

	if(!$mail->send()) {
		die('Beskeden kunne ikke sendes. Prøv igen senere.');
	} else {
		header("Location: /kontakt.html"); //"Location: kontakt.html"
	}

?>
