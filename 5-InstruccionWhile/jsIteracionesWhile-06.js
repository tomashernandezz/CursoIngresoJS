/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
Tomás Hernández
While 06
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while (contador < 5) {
		numeroIngresado = parseInt(prompt("Ingrese 5 números"));
		contador = contador+1;
		acumulador = acumulador+numeroIngresado;
	}

	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN