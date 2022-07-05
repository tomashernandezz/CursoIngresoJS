/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Tomás Hernández
Switch 08
*/function mostrar()
{
	let destinoIngresado;
	let mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Mar del plata":
			mensaje = "Calor"
		break;

		case "Bariloche":
			mensaje = "Frío"
		break;

		case "Ushuaia":
			mensaje = "Frío"
		break;

		case "Cataratas":
			mensaje = "Calor"
		break;
	}

	alert(mensaje)
}//FIN DE LA FUNCIÓN