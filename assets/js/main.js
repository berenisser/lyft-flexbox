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


document.getElementById("btn-driver").addEventListener("click", function(){
//Llamamos los valores de los inputs
	event.preventDefault(); //previene que la página salte al inicio

	var inputFono = document.getElementById("input-number");
	var inputNombre = document.getElementById("input-name");
	var inputEmail = document.getElementById("input-email");
	var inputCity = document.getElementById("city");


	validarFono(inputFono);
	validarNombre(inputNombre);
	validarEmail(inputEmail);
	validarCity(inputCity);

})

function validarFono(inputFono){
	var fono = /^[0-9]{9,11}$/;
	if(inputFono.value.match(fono)){
		inputFono.value = "";
		return true;
	}else{
		document.getElementById("error1").classList.remove("ocultar");
		inputFono.classList.add("border-pink");
	}
}

function validarNombre(inputNombre) {   
	var letrasNombre = /^[A-Za-z]+$/;  
	if(inputNombre.value.match(letrasNombre)){  
		return true;  
	} else {  
		document.getElementById("error2").classList.remove("ocultar");
		inputNombre.classList.add("border-pink");
	}  
} 


function validarEmail(inputEmail){  
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputEmail.value.match(formatoCorreo)){  
		return true;  
	} else {  
		document.getElementById("error3").classList.remove("ocultar");
		inputEmail.classList.add("border-pink");
	}  
} 


function validarCity(inputCity) {   
	var letrasNombre = /^[A-Za-z]+$/;  
	if(inputCity.value.match(letrasNombre)){  
		return true;  
	} else {  
		document.getElementById("error4").classList.remove("ocultar");
		inputCity.classList.add("border-pink");
	}  
} 