/*
1)De 5  personas que ingresan al hospital se deben tomar y validar los siguientes datos.

nombre ,sexo, latidos por minuto, peso y si está vacunado o no contra el sarampión:
a)informar la cantidad de personas vacunadas y no vacunadas.
b)el peso promedio en total
c)el hombre con menos latidos por minuto y la mujer con más latidos por minuto
pedir datos por prompt y mostrar por document.write
Tomás Hernández
Ejercicio 01
*/

function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let latidosIngresados;
	let pesoIngresado;
	let estaVacunado;
	let banderaLatidosMujer = true;
	let nombreMujerMasLatidos;
	let nombreHombreMenosLatidos;
	let banderaLatidosHombre = true;
	let sumaVacunados = 0;
	let sumaNoVacunados = 0;
	let sumaPeso = 0;
	let promedioPeso;
	let hombreMenosLatidos;
	let mujerMasLatidos;
	let contador = 0;
	let mensaje;

	while(contador < 5)
	{
		nombreIngresado = prompt("Ingrese su nombre.");

		sexoIngresado = prompt("Ingrese su sexo.").toLowerCase();
		while(sexoIngresado != "m" && sexoIngresado != "f")
		{
			sexoIngresado = prompt("Error, ingrese un sexo que sea masculino (M) o femenino (F).").toLowerCase();
		}

		latidosIngresados = prompt("Ingrese los latidos por minuto.");
		while(isNaN(latidosIngresados) || latidosIngresados < 20 || latidosIngresados > 130)
		{
			latidosIngresados = prompt("Error, solo puede ingresar números en esta casilla. Ingrese sus latidos por minuto.");
		}

		pesoIngresado = parseInt(prompt("Ingrese su peso"));
		while(isNaN(pesoIngresado) || pesoIngresado < 30 || pesoIngresado > 250)
		{
			pesoIngresado = parseInt(prompt("Error, solo puede ingresar números en esta casilla. Ingrese su peso."));
		}

		estaVacunado = prompt("¿Está vacunado/a contra el sarampión?")
		while(estaVacunado != "si" && estaVacunado !="no")
		{
			estaVacunado = prompt("Error, solo puede ingresar si o no. ¿Está vacunado/a contra el sarampión?")
		}

		if (estaVacunado == "si")
		{
			sumaVacunados = sumaVacunados + 1;
		}
		else
		{
			sumaNoVacunados = sumaNoVacunados + 1;
		}

		if (sexoIngresado == "f")
		{
			if (banderaLatidosMujer == true)
			{
				banderaLatidosMujer = false;
				nombreMujerMasLatidos = nombreIngresado;
				mujerMasLatidos = latidosIngresados;
			}
			else
			{
				if (latidosIngresados > mujerMasLatidos)
				{
					nombreMujerMasLatidos = nombreIngresado;
					mujerMasLatidos = latidosIngresados;
				}
			}
		}
		else
		{
			if (banderaLatidosHombre == true)
			{
				banderaLatidosHombre = false;
				nombreHombreMenosLatidos = nombreIngresado;
				hombreMenosLatidos = latidosIngresados;
			}
			else
			{
				if (latidosIngresados < hombreMenosLatidos)
				{
					nombreHombreMenosLatidos = nombreIngresado;
					hombreMenosLatidos = latidosIngresados;
				}
			}
		}

		sumaPeso = sumaPeso + pesoIngresado;

		contador = contador + 1
	}

	promedioPeso = sumaPeso/5;

	mensaje = "La cantidad total de vacunados es de "+ sumaVacunados+ " y hay "+sumaNoVacunados + "no vacunados"; //A
	mensaje = mensaje + ". El peso promedio en total es de " + promedioPeso; //B
	mensaje = mensaje + ". El nombre del hombre con menos latidos es "+nombreMujerMasLatidos+" y sus latidos por minuto son "+hombreMenosLatidos; //C
	mensaje = mensaje + ". El nombre de la mujer con más latidos es "+ nombreHombreMenosLatidos+ " y sus latidos por minuto son "+ mujerMasLatidos; //C

	document.write(mensaje)
}