/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	let suma = numeroDos+numeroUno;

	alert("El resultado de la suma es "+suma)
}

