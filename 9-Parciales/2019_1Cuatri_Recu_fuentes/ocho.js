/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
Tomás Hernández
*/
function mostrar()
{
    let colorIngresado;
    let precioIngresado;
    let respuesta = "si";
    let banderaCaro = true;
    let masCaro;
    let colorCaro;
    let totalVehiculos = 0;
    let contadorVehiculos = 0;
    let promedioVehiculos;
    let vehiculosRojos = 0;
    let vehiculosMayoresRojos = 0;
    let vehiculosMenores = 0;
    let mensaje;

    while (respuesta == "si")
    {
        colorIngresado = prompt("Ingrese el color del vehículo.");
        while (colorIngresado != "verde" && colorIngresado != "rojo" && colorIngresado != "amarillo");
        {
            colorIngresado = prompt("Error! Ingrese un color que sea, rojo, amarillo o verde.");
        }

        precioIngresado = parseInt(prompt("Ingrese el valor del vehículo."));
        while (precioIngresado < 1 || precioIngresado > 10000)
        {
            precioIngresado = parseInt(prompt("Error! Ingrese un valor entre 1 y 10000"));
        }

        if (colorIngresado=="rojo")
        {
            vehiculosRojos = vehiculosRojos + 1; // A
            if(precioIngresado >= 5000) // B
            {
                vehiculosMayoresRojos = vehiculosMayoresRojos + 1;
            }
        }

        if (precioIngresado < 5000)
        {
            vehiculosMenores = vehiculosMenores + 1; // C
        }



        if (banderaCaro = true) // E
        {
            banderaCaro = false;
            colorCaro = colorIngresado;
            masCaro = precioIngresado;
        }
        else
        {
            if (precioIngresado > masCaro)
            {
                colorCaro = colorIngresado;
                masCaro = precioIngresado;
            }
        }

        totalVehiculos = totalVehiculos+precioIngresado; // D
        contadorVehiculos = contadorVehiculos+1;

        respuesta = prompt("¿Desea ingresar más vehículos?");
    }

    promedioVehiculos = totalVehiculos/contadorVehiculos; // D

    mensaje = "A) La cantidad de vehículos rojos totales es de "+vehiculosRojos+" B) La cantidad de vehículos rojos mayores a 5000 es de "+vehiculosMayoresRojos+" C) La cantidad de vehículos menores a 5000 es de "+vehiculosMenores+" D) El promedio de todos los vehículos es de "+promedioVehiculos+" E) El precio más caro es de "+masCaro+ " y su color es "+colorCaro;
    document.write(mensaje);
}