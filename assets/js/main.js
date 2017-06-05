window.addEventListener('scroll', function () {
  const distanciaVertical = window.pageYOffset || document.documentElement.scrollTop,
  header = document.getElementById('header');
  
  if (distanciaVertical > 60) {
    header.classList.add("non-opaque");
    document.getElementById("logo").classList.add("logo-rosa");
    document.getElementById("uno").classList.add("link-gray");
    document.getElementById("dos").classList.add("link-gray");
    document.getElementById("tres").classList.add("link-gray");
    document.getElementById("cuatro").classList.add("cuatro-borde");
    document.getElementById("cinco").classList.add("cinco-aparece");
  } else {
    header.classList.remove("non-opaque");
    document.getElementById("logo").classList.remove("logo-rosa");
    document.getElementById("uno").classList.remove("link-gray");
    document.getElementById("dos").classList.remove("link-gray");
    document.getElementById("tres").classList.remove("link-gray");
    document.getElementById("cuatro").classList.remove("cuatro-borde");
    document.getElementById("cinco").classList.remove("cinco-aparece");
  }
});


var inputfields = Array.from(document.getElementsByClassName("hide"));
	document.getElementById("input-number").addEventListener("click", function(event){
  		inputfields.forEach(function(el) {
  			el.classList.remove('hide');
  		})
  		event.preventDefault();
	});

/*-----Validaciones-----*/

document.getElementById("btn-send").addEventListener("click", function(){
//Llamamos los valores de los inputs
	event.preventDefault(); //previene que la página salte al inicio

	var inputNombre = document.getElementById("value-nombre");
	var inputEmail = document.getElementById("value-email");
	var inputFono = document.getElementById("value-fono");
	var inputTexto = document.getElementById("value-texto");

	

	if (validarNombre(inputNombre)){
		if(validarEmail(inputEmail)){
			if(validarFono(inputFono)){
				if (validarTexto(inputTexto)){
				alert("Gracias por ingresar su información de contacto");
				}
			}
		}
	}
})


var mensajito, mensajitoTexto;
//Funciones de validacion
function validarNombre(inputNombre) {   
	var letrasNombre = /^[A-Za-z]+$/;  
	if(inputNombre.value.match(letrasNombre)){  
		return true;  
	} else {  
		/*mensajito = document.createElement("div");
		mensajitoTexto = document.createTextNode("Please enter your name");
		mensajito.appendChild(mensajitoTexto);
		inputNombre.appendChild(mensajito); */
		inputNombre.value = ""; 
		alert("Please enter your name");
		inputNombre.focus();  
		return false;  
	}  
} 


function validarEmail(inputEmail){  
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputEmail.value.match(formatoCorreo)){  
		return true;  
	} else {  
		inputEmail.value = "";
		alert("Please enter your email address");  
		inputEmail.focus();  
		return false;  
	}  
} 

function validarFono(inputNumber){
	var fono = /^[0-9]{9,11}$/;
	if(inputNumber.value.match(fono)){
		inputNumber.value = "";
		return true;
	}else{
		inputNumber.value = "";
		alert("Please enter your phone number");  
		inputNumber.focus();  
		return false; 
	}
}

function validarTexto(inputTexto){
	var valueTexto = inputTexto.value.length;
	if(valueTexto == 0){
		inputTexto.value = "";
		alert("Please enter a message");
		inputTexto.focus();
		return false;
	} else{
		return true;
	}
}