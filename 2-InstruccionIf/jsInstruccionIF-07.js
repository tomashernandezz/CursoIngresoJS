/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
Tomás Hernández
IF 07
*/
function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value)
	estadoCivil = document.getElementById("estadoCivil").value

	if(edad < 18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
}//FIN DE LA FUNCIÓN