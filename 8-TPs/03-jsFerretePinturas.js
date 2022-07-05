/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Tomás Hernández
TP 03
*/
function FahrenheitCentigrados () 
{
	let centigrados;
    let fahrenheit;
    let mensaje;

    fahrenheit=txtIdTemperatura.value;
    fahrenheit= parseFloat(fahrenheit);
    centigrados=(fahrenheit - 32) * 5/9;
    mensaje = fahrenheit + " grados fahrenheit son " + centigrados . toFixed (2) + " grados centigrados ";

    alert(mensaje)
}

function CentigradosFahrenheit () 
{
    let centigrados;
    let fahrenheit;
    let mensaje;

    centigrados= txtIdTemperatura.value;
    centigrados= parseFloat(centigrados);
    fahrenheit= (centigrados * 9 / 5 ) + 32
    mensaje= centigrados + " grados centigrados son " + fahrenheit . toFixed (2) + " grados fahrenheit "

    alert (mensaje)
}
