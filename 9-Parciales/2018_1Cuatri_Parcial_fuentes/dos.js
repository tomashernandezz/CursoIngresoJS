function mostrar()
{
    let nombre;
    let localidad;
    let mensaje;

    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    mensaje = "Usted es "+nombre+" y vive en la localidad de "+localidad;

    alert(mensaje);
}
