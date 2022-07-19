<?php
session_start();
$_SESSION['contacto'] = 0;
if ($_POST) {
	if (($_POST['name'] != "") && ($_POST['mail'] != "") && ($_POST['msg'] != "")) {
		$subject = $_POST['name'] . " Contactaste a KBR!";
		$headers = "From: kbr@hotmail.com" . "\r\n" . "CCO: pedromancuso@gmail.com";
		$send = mail($_POST['mail'],$subject,$_POST['msg'],$headers);
		if($send){
			$_SESSION['contacto'] = 1;
		}else{
			$_SESSION['contacto'] = 2;
		}
	}else if (($_POST['name'] == "") or ($_POST['mail'] == "") or ($_POST['msg'] == "")) {
		$_SESSION['contacto'] = 3;
	}
}

if (isset($_GET['e'])) {
	if ($_GET['e']='contacto') {
		echo "<script type='text/javascript'>window.location.href ='index.php#contacto';</script>";}
}
?>
<?php
echo 
"<!DOCTYPE html>
<html lang='en'>
	<head>
		<meta charset='utf-8'>

		<title>KBR Consultoría IT</title>
		<meta http-equiv='X-UA-Compatible' content='IE=Edge'>
		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1'>
		<meta name='keywords' content=''>
		<meta name='description' content=''>
		<link rel='shortcut icon' type='image/png' href='images/logo.png'/>
		<!-- animate -->
		<link rel='stylesheet' href='css/animate.min.css'>
		<!-- bootstrap -->
		<link rel='stylesheet' href='css/bootstrap.min.css'>
		<!-- font-awesome -->
		<link rel='stylesheet' href='css/font-awesome.min.css'>
		<!-- google font -->
		<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700,800' rel='stylesheet' type='text/css'>
		<!-- custom -->
		<link rel='stylesheet' href='css/style.css'>

	</head>";
?>	
<?php include './kbr.php';?>
<?php echo "<!-- Scripts -->
		<!-- jQuery -->
		<script src='js/jquery.js'></script>
		<!-- bootstrap -->
		<script src='js/bootstrap.min.js'></script>
		<!-- isotope -->
		<script src='js/isotope.js'></script>
		<!-- images loaded -->
   		<script src='js/imagesloaded.min.js'></script>
   		<!-- wow -->
		<script src='js/wow.min.js'></script>
		<!-- smoothScroll -->
		<script src='js/smoothscroll.js'></script>
		<!-- jquery flexslider -->
		<script src='js/jquery.flexslider.js'></script>
		<!-- custom -->
		<script src='js/custom.js'></script>

	</body>
</html>";?>