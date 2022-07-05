/*
Un aficionado a las cartas coleccionables desea organizar su colección, para esto necesita ingresar en un programa:
nombre, tipo de carta (validar monstruo, arma, mágica) y su cantidad. Además deberá Especificar su rareza (validar común, rara, legendaria)
,precio (validar entre $250 y $5000). dejar ingresar hasta que el usuario quiera e informar lo siguiente:
A) La cantidad de cartas de cada tipo.
B) De las cartas raras la que menos precio tiene y su nombre
C) El valor de la colección entera
D) Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)
*/
function mostrar()
{
    let nombreIngresado;
    let tipoIngresado;
    let cantidadIngresada;
    let rarezaIngresada;
    let precioIngresado;
    let respuesta = "si";
    let contadorMonstruo = 0;
    let contadorArma = 0;
    let contadorMagica = 0;
    let banderaRaraBarata = true;
    let precioMasBajo;
    let nombreMasBajo;
    let coleccionTotal = 0;
    let contadorComun = 0;
    let contadorRara = 0;
    let contadorLegendaria = 0;
    let coleccionCantidad = 0;
    let porcentajeComun;
    let porcentajeRara;
    let porcentajeLegendaria;


    while(respuesta =="si")
    {
        nombreIngresado = prompt("Ingrese su nombre.");

        tipoIngresado = prompt("Ingrese el tipo de carta.");
        while(tipoIngresado != "monstruo" && tipoIngresado != "arma" && tipoIngresado != "magica")
        {
            tipoIngresado = prompt("Error, ingrese un tipo de carta que sea, monstruo, arma o magica.");
        }

        cantidadIngresada = parseInt(prompt("Ingrese la cantidad de cartas."));
        while(isNaN(cantidadIngresada) || cantidadIngresada < 0)
        {
            cantidadIngresada = parseInt(prompt("Error, ingrese una cantidad de cartas validas"));
        }

        rarezaIngresada = prompt("Ingrese la rareza de la carta.");
        while(rarezaIngresada !="comun" && rarezaIngresada !="rara" && rarezaIngresada !="legendaria")
        {
            rarezaIngresada = prompt("Error, ingrese una rareza que sea común, rara o legendaria.");
        }

        precioIngresado = parseInt(prompt("Ingrese el precio de las cartas."));
        while(isNaN(precioIngresado) || precioIngresado < 250 || precioIngresado > 5000)
        {
            precioIngresado = parseInt(prompt("Ingrese un precio válido."));
        }

        respuesta = prompt("¿Desea seguir ingresando cartas?");

        switch(tipoIngresado) // A
        {
            case "monstruo":
                contadorMonstruo++;
            break;

            case "arma":
                contadorArma++;
            break;

            default:
                contadorMagica++;
            break;
        }


        coleccionTotal = coleccionTotal + precioIngresado; // C

        switch(rarezaIngresada)  // B y D
        {
            case "comun":
                contadorComun=contadorComun+cantidadIngresada;
            break;

            case "rara":
                contadorRara=contadorRara+cantidadIngresada;
                if(banderaRaraBarata == true)
            {
                banderaRaraBarata = false;
                precioMasBajo = precioIngresado;
                nombreMasBajo = nombreIngresado;
            }
            else
            {
                if (precioMasBajo > precioIngresado)
                {
                    precioMasBajo = precioIngresado;
                    nombreMasBajo = nombreIngresado;
                }
            }
            break;

            default:
                contadorLegendaria=contadorLegendaria+cantidadIngresada;
            break;
        }

        coleccionCantidad = coleccionCantidad+cantidadIngresada;
    }

    porcentajeComun = (contadorComun*100)/coleccionCantidad;
    porcentajeRara = (contadorRara*100)/coleccionCantidad;
    porcentajeLegendaria = (contadorLegendaria*100)/coleccionCantidad;
    
    mensaje = "La cantidad de cartas monstruo es de "+contadorMonstruo+", la de arma es de "+contadorArma+" y la de mágica de "+contadorMagica;
    mensaje = mensaje + ". El nombre de la carta con menor precio es "+nombreMasBajo+ " y su precio es de "+precioMasBajo;
    mensaje = mensaje + ". El valor total de la colección es de "+coleccionTotal;
    mensaje = mensaje + ". El porcentaje de cartas comunes es de "+porcentajeComun+"%, el porcentaje de cartas raras es de "+porcentajeRara+"% y el porcentaje de legendarias es de "+porcentajeLegendaria+"%";

    alert(mensaje);
}