/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividiendo = txtIdNumeroDividendo.value;
	let divisor = txtIdNumeroDivisor.value;

	dividiendo = parseInt(dividiendo);
	divisor = parseInt(divisor);

	let resto = dividiendo%divisor;
	
	alert(resto);
}
