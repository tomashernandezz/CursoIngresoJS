/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),cantidad de días que durará el viaje.
informar:
a)el lugar más elegido 
b)el nombre del titular que más días viaje.
c)el promedio de días por viaje, de la temporada verano.
Tomás Hernández
Ejercicio 03
*/
function mostrar()
{
	let nombreIngresado;
	let lugarIngresado;
	let temporadaIngresada;
	let diasIngresados;
	let banderaMasDias = true;
	let titularQueMasViajo;
	let diasQueViajo;
	let sumaDias = 0;
	let contadorDias = 0;
	let promedioDias;
	let sumaPuertoMadryn = 0;
	let sumaCordoba = 0;
	let sumaVillaGessel = 0;
	let lugarMasElegido;
	let mensaje;
	let respuesta = "si";

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese el nombre del titular.");

		lugarIngresado = prompt("Ingrese el lugar al que desea viajar.").toLowerCase();
		while(lugarIngresado !="puerto madryn" && lugarIngresado !="villa gessel" && lugarIngresado !="cordoba")
		{
			lugarIngresado = prompt("Error, ingrese un lugar que sea, Puerto Madryn, Villa Gessel o Cordoba.")
		}

		temporadaIngresada = prompt("Ingrese en la temporada que sea viajar.").toLowerCase()
		while(temporadaIngresada !="otoño" && temporadaIngresada !="invierno" && temporadaIngresada !="primavera" && temporadaIngresada !="verano")
		{
			temporadaIngresada = prompt("Error, ingrese una temporada que sea, verano, otoño, invierno o primavera").toLowerCase()
		}

		diasIngresados = parseInt(prompt("Ingrese la cantidad de días que va a durar su estadía"))
		while(isNaN(diasIngresados))
		{
			diasIngresados = parseInt(prompt("Error, en esta casilla solo se puede ingresar números. Ingrese la cantidad de días que va a durar su estadía"))
		}

		switch(lugarIngresado)
		{
			case "cordoba":
				sumaCordoba++;
			break;

			case "puerto madryn":
				sumaPuertoMadryn++;
			break;

			default:
				sumaVillaGessel++;
			break;
		}

		if (banderaMasDias == true)  //B
		{
			banderaMasDias = false;
			titularQueMasViajo = nombreIngresado;
			diasQueViajo = diasIngresados;
		}
		else
		{
			if(diasQueViajo < diasIngresados)
			{
				titularQueMasViajo = nombreIngresado;
				diasQueViajo = diasIngresados;
			}
		}

		if (temporadaIngresada == "verano")  //C
		{
			sumaDias = sumaDias + diasIngresados;
			contadorDias = contadorDias + 1;
		}
		
		respuesta = prompt("¿Desea seguir ingresando datos?")
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

	promedioDias = sumaDias / contadorDias;

	mensaje = "El lugar más elegido fue "+lugarMasElegido;
	mensaje = mensaje + ". El titular que más días viajó es "+titularQueMasViajo+ " y viajó "+diasQueViajo+" días";
	mensaje = mensaje + ". El promedio de días por viaje en verano es de "+ promedioDias;

	document.write(mensaje)
}
