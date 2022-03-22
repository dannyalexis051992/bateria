// //Declaracion de una funcion a la que quiero
// //llamar cuando hagan click sobre el h1
// //Antes usaba onclick="manejarClick();"
// //en el html
// //ahora consigo lo mismo activando un
// //addEventListener en el h1
//
// function manejarClick(){
//   alert("Me has hecho click.");
// }
//
// document.querySelector("h1").addEventListener("click",manejarClick);
//
// document.querySelector("h1")addEventListener("mouseout",function noTeVayas(){
//                                                 alert("porfa, no te quites de encima mio.");
//                                               })

var arrayConLosBotones=document.querySelectorAll(".caja");
var numeroDeBotones=arrayConLosBotones.length;

for(var i=0;i<numeroDeBotones;i++){
  arrayConLosBotones[i].addEventListener("click", function tocarTOM1(){
    // var tom1 = new Audio("sonidos/tom-1.mp3");
    // tom1.play();

    //alert(this.innerHTML);
    //extraemos la letra del boton
    //para saber que sonido reproducir

var letraBoton=this.innerHTML;
//ahora uso la letra en un swich
//para reflejar los 7 casos posibles
switch(letraBoton) {
case "w": var tom1 = new Audio("sonidos/tom-1.mp3");
          tom1.play();
          break;
case "a": var tom2 = new Audio("sonidos/tom-2.mp3");
          tom2.play();
          break;
case "s": var tom3 = new Audio("sonidos/tom-3.mp3");
          tom3.play();
          break;
case "d": var tom4 = new Audio("sonidos/tom-4.mp3");
          tom4.play();
          break;
case "j": var tom5 = new Audio("sonidos/snare.mp3");
          tom5.play();
          break;
case "k": var tom6 = new Audio("sonidos/crash.mp3");
          tom6.play();
          break;
case "l": var tom7 = new Audio("sonidos/kick-bass.mp3");
          tom7.play();
          break;




}
  });

}
