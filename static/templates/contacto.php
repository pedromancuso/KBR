<!-- Footer -->
			<footer id="footer">
				<div class="inner">
					<div class="content">
						<!--section>
							<h3>Accumsan montes viverra</h3>
							<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
						</section-->
						<section>
							<h4>Por favor envianos un mensaje y te contactaremos...</h4>
							<form id='contactform' name='contactform' action='index.php' method='POST' enctype='multipart/form-data'>
								<ul class="alt">
									<!--li><a href="#">Nombre</a></li-->
									<input class="inputs" placeholder="Nombre" type='text' id='name' name='name' 
										<?php if ($_SESSION['contacto']==3) {echo "value='".$_POST['name']."'";}else{echo "value=''";}?>/>
									<input class="inputs" placeholder="E-Mail" type='email' id='mail' name='mail' 
										<?php if ($_SESSION['contacto']==3) {echo "value='".$_POST['mail']."'";}else{echo "value=''";}?>/>
									<!--textarea class="textarea" placeholder="Mensaje"-->
										<?php if ($_SESSION['contacto']==3) {
											echo "<textarea class='textarea' id='msg' name='msg' placeholder='Mensaje'>".$_POST['msg']."</textarea>";
										}else{
											echo "<textarea class='textarea' id='msg' name='msg' placeholder='Mensaje'></textarea>";
										}?>
										<!--/textarea-->
									<!--li><a href="#">Correo</a></li>
									<li><a href="#">Telefono</a></li>
									<li><a href="#">Consulta</a></li-->
								</ul>
								<input type='submit' name='submit' id='enviar'  class='botoninformacion' value='Enviar'>
					<?php if ($_SESSION['contacto'] == 1) {
						echo "<div class='formanswer' id='formok' style='display: inline-block;'>Su Mensaje fue enviado correctamente!</div>";
						echo "<script type='text/javascript'>window.location.href ='index.php#contacto';</script>";
					}else if ($_SESSION['contacto'] == 2) {
						echo "<div class='formanswer' id='formnook' style='color: red;display: inline-block;'>Hubo un error! Intente nuevamente o contactese a contacto@kbr.com.ar</div>";
						echo "<script type='text/javascript'>window.location.href ='index.php#contacto';</script>";
					}else if ($_SESSION['contacto'] == 3) {
					echo "<div class='formanswer' id='formfaltandatos' style='color: red;display: inline-block;'>Hubo un error! Por favor ingrese todos los datos solicitados.</div>";
					echo "<script type='text/javascript'>window.location.href ='index.php#contacto';</script>";
					}
					?>
					
				</form>

















						</section>
						<section>
							<h4>Otros medios de Contacto...</h4>
							<ul class="plain">
								<!--li><a href="#"><i class="icon fa-twitter">&nbsp;</i>Twitter</a></li-->
								<li><a href="#"><i class="icon fa-facebook">&nbsp;</i>Facebook</a></li>
								<li><a href="#"><i class="icon fa-instagram">&nbsp;</i>Instagram</a></li>
								<li><a href="#"><i class="icon fa-mail-reply-all">&nbsp;</i>contacto@kbrtechgroup.com.ar</a></li>
								<li><a href="#"><i class="icon fa-phone">&nbsp;</i>+54 9 261 5042724</a></li>
								<!--li><a href="#"><i class="icon fa-github">&nbsp;</i>Github</a></li-->
							</ul>
						</section>
					</div>
					<div class="copyright">
						&copy; Realizado por <a href="https://unsplash.co">SandraApps</a>
					</div>
				</div>
			</footer>