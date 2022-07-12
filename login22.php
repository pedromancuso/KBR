<?php
	if(!isset($_SESSION)){session_start();}
	include 'credentials.php';
	$con = mysqli_connect ($phphost, $phpuser, $phppw) or die ("Problemas al conectar".mysqli_connect_error());
	mysqli_select_db ($con,$phpdb) or die ("Problemas al seleccionar".mysqli_error($con));
	$myObj = new \stdClass();
	if (!empty($_POST['user']) && !empty($_POST['pass'])){
		$usuario = $_POST["user"];
		$password = $_POST["pass"];
		$_SESSION['login22'] = "0";
		//if ($action=="login22") {
		$sql = "SELECT * FROM login22";
		if($result = mysqli_query($con, $sql)){
		    if(mysqli_num_rows($result)>0){
		        while($row = mysqli_fetch_array($result)){
		            if ($row['user'] == $usuario){
		            	$_SESSION['login22']="1";
		            	if ($row['pass'] == $password){
		            		$_SESSION['USER']=$usuario;
		            		echo "ok";
		            	}else{echo "Password Incorrecta";}
		            }
		        }
		        if ($_SESSION['login22']=="0"){echo "Usuario No Registrado";}
		        mysqli_free_result($result);// Free result set
		    }else{echo "No records matching your query were found.";}
		}else{echo "Imposible Ejecutar $sql".mysqli_error($con);}
		//}
	}else{echo "Complete todos los datos";}
	////////////////CLOSE////////////////////////////////////////////////////1
	mysqli_close($con);
?>