"use strict"

let seleccionador = document.getElementById("sel1");
let resultado = document.getElementById("resultado");
let calcular = document.getElementById("calcular");
let baseTriangulo = document.getElementById("baseTriangulo");
let alturaTriangulo = document.getElementById("alturaTriangulo");
let ladoCuadrado1 = document.getElementById("ladoCuadrado");
let ladoCuadrado2 = document.getElementById("ladoCuadrado2");
let ladoPentagono = document.getElementById("ladoPentagono");
let apotemaPentagono = document.getElementById("apotemaPentagono");
let radioCirculo = document.getElementById("radioCirculo");
let hexagonoLado = document.getElementById("hexagonoLado");
let hexagonoApotema = document.getElementById("hexagonoApotema");
let radioCilindro = document.getElementById("radioCilindro");
let alturaCilindro = document.getElementById("alturaCilindro");
let radioCono = document.getElementById("radioCono");
let generatrizCono = document.getElementById("generatrizCono");
let ladoCubo = document.getElementById("ladoCubo");
let calcularTriangulo = document.getElementById("calcularTriangulo");
let resultadoTriangulo = document.getElementById("resultadoTriangulo");
let calcularCuadrado = document.getElementById("calcularCuadrado");
let resultadoCuadrado = document.getElementById("resultadoCuadrado");
let calcularPentagono = document.getElementById("calcularPentagono");
let resultadoPentagono = document.getElementById("resultadoPentagono");
let calcularHexagono = document.getElementById("calcularHexagono");
let resultadoHexagono = document.getElementById("resultadoHexagono");
let calcularCilindro = document.getElementById("calcularCilindro");
let resultadoCilindro = document.getElementById("resultadoCilindro");
let calcularCono = document.getElementById("calcularCono");
let resultadoCono = document.getElementById("resultadoCono");
let calcularCirculo = document.getElementById("calcularCirculo");
let resultadoCirculo = document.getElementById("resultadoCirculo");
let calcularCubo = document.getElementById("calcularCubo");
let resultadoCubo = document.getElementById("resultadoCubo");










window.onload = function(){



function validacionInput(parametro1,parametro2,nameResultado){


		if (parametro1 == "" || parametro2 =="" ) {

			nameResultado.style.color = "black";
			nameResultado.style.display = "inline-block";
			nameResultado.style.width = "131px";
			nameResultado.style.background = "white";
			nameResultado.style.border = "solid 1px black";
			nameResultado.innerHTML = "Ingrese el otro Valor";
		}

}

function validacion(valor1,valor2,operacion,nameResultado){


if(valor1 != "" && valor2 != ""){


			nameResultado.innerHTML = "";
			nameResultado.style.color = "black";
			nameResultado.style.display = "inline-block";
			nameResultado.style.width = "131px";
			nameResultado.style.background = "white";
			nameResultado.style.border = "solid 1px black";
			nameResultado.innerHTML = operacion ;

		}


}

calcularTriangulo.addEventListener("click",function(){




validacion(baseTriangulo.value,alturaTriangulo.value,(baseTriangulo.value*alturaTriangulo.value)/2 ,resultadoTriangulo);
validacionInput(baseTriangulo.value,alturaTriangulo.value,resultadoTriangulo)




});


calcularCuadrado.addEventListener("click",function(){


validacion(ladoCuadrado1.value,ladoCuadrado2.value,(ladoCuadrado1.value*ladoCuadrado2.value),resultadoCuadrado);
validacionInput(ladoCuadrado1.value,ladoCuadrado2.value,resultadoCuadrado)




});


calcularPentagono.addEventListener("click",function(){


validacion(ladoPentagono.value,apotemaPentagono.value,((5*ladoPentagono.value)*apotemaPentagono.value)/2,resultadoPentagono);
validacionInput(ladoPentagono.value,apotemaPentagono.value,resultadoPentagono)




})


calcularHexagono.addEventListener("click",function(){


validacion(hexagonoApotema.value,hexagonoLado.value,((6*hexagonoLado.value)*hexagonoApotema.value),resultadoHexagono);
validacionInput(hexagonoApotema.value,hexagonoLado.value,resultadoHexagono)




})

calcularCilindro.addEventListener("click",function(){


validacion(radioCilindro.value,alturaCilindro.value,2*3.14*radioCilindro.value*(radioCilindro.value+alturaCilindro.value),resultadoCilindro);
validacionInput(radioCilindro.value,alturaCilindro.value,resultadoCilindro)




})


calcularCono.addEventListener("click",function(){


validacion(radioCono.value,generatrizCono.value,3.14*radioCono.value*(generatrizCono.value+radioCono.value),resultadoCono);
validacionInput(radioCono.value,generatrizCono.value,resultadoCono)




})

calcularCirculo.addEventListener("click",function(){


validacion(radioCirculo.value,1,3.14*radioCirculo.value,resultadoCirculo);





})

calcularCubo.addEventListener("click",function(){


validacion(ladoCubo.value,1,6*(ladoCubo.value*ladoCubo.value),resultadoCubo);





})


}
