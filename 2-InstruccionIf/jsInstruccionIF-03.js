/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
Tomás Hernández
IF 03
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad >= 18) 
	{
		alert("Usted es mayor de edad")
	} 
	if (edad < 18)
	{
		alert("Usted es menor de edad")
	}

}//FIN DE LA FUNCIÓN