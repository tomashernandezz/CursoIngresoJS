/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Tomás Hernández
TP 01
*/
function Sumar () 
{
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let suma = precio1+precio2+precio3;
    
    alert("La suma total de los productos es de $"+suma);
}
function Promedio () 
{
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let suma = precio1+precio2+precio3;
    let promedio = suma/3;

    alert("El promedio es $"+promedio);
}
function PrecioFinal () 
{
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let suma = precio1+precio2+precio3;
    let iva = suma*21/100;
    let precioFinal = suma+iva;

    alert("El precio final es de $"+precioFinal);
}