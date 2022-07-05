/*
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne
Tomás Hernández
*/
function mostrar()
{
    
    let kilosIngresados;
    let saborIngresado;
    let contador = 0;
    let sumaKilos = 0;
    let banderaKilos = true;
    let menosKilos;
    let menosSabor;
    let sumaCarne = 0;
    let contadorCarne = 0;
    let promedioCarne;
    let mensaje;


    while(contador < 10)
    {
        kilosIngresados = parseInt(prompt("Ingrese la cantidad de kilos a comprar."));
        while (kilosIngresados < 1 || kilosIngresados > 500)
        {
            kilosIngresados = parseInt(prompt("Error, ingrese una cantidad entre 1 y 500 kilogramos."));
        }

        saborIngresado = prompt("Ingrese el sabor que desea comprar.").toLowerCase()
        while (saborIngresado !="carne" && saborIngresado !="pollo" && saborIngresado != "vegetales")
        {
            saborIngresado= prompt ("Error, ingrese un sabor que sea carne, pollo o vegetales.").toLowerCase()
        }
    
        sumaKilos = sumaKilos + kilosIngresados;

        if (banderaKilos == true) //B
    {
        banderaKilos = false;
        menosKilos = kilosIngresados;
        menosSabor = saborIngresado;
    }
    else
    {
        if(kilosIngresados < menosKilos)
        {
            menosKilos = kilosIngresados
            menosSabor = saborIngresado
        }
    }

    if (saborIngresado == "carne") //C
    {
        sumaCarne = sumaCarne+kilosIngresados
        contadorCarne = contadorCarne+1
    }

        contador = contador + 1;
    }

    sumaKilos = sumaKilos/10 //A


    promedioCarne = sumaCarne/contadorCarne;

    mensaje = "A) El promedio de los kilos totales es de: "+sumaKilos+ "B) El sabor más liviano es "+menosSabor+" y pesa "+menosKilos+"C) La cantidad total de kilos de carne es de: "+sumaCarne+" y el promedio es de "+promedioCarne
    alert(mensaje)
    
}