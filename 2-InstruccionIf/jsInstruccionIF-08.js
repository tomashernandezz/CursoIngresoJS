/*
Tomás Hernández
IF 08
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value)
	estadoCivil = document.getElementById("estadoCivil").value

	if(edadIngresada > 18 && estadoCivil == "Soltero")
    {
        alert("Es soltero y no es menor");
    }
}//FIN DE LA FUNCIÓN