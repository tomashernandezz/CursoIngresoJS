/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/
function mostrar()
{    
    let centimetrosIngresados;
    let sexoIngresado;
    let alturaTotal = 0;
    let contadorAltura = 0;
    let promedioTotal;
    let banderaMasBaja = true;
    let alturaMasBaja;
    let sexoMasBaja;
    let contadorMujeresAlta = 0;
    let respuesta = "si"
    let mensaje;

    while(respuesta == "si")
    {

        centimetrosIngresados = parseInt(prompt("Ingrese su altura en centímetros."));
        while(centimetrosIngresados < 0 || centimetrosIngresados > 250 || isNaN(centimetrosIngresados))
        {
            centimetrosIngresados = parseInt(prompt("Error, ingrese una altura entre 0 y 250cm"));
        }

        sexoIngresado = prompt("Ingrese su sexo.").toLowerCase();
        while(sexoIngresado != "masculino" && sexoIngresado != "femenino")
        {
            sexoIngresado = prompt("Error, ingrese un sexo que sea masculino o femenino.").toLowerCase();
        }

        alturaTotal = alturaTotal + centimetrosIngresados; //A
        contadorAltura++;

        if (banderaMasBaja == true)  //B
        {
            banderaMasBaja = false;
            alturaMasBaja = centimetrosIngresados;
            sexoMasBaja = sexoIngresado;
        }
        else
        {
            if(alturaMasBaja > centimetrosIngresados)
            {
                alturaMasBaja = centimetrosIngresados;
                sexoMasBaja = sexoIngresado;
            }
        }

        if(sexoIngresado == "femenino" && centimetrosIngresados > 189)
        {
            contadorMujeresAlta++;
        }

        respuesta = prompt("¿Desea seguir añadiendo datos?").toLowerCase();
    }

    promedioTotal = alturaTotal/contadorAltura;  //A

    mensaje = "El promedio total de las alturas es "+promedioTotal+"cm"; // A
    mensaje = mensaje + ". La altura más baja es de "+alturaMasBaja+" y su sexo es "+sexoMasBaja; // B
    mensaje = mensaje + ". La cantidad de mujeres que superan los 190cm es de "+contadorMujeresAlta // C 

    alert(mensaje);
}