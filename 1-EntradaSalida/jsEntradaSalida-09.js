/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe = parseInt(txtIdSueldo.value);
	let aumento = parseInt(importe*10/100);
	let resultado = importe+aumento;

	txtIdResultado.value = resultado;
}