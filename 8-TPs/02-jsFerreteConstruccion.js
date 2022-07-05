/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Tomás Hernández
TP 02
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre = perimetro*3;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    perimetro = parseInt(ancho+largo)*2;
    alambre = perimetro*3


    alert("La cantidad que se debe comprar de alambre es de "+alambre+"metros")
}
function Circulo () 
{
    let radio;
    let area;
    let alambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    area = radio*Math.PI;
    alambre = area*3;

    alert(alambre);
}
function Materiales () 
{
	let largo;
	let ancho;
	let superficie;
	let bolsaCemento;
	let bolsaCal;
	let mensaje;


	largo = parseInt(document.getElementById("txtIdLargo").value);
	ancho = parseInt(document.getElementById("txtIdAncho").value);

	superficie = largo * ancho;

	bolsaCemento = superficie * 2;

	bolsaCal = superficie * 3;


mensaje = "se necesitan comprar " + bolsaCemento;
mensaje = mensaje + " bolsaCemento y ";
mensaje = mensaje + bolsaCal + " bolsas de cal para el contrapiso";

alert(mensaje);
}