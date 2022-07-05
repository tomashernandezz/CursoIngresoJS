/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Tomás Hernández
While 07
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	while (respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese los números que quiera."));
		contador = contador+1;
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("¿Quiere seguir ingresando números?")
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN