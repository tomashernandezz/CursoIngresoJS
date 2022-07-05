/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
Tomás Hernández
IF 09
*/
function mostrar()
{
    let num
    num = Math.round(Math.random() * (10 - 1)) + 1;

    alert(num);

}//FIN DE LA FUNCIÓN