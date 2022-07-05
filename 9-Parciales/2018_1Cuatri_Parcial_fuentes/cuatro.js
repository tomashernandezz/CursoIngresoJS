function mostrar()
{
    let numeroUno;
    let numeroDos;
    let numeroFinal

    numeroUno = parseInt(prompt("Ingrese el primer número"))
    numeroDos = parseInt(prompt("Ingrese el segundo número"))

    if (numeroUno == numeroDos) 
    {
        numeroFinal =numeroUno+""+numeroDos
    } 
    else
    {
        if (numeroUno > numeroDos)
        {
            numeroFinal =numeroUno-numeroDos
        }
        else
        {
            numeroFinal =numeroUno+numeroDos
        }
    }
}
