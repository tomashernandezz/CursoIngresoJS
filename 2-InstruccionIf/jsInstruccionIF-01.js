/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
Tomás Hernández
IF 01
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad == 15) 
	{
		alert("Niña bonita")
	}

}//FIN DE LA FUNCIÓN