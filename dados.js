"use strict";

window.onload = function(){
	let tirar = document.getElementById("tirar");
	let cantidad = document.getElementById("cantidad");
	let contenedor = document.getElementById("contenedor");

	function random (minimo,maximo){
		let rnd = Math.random () * (maximo-minimo);
		return Math.round(rnd) + minimo ;
	}

	tirar.addEventListener("click" , function(){
		contenedor.innerHTML = "";
		for(let i=0;i<=cantidad.value-1;i++){
		 let dado = document.createElement("img");
		 dado.src="imagenesDados/" +"dado"+random(1,6)+".png";
		 contenedor.appendChild(dado);
		}
	});
}
	/*



}















	tirar.addEventListener("click" , function(){


	 
	for(let i=0;i<=5;i++){




	aleatorios.push(random(1,6));
	contenedor.removeChild(dado);
	console.log(aleatorios[i]);

	if(cantidad.value == 2) {

		
	  
	  dado = document.createElement("img");
	 dado.src="imagenesDados/" +"dado"+aleatorios[i]+".png";
	 contenedor.appendChild(dado);


	 


	}}
	})*/




/*window.onload = function() {

let lista = document.getElementById("lista");
let aleatorios = [];

function random (minimo,maximo){
	
	let rnd = Math.random () * (maximo-minimo);
	return Math.round(rnd) + minimo ;


}


	
}

function limpiarLista(){


lista.innerHTML = "";

}


function generarnumeros(minimo,maximo,cantidad){


limpiarLista();
for (let i = 0 ; i < aleatorios.length ; i ++) {

aleatorios.push(random(1,10))

} ;


}

function mostrarLista(){


limpiarLista();
for (let i = 0 ; i < aleatorios.length ; i ++) {

aleatorios.push(random(1,10))

} */



