function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad >= 18) 
	{
		alert("Usted es mayor de edad")
	} 
	else{
		if(edad > 12 && edad < 18)
		{
			alert("Usted es un adolescente")
		} 
		else
		{
			alert("Usted es un niño")
		}
	}


}//FIN DE LA FUNCIÓN