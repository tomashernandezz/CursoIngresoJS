/*
3)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna y de chancho,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso), origen (vacuno o chancho)
a)informar el peso de los sin hueso  y de los con hueso de la compra .
b)el nombre del corte más pesado de los de origen vacuno.
c)el nombre del corte más barato  de los de origen chancho.
Tomás Hernández
Ejercicio 03
*/
function mostrar()
{
	let nombreIngresado;
	let precioIngresado;
	let pesoIngresado;
	let tipoIngresado;
	let origenIngresado;
	let respuesta = "si";
	let mensaje;

	let acumuladorSinHueso = 0;
	let acumuladorConHueso = 0;

	let banderaMasPesadoVacuno = true;
	let nombreMasPesadoVacuno;
	let pesoMasPesadoVacuno;
	let banderaMasBaratoChancho = true;
	let nombreMasBaratoChancho;
	let precioMasBaratoChancho;

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese el nombre del corte.");

		precioIngresado = parseInt(prompt("Ingrese el precio del corte."));
		while(isNaN(precioIngresado) || precioIngresado < 1 || precioIngresado > 10000)
		{
			precioIngresado = parseInt(prompt("Error, ingrese un precio que esté entre 1$ y 10.000$"));
		}

		pesoIngresado = parseInt(prompt("Ingrese el peso del corte."));
		while(isNaN(pesoIngresado) || pesoIngresado < 1)
		{
			pesoIngresado = parseInt(prompt("Error, ingrese un peso válido."));
		}

		tipoIngresado = prompt("Ingrese el tipo de la carne");
		while(tipoIngresado != "sin hueso" && tipoIngresado != "con hueso")
		{
			tipoIngresado = prompt("Error, ingrese si la carne es con hueso o sin hueso.");
		}

		origenIngresado = prompt("Ingrese el origen de la carne");
		while(origenIngresado != "vacuna" && origenIngresado != "chancho")
		{
			origenIngresado = prompt("Ingrese un origen que sea vacuna o chancho");
		}

		respuesta = prompt("¿Desea seguir ingresando datos?");

		switch(tipoIngresado)
		{
			case "sin hueso":
				acumuladorSinHueso = acumuladorSinHueso + pesoIngresado;
			break;

			default:
				acumuladorConHueso = acumuladorConHueso + pesoIngresado;
			break;
		}

		switch(origenIngresado)
		{
			case "vacuna":
				if(banderaMasPesadoVacuno == true)
				{
					banderaMasPesadoVacuno = false;
					nombreMasPesadoVacuno = nombreIngresado;
					pesoMasPesadoVacuno = pesoIngresado;
				}
				else
				{
					if(pesoMasPesadoVacuno < pesoIngresado)
					{
						nombreMasPesadoVacuno = nombreIngresado;
						pesoMasPesadoVacuno = pesoIngresado;	
					}
				}
			break;

			default:
				if(banderaMasBaratoChancho == true)
				{
					banderaMasBaratoChancho = false;
					nombreMasBaratoChancho = nombreIngresado;
					precioMasBaratoChancho = precioIngresado;
				}
				else
				{
					if(precioMasBaratoChancho > precioIngresado)
					{
						nombreMasBaratoChancho = nombreIngresado;
						precioMasBaratoChancho = precioIngresado;
					}
				}
		}
	}

	mensaje = "El peso total de la carne sin hueso es de "+acumuladorSinHueso+"kg y el peso total de la carne con hueso es de "+acumuladorConHueso+"kg"; //A
	mensaje = mensaje + ". El nombre del corte de origen vacuno más pesado es "+nombreMasPesadoVacuno+ " y pesa "+pesoMasPesadoVacuno+"kg"; //B
	mensaje = mensaje + ". El nombre del corte de origen de chancho más barato es "+nombreMasBaratoChancho+ " y cuesta "+precioMasBaratoChancho+"$."; //C

	document.write(mensaje);
}
