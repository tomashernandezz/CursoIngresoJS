/*
1)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:
nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
informar:
a)el lugar más elegido
b)el nombre del titular que menos pago en temporada baja
c)el nombre del titular que mas pago en temporada alta
Tomás Hernández
Ejercicio 01
*/
function mostrar()
{
	let nombreIngresado;
	let temporadaIngresado;
	let diasIngresados;
	let importeIngresado;
	let lugarIngresado;
	let lugarMasElegido;
	let respuesta = "si";
	let mensaje;

	let banderaMenosPagoTemporadaBaja = true;
	let nombreMenosPagoTemporadaBaja;
	let importeMenosPagoTemporadaBaja;
	let banderaMasPagoTemporadaAlta = true;
	let nombreMasPagoTemporadaAlta;
	let importeMasPagoTemporadaAlta;

	let sumaPuertoMadryn = 0;
	let sumaVillaGessel = 0;
	let sumaCordoba = 0;

	while (respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese su nombre.");

		lugarIngresado = prompt("Ingrese el lugar que desea viajar.");
		while(lugarIngresado != "puerto madryn" && lugarIngresado != "villa gessel" && lugarIngresado != "cordoba")
		{
			lugarIngresado = prompt("Error, ingrese un lugar que sea puerto madryn, villa gessel o cordoba");
		}

		temporadaIngresado = prompt("Ingrese en la temporada que va a viajar.");
		while(temporadaIngresado != "alta" && temporadaIngresado !="baja")
		{
			temporadaIngresado = prompt("Error, ingrese una temporada que sea alta o baja.");
		}

		diasIngresados = parseInt(prompt("Ingrese la cantidad de días que va a viajar."));
		while(isNaN(diasIngresados) || diasIngresados < 1 || diasIngresados > 31)
		{
			diasIngresados = parseInt(prompt("Error, ingrese una cantidad de días que esté entre 1 y 31 días"));
		}

		importeIngresado = prompt("Ingrese el importe a pagar del viaje.");
		while(isNaN(importeIngresado) || importeIngresado < 1 || importeIngresado > 20000)
		{
			importeIngresado = prompt("Error, ingrese un importe que esté entre los 1$ y 20.000$");
		}

		respuesta = prompt("¿Desea seguir agregando información?")

		switch(lugarIngresado)
		{
			case "puerto madryn":
				sumaPuertoMadryn++;
			break;

			case "villa gessel":
				sumaVillaGessel++;
			break;

			default:
				sumaCordoba++;
			break;
		}

		switch (temporadaIngresado)
		{
			case "alta": //B
				if(banderaMasPagoTemporadaAlta == true)
				{
					banderaMasPagoTemporadaAlta = false;
					nombreMasPagoTemporadaAlta = nombreIngresado;
					importeMasPagoTemporadaAlta = importeIngresado;
				}
				else
				{
					if (importeMasPagoTemporadaAlta < importeIngresado)
					{
						nombreMasPagoTemporadaAlta = nombreIngresado;
						importeMasPagoTemporadaAlta = importeIngresado;
					}
				}
			break;

			default: //C
				if(banderaMenosPagoTemporadaBaja == true)
				{
					banderaMenosPagoTemporadaBaja = false;
					nombreMenosPagoTemporadaBaja = nombreIngresado;
					importeMenosPagoTemporadaBaja = importeIngresado;
				}
				else
				{
					if (importeMenosPagoTemporadaBaja > importeIngresado)
					{
						nombreMenosPagoTemporadaBaja = nombreIngresado;
						importeMenosPagoTemporadaBaja = importeIngresado;	
					}
				}
		}
	}

	if (sumaPuertoMadryn > sumaCordoba && sumaPuertoMadryn > sumaVillaGessel) //A
	{
		lugarMasElegido = "Puerto Madryn"
	}
	else
	{
		if (sumaCordoba > sumaPuertoMadryn && sumaCordoba > sumaVillaGessel)
		{
			lugarMasElegido = "Córdoba"
		}
		else
		{
			if (sumaVillaGessel > sumaPuertoMadryn && sumaVillaGessel > sumaCordoba)
			{
				lugarMasElegido = "Villa Gessel"
			}
			else
			{
				lugarMasElegido = "ERROR, al parecer, hay dos lugares que fueron elegidos la misma cantidad de veces"
			}
		}
	}

	mensaje = "El lugar más elegido es "+lugarMasElegido;
	mensaje = mensaje + ". El nombre de la persona que más pagó en temporada alta es "+nombreMasPagoTemporadaAlta+" y pagó "+importeMasPagoTemporadaAlta+"$";
	mensaje = mensaje + ". El nombre de la persona que menos pagó en temporada baja es "+nombreMenosPagoTemporadaBaja+" y pagó "+importeMenosPagoTemporadaBaja+"$";

	document.write(mensaje);
}