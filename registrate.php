<?php
if (!isset($_SESSION)) {
	session_start();
}
include 'credentials.php';
$con = mysqli_connect($phphost, $phpuser, $phppw) or die("Problemas al conectar" . mysqli_connect_error());
mysqli_select_db($con, $phpdb) or die("Problemas al seleccionar" . mysqli_error($con));
$myObj = new \stdClass();

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
		

	</head>
	<body>
	<a href='#registrarse'></a>
	<div id='registrarse'></div>
	</body>";
?>	 
<?php include './registratedatos.html'; ?>
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
		<!--<script src='js/custom.js'></script>-->

	</body>
</html>"; ?>
<?php
$regas = $_POST['trate'];
//if ($regas == "1") {
echo "<script>console.log('$regas' + ';' + 'ok')</script>";
if (!empty($_POST['fname']) && !empty($_POST['pname'])) {
	$usuario2 = $_POST["fname"];
	echo "<script>console.log('$usuario2')</script>";
	$password2 = $_POST["pname"];
	echo "<script>console.log('$password2')</script>";
	$password3 = $_POST["pname2"];
	//$_SESSION['login'] = "0";
	//if ($action=="login") {
	//echo $usuario, $password;

	if ($password2 === $password3) {
		$sql = "INSERT INTO login22 (user, pass)
            	VALUES ('$usuario2', '$password2')";

		if ($con->query($sql) === TRUE) {
			echo "<script>console.log('Usuario guardado con éxito')</script>";
		} else {
			echo "Error: " . $sql . "<br>" . $con->error;
		}
	} else {
		echo "<script>window.alert('Las contraseñas son distintas')</script>";
		//en caso de que no funcione lo de arriba volver a escribir lo mismo q en linea 84
	}
	// }

	// function modif()
	// {
	// 	include 'credentials.php';
	// 	$con = mysqli_connect($phphost, $phpuser, $phppw) or die("Problemas al conectar" . mysqli_connect_error());
	// 	$usuario2 = $_POST["uname"];
	// 	$password2 = $_POST["psw2"];
	// 	$sql = "UPDATE login SET pass='$password2' WHERE id=9";
	//  $sql = "INSERT INTO login (user, pass)
	// 	// VALUES ('$usuario2', '$password2')";

	// 	if ($con->query($sql) === TRUE) {
	// 		echo "<script>console.log('Usuario modificado con éxito')</script>";
	// 	} else {
	// 		echo "Error: " . $sql . "<br>" . $con->error;
	// 	}
	// }


	// $sql = "SELECT * FROM login";
	// if($result = mysqli_query($con, $sql)){
	//     if(mysqli_num_rows($result)>0){
	//         while($row = mysqli_fetch_array($result)){
	//             if ($row['user'] == $usuario){
	//             	$_SESSION['login']="1";
	//             	if ($row['pass'] == $password){
	//             		$_SESSION['USER']=$usuario;
	//             		echo "ok";
	//             	}else{echo "Password Incorrecta";}
	//             }
	//         }
	//         if ($_SESSION['login']=="0"){echo "Usuario No Registrado";}
	//         mysqli_free_result($result);// Free result set
	//     }else{echo "No records matching your query were found.";}
	// }else{echo "Imposible Ejecutar $sql".mysqli_error($con);}
	//}
	// desconmentar las dos lineas de abajo 14/6/22
	// } else {
	// 	echo "Complete todos los datos";
}
//} //else {
//echo "<script>console.log('and again')</script>";
//}
////////////////CLOSE////////////////////////////////////////////////////1
mysqli_close($con);
?>
