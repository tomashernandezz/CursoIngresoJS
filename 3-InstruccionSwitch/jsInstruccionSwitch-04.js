/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
Tomás Hernández
Switch 04
*/function mostrar()
{
	//tomo el mes
	let mensaje;
	let mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Este mes tiene 31 días";
		break;

		case "Febrero":
			mensaje = "Este mes tiene 28 días";
		break;

		default:
			mensaje = "Este mes tiene 30 días";
		break;
	}
	
	alert(mensaje)



}//FIN DE LA FUNCIÓN Enero, marzo, mayo, julio, agosto, octubre y diciembre