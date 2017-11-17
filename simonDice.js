"use strict";

window.onload = function(){


let empezar = document.getElementById("empezar");
let iteraciones = 1;
		let arraySimon = new Array();
		let timer=0;
		let turnoJugador = 0;
		let botonPulsado=0;


empezar.onclick = function(){

document.getElementById('empezar').style.display ='none';
simon();


}

document.getElementById('rojo').onclick=function(){


jugador("rojo");

}

document.getElementById('verde').onclick=function(){


jugador("verde");

}

document.getElementById('azul').onclick=function(){


jugador("azul");

}

document.getElementById('amarillo').onclick=function(){


jugador("amarillo");

}




	//renicia el juego
	function restart(){
		setTimeout(function(){location.reload();},400);
 
	}
 
	
 
		
 
 //Dependiendo el valor del timer como posicion del array
		function simonTurn(){
			if(turnoJugador==2){
			setTimeout(function(){

				if (arraySimon[timer]==0) {
					
							document.getElementById('rojo').style.backgroundColor = "#FF0000";
							setTimeout(function(){document.getElementById('rojo').style.backgroundColor = "#8A0808";},660);	
				}

				if (arraySimon[timer]==1) {
					
						document.getElementById('azul').style.backgroundColor = "#0000FF";
							setTimeout(function(){document.getElementById('azul').style.backgroundColor = "#0B0B61";},660);

				}
				 if (arraySimon[timer]==2) {

							document.getElementById('verde').style.backgroundColor = "#00FF00";
							setTimeout(function(){document.getElementById('verde').style.backgroundColor = "#0B610B";},660);
				}
				if (arraySimon[timer]==3) {

							document.getElementById('amarillo').style.backgroundColor = "#ff0";
							setTimeout(function(){document.getElementById('amarillo').style.backgroundColor = "#b1b11e";},660);
				}
				
				
				if(timer<iteraciones){
					timer++;
					simonTurn();
				}else{
					turnoJugador=1;
				}
			},710);
		}
		}
 

 	//agrega valores aleatorios al array y empieza el turno de simon 
 	function simon(){
 
			if(turnoJugador==0){
				turnoJugador=2;
				timer=0;
				//agrega un valor aleatorio al array
				arraySimon.push(Math.floor(Math.random() * (4)));
				simonTurn();
				iteraciones++;
			
			}
		}

		//Vincula cada boton con cada color
		function jugador(color){
 
			if(turnoJugador==1){
 
				if (color=='rojo') {
					document.getElementById('rojo').style.backgroundColor = "#FF0000";
							setTimeout(function(){document.getElementById('rojo').style.backgroundColor = "#8A0808";},150);	
						color=0;
				}
				
				if (color=='azul') {


						document.getElementById('azul').style.backgroundColor = "#0000FF";
						setTimeout(function(){document.getElementById('azul').style.backgroundColor = "#0B0B61";},150);
						color=1;
				}
					
				if (color=='verde') {
					document.getElementById('verde').style.backgroundColor = "#00FF00";
							setTimeout(function(){document.getElementById('verde').style.backgroundColor = "#0B610B";},150);
						color=2;
				}
						
				if (color=='amarillo') {
						color=3;
						document.getElementById('amarillo').style.backgroundColor = "#FFFF00";
						setTimeout(function(){document.getElementById('amarillo').style.backgroundColor = "#868A08";},150);	
				}
				
				//compara el color con la posicion del array simon y aumenta el valor del botonPulsado
				if(color==arraySimon[botonPulsado]){
 
					botonPulsado++;			
					if(botonPulsado>=arraySimon.length){
						turnoJugador=0;
						botonPulsado=0;
						setTimeout(simon(),950);
 
					}
				}else{
					alert('Juego Terminado!');
					setTimeout(restart(),800);
				}
 
			}
 
		}
 


}


