/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Tomás Hernández
While 04
*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado < 0 || numeroIngresado > 9) {
		numeroIngresado=prompt("Error, ingrese un número del 0 al 9");
	}

	document.getElementById("txtIdNumero").value=numeroIngresado;

	
}