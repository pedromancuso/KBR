<?php
session_start();
$_SESSION['contacto'] = 0;
if ($_POST) {
	if (($_POST['name'] != "") && ($_POST['mail'] != "") && ($_POST['msg'] != "")) {
		$subject = $_POST['name'] . " Contactaste a KBR!";
		$headers = "From: kbr@hotmail.com" . "\r\n" . "CC: pedromancuso@gmail.com";
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
<!--
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
	<head>
		<title>KBR</title>
		<meta charset='utf-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
		<meta name='description' content='' />
		<link rel='shortcut icon' type='image/png' href='./images/img/kbr2.png'/>
		<meta name='keywords' content=''/>
		<link rel='stylesheet' href='assets/css/main.css' />
	</head>
<body class='is-preload'>";	
?>
<?php include './static/templates/encabezado.php';?>
<!--?php include './static/templates/informacion.php';?-->
<!--?php include './static/templates/servicios.php';?-->
<?php include './static/templates/contacto.php';?>
<?php echo "<!-- Scripts -->
			<script src='assets/js/jquery.min.js'></script>
			<script src='assets/js/kbr.js'></script>
			<script src='assets/js/browser.min.js'></script>
			<script src='assets/js/breakpoints.min.js'></script>
			<script src='assets/js/util.js'></script>
			<script src='assets/js/main.js'></script>

	</body>
</html>"; ?>