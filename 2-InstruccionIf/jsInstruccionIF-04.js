/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
Tomás Hernández
IF 04
*/function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad <= 17 && edad >=13) 
	{
		alert("Usted es un adolescente")
	} else
	{
		alert("Usted no es un adolescente")
	}

}//FIN DE LA FUNCIÓN