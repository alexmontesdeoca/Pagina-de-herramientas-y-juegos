"use strict"

let casilla = document.getElementsByName("casilla");
let jugador = 'o';
let reniciar = document.getElementById("reniciar");


function empate(){
	alert("Empate");
	location.reload();

}

function validarEmpate(){
	for(let i = 0 ; i < casilla.length ; i ++){
		if(casilla[i].dataset.value === ""){
			return;
		}
	}
	empate();
}


function validarTablero(){
	return validar(0,1,2) ||
			validar(0,3,6) ||
			validar(0,4,8) ||
			validar(1,4,7) ||
			validar(2,5,8) ||
			validar(3,4,5) ||
			validar(6,7,8) ||
			validar(2,4,6) ||
			validarEmpate();
}

function cambiarJugador(){
	if(jugador == 'o') {
		jugador = 'x';
	} else if (jugador == "x") {
		jugador = "o";
	}
}

function jugarCasilla(casillaNumero) {
	if (casilla[casillaNumero].dataset.value != ""){
		return;
	} else {
		casilla[casillaNumero].dataset.value = jugador;
		cambiarJugador();
		validarTablero();
	}

}

function validarCasillas(casilla1,casilla2,casilla3,valor){
	return casilla[casilla1].dataset.value == valor && casilla[casilla2].dataset.value == valor && casilla[casilla3].dataset.value == valor;

}

function validar(casilla1,casilla2,casilla3){

	if (validarCasillas(casilla1,casilla2,casilla3,"x")) {
		alert("Ganador jugador X");
		location.reload();

		return true;

	} else if (validarCasillas(casilla1,casilla2,casilla3,"o")) {
		alert("Ganador jugador O");
		location.reload();

		return true;

	}
	return false;
}

for (let i = 0 ; i < casilla.length; i++) {
	casilla[i].addEventListener("click" , function(){jugarCasilla(i)});
	casilla[i].dataset.value = "";

	reniciar.onclick = function (){

	casilla[0].dataset.value = "";
	casilla[1].dataset.value = "";
	casilla[2].dataset.value = "";
	casilla[3].dataset.value = "";
	casilla[4].dataset.value = "";
	casilla[5].dataset.value = "";
	casilla[6].dataset.value = "";
	casilla[7].dataset.value = "";
	casilla[8].dataset.value = "";




	}

}
