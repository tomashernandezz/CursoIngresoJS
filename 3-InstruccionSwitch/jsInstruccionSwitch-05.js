/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
Tomás Hernández
Switch 05
*/
function mostrar()
{
	//tomo la hora
	let mensaje;
	let horaDelDia = document.getElementById("txtIdHora").value;

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana."
		break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN