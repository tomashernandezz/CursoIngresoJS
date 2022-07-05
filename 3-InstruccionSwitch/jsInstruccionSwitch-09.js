/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Tomás Hernández
Switch 09
*/
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let valor;
	let bonificacion;
	let resultadoBonificacion;
	let resultado;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	valor = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					bonificacion = 20
				break;
				
				case "Cataratas":
				case "Cordoba":
					bonificacion = -10
				break;

				case "Mar del plata":
					bonificacion = -20
				break;
			}
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					bonificacion = -20
				break;
				
				case "Cataratas":
				case "Cordoba":
					bonificacion = -10
				break;

				case "Mar del plata":
					bonificacion = 20
				break;
			}
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					bonificacion = 10
				break;
				
				case "Cordoba":
					bonificacion = 0
				break;
			}
				
	}



	resultadoBonificacion = (valor*bonificacion/100)+valor;
	alert("El precio final es $"+resultadoBonificacion)
}//FIN DE LA FUNCIÓN