/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	let suma = numeroUno+numeroDos;

	alert(suma);
}

function restar()
{
	let numeroUno;
	let numeroDos;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	let resta = numeroUno-numeroDos;
	
	alert(resta);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	let multiplicacion = numeroUno*numeroDos;
	
	alert(multiplicacion);
}

function dividir()
{
	let numeroUno;
	let numeroDos;

	numeroUno=txtIdNumeroUno.value;
	numeroDos=txtIdNumeroDos.value;

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);

	let division = numeroUno/numeroDos;
	
	alert(division);
}

