/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
Tomás Hernández
IF 05
*/
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if (!(edad <= 17 && edad >=13)) 
	{
		alert("Usted no es un adolescente")
	}
}//FIN DE LA FUNCIÓN