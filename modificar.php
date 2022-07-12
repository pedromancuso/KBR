<?php
	if(!isset($_SESSION)){session_start();}
	include 'credentials.php';
	$con = mysqli_connect ($phphost, $phpuser, $phppw) or die ("Problemas al conectar".mysqli_connect_error());
	mysqli_select_db ($con,$phpdb) or die ("Problemas al seleccionar".mysqli_error($con));
	$myObj = new \stdClass();
	
	if (!empty($_POST['uname']) && !empty($_POST['psw2'])){
		$usuario2 = $_POST["uname"];
		$password2 = $_POST["psw2"];
		//$_SESSION['login'] = "0";
		//if ($action=="login") {
			//echo $usuario, $password;
            $sql = "UPDATE login SET pass='$password2' WHERE user='$usuario2'";
            // $sql = "INSERT INTO login (user, pass)
            // VALUES ('$usuario2', '$password2')";

            if ($con->query($sql) === TRUE){
            echo "<script>console.log('Usuario modificado con éxito')</script>";
            } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
            }
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
	}else{echo "Complete todos los datos";}
	////////////////CLOSE////////////////////////////////////////////////////1
	mysqli_close($con);
	?>
