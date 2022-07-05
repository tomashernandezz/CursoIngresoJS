function mostrar()
{
    let precio;
    let descuento;
    let porcentaje;
    let preciofinal;

    precio = parseInt(prompt("Ingrese el precio"));
    descuento = parseInt(prompt("Ingrese el descuento"));

    porcentaje = precio*descuento/100;

    preciofinal = precio-porcentaje;

    document.getElementById("elPrecioFinal").value = preciofinal;
}
