/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
Tomás Hernández
IF 02
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) 
	{
		alert("Usted es mayor de edad")
	}
	

}//FIN DE LA FUNCIÓN