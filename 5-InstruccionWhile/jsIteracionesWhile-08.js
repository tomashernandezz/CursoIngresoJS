/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese los números que quiera."));
		if (numeroIngresado > 0) {
			contador = contador+1;
			sumaPositivos = sumaPositivos + numeroIngresado;
		} else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado
		}
		respuesta = prompt("¿Quiere seguir ingresando números?")
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN