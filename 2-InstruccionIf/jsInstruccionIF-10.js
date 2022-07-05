/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Tomás Hernández
IF 10
*/
function mostrar()
{
    let num

    num = Math.round(Math.random() * (10 - 1)) + 1;

	if (num > 8) 
	{
		alert(num+", Excelente")
	}
	else
	{
		if(num < 9 && num >3){
			alert(num+", Aprobó")
		}
		else
		{
			alert(num+", Vamos, la próxima se puede")
		}
	}
}
//FIN DE LA FUNCIÓN