/*
El parcial se puede realizar en cualquier ejercicio de la guía o en los fuentes del parcial 2020

2)De 5  personas que ingresan al hospital se deben tomar y validar los siguientes datos.

nombre ,sexo,nacionalidad(extranjero o nativo) latidos por minuto, peso y si está vacunado o no contra el sarampión:
a)informar el porcentaje de personas extranjeras y nativas.
b)el peso promedio para los extranjeros
c)el nombre, sexo y nacionalidad del que tiene menos latidos por minuto
pedir datos por prompt y mostrar por document.write
Tomás Hernández
Ejercicio 02
*/
function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let nacionalidadIngresado;
	let latidosIngresados;
	let pesoIngresado;
	let vacunaIngresado;
	let pesoPromedio;
	let porcentajeExtranjero;
	let porcentajeNativo;
	let contador = 0;
	let mensaje;

	let acumuladorPeso = 0;
	let contadorExtranjero = 0;
	let contadorNativo = 0;

	let banderaMenosLatidos = true;
	let nombreMenosLatidos;
	let sexoMenosLatidos;
	let nacionalidadMenosLatidos;
	let menosLatidos;

	while(contador < 5)
	{
		nombreIngresado = prompt("Ingrese su nombre.");

		sexoIngresado = prompt("Ingrese su sexo.");
		while(sexoIngresado != "masculino" && sexoIngresado != "femenino")
		{
			sexoIngresado = prompt("Ingrese un sexo que sea masculino o femenino.");
		}

		nacionalidadIngresado = prompt("Ingrese si es nativo o extranjero.");
		while(nacionalidadIngresado != "extranjero" && nacionalidadIngresado !="nativo")
		{
			nacionalidadIngresado = prompt("Error, ingrese si es nativo o extranjero.");
		}

		latidosIngresados = parseInt(prompt("Ingrese sus latidos por minuto."));
		while(isNaN(latidosIngresados) || latidosIngresados < 1 || latidosIngresados > 170)
		{
			latidosIngresados = parseInt(prompt("Error, ingrese unos latidos que estén entre 1 y 170"));
		}

		pesoIngresado = parseInt(prompt("Ingrese su peso;"));
		while(isNaN(pesoIngresado) || pesoIngresado < 1 || latidosIngresados > 300)
		{
			latidosIngresados = parseInt(prompt("Error, ingrese un peso que esté entre 1 y 300"));
		}

		vacunaIngresado = prompt("¿Está vacunado?");
		while(vacunaIngresado != "si" && vacunaIngresado !="no")
		{
			vacunaIngresado = prompt("Error, si está vacunado ponga si, si no lo está, ponga no.");
		}

		switch(nacionalidadIngresado) //B
		{
			case "extranjero":
				acumuladorPeso = acumuladorPeso + pesoIngresado;
				contadorExtranjero++;
			break;

			default:
				contadorNativo++;
			break;
		}

		if(banderaMenosLatidos == true)			//C
		{
			banderaMenosLatidos = false;
			nombreMenosLatidos = nombreIngresado;
			sexoMenosLatidos = sexoIngresado;
			nacionalidadMenosLatidos = nacionalidadIngresado;
			menosLatidos = latidosIngresados;
		}
		else
		{
			if(menosLatidos > latidosIngresados)
			{
				nombreMenosLatidos = nombreIngresado;
				sexoMenosLatidos = sexoIngresado;
				nacionalidadMenosLatidos = nacionalidadIngresado;
				menosLatidos = latidosIngresados;
			}
		}

		contador++;
	}

	porcentajeExtranjero = (contadorExtranjero*100)/5;
	porcentajeNativo = (contadorNativo*100)/5;				//A

	pesoPromedio = acumuladorPeso/contadorExtranjero; //B

	mensaje = "El porcentaje de extranjeros es "+porcentajeExtranjero+"%. Y el porcentaje de nativos es "+porcentajeNativo+"%"; //A
	mensaje = mensaje + ". El peso promedio de los extranjeros es "+pesoPromedio; //B
	mensaje = mensaje + ". El nombre de la persona con menos latidos es "+nombreMenosLatidos+ ", es "+sexoMenosLatidos+", es "+nacionalidadMenosLatidos+" y tiene "+menosLatidos+" latidos por minuto.";

	document.write(mensaje);
}