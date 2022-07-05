/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Tomás Hernández
While 05
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m") 
	{
		sexoIngresado = prompt("Error, ingrese algún sexo válido.")
	}

	switch (sexoIngresado) 
	{
		case "f":
			sexoIngresado = "Bienvenida"	
		break;
	
		case "m":
			sexoIngresado = "Bienvenido"
		break;
	}

	txtIdSexo.value=sexoIngresado;
}