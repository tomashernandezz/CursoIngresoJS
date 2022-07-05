/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
Tomás Hernández
Switch 07
*/function mostrar()
{
	let destinoIngresado;
	let mensaje;
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
	{
		case "Mar del plata":
			mensaje = "Esta ciudad se encuentra al Este"
		break;

		case "Bariloche":
			mensaje = "Esta ciudad se encuentra al Oeste"
		break;

		case "Ushuaia":
			mensaje = "Esta ciudad se encuentra al Sur"
		break;

		case "Cataratas":
			mensaje = "Esta ciudad se encuentra al Norte"
		break;
	}

	alert(mensaje)
}//FIN DE LA FUNCIÓN