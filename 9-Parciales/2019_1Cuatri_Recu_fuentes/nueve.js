/*
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad -13
c) El promedio de notas de los adolescentes. 13-17
d) El promedio de notas de los mayores +18
f) El promedio de notas por sexo masculino y femenino
Tomás Hernández
*/
function mostrar()
{

    let nombreIngresado;
    let edadIngresada;
    let sexoIngresado;
    let notaIngresada;
    let respuesta = "si";
    let varonAprobado = 0;
    let sumaMenores = 0;
    let sumaAdolescentes = 0;
    let sumaMayores = 0;
    let contadorMenores = 0;
    let contadorAdolescentes = 0;
    let contadorMayores = 0;
    let promedioMenores;
    let promedioAdolescentes;
    let promedioMayores;
    let notaVarones = 0;
    let notaMujeres = 0;
    let contadorVarones = 0;
    let contadorMujeres = 0;
    let promedioVarones;
    let promedioMujeres;


    while(respuesta == "si")
    {
        nombreIngresado = prompt("Ingrese un nombre.")

        edadIngresada = parseInt(prompt("Ingrese una edad"))
        while (edadIngresada < 1 || edadIngresada > 99)
        {
            edadIngresada = parseInt(prompt("Error, ingrese una edad de 1 a 99"))
        }

        sexoIngresado = prompt("Ingrese un sexo.")
        while(sexoIngresado !="m" && sexoIngresado !="f")
        {
            sexoIngresado = prompt("Error, ingrese un sexo que sea masculino o femenino.")
        }

        notaIngresada = parseInt(prompt("Ingrese una nota"))
        while(notaIngresada < 1 || notaIngresada > 10)
        {
            notaIngresada = parseInt(prompt("Error, ingrese una nota que vaya de 1 a 10"))
        }

        if (sexoIngresado == "m") // A
        {
            notaVarones = notaVarones+notaIngresada //D
            contadorVarones = contadorVarones+1

            if (notaIngresada > 3)
            {
                varonAprobado = varonAprobado+1
            }            
        }
        else //D
        {
            contadorMujeres = contadorMujeres+1
            notaMujeres = notaMujeres+notaIngresada
        }


        if (edadIngresada < 14) // B
        {
            sumaMenores = sumaMenores + notaIngresada;
            contadorMenores = contadorMenores + 1;
        }
        else
        {
            if (edadIngresada < 18) // C
            {
                sumaAdolescentes = sumaAdolescentes + notaIngresada;
                contadorAdolescentes = contadorAdolescentes + 1;
            }
            else // D
            {
                sumaMayores = sumaMayores + notaIngresada;
                contadorMayores = contadorMayores + 1;
            }
        }

        respuesta = prompt("¿Desea seguir ingresando alumnos?")
    }

    promedioMenores = sumaMenores/contadorMenores;
    promedioAdolescentes = sumaAdolescentes/contadorAdolescentes;
    promedioMayores = sumaMayores/contadorMayores;
    promedioMujeres = notaMujeres/contadorMujeres;
    promedioVarones = notaVarones/contadorVarones;


    mensaje = "A) La cantidad de varones aprobados es de "+ varonAprobado+" B) El promedio de notas de los menores de edad es de "+promedioMenores+" C) El promedio de notas de los adolescentes es de "+promedioAdolescentes+" D) El promedio de nota de los mayores es de "+promedioMayores+" E) El promedio de notas de las mujeres es de "+promedioMujeres+ " y el de los varones es de "+promedioVarones;
    alert(mensaje)
}
