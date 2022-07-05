
function mostrar()
{
    
    let ancho;
    let alto;
    let perimetro;
    let mensaje;

    ancho = parseInt(prompt("Ingrese el ancho del rectángulo"));
    alto = parseInt(prompt("Ingrese el alto del rectángulo"));

    perimetro = ancho*2+alto*2

    mensaje = "El perímetro del rectángulo es de "+perimetro+"cm"

    alert(mensaje);
}