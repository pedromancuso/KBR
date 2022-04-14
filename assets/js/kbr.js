function inicio(){
	document.getElementById("landing").style.display ="block";
	document.getElementById("informacion").style.display ="none";
	document.getElementById("servicios").style.display ="none";
	//$('body').className = "";
	document.body.className = "";
}
function informacion(){
	document.getElementById("landing").style.display ="none";
	document.getElementById("informacion").style.display ="block";
	document.getElementById("servicios").style.display ="none";
	document.body.className = "";
}
function servicios(){
	document.getElementById("landing").style.display ="none";
	document.getElementById("informacion").style.display ="none";
	document.getElementById("servicios").style.display ="block";
	document.body.className = "";
}

function consultoriatexto(){$("#consultoriatexto").toggle();}
function soporteittexto(){$("#soporteittexto").toggle();}
function telefoniaiptexto(){$("#telefoniaiptexto").toggle();}
function servidorestexto(){$("#servidorestexto").toggle();}
function redesytelecomunicacionestexto(){$("#redesytelecomunicacionestexto").toggle();}
function desarrollos(){$("#desarrollostexto").toggle();}