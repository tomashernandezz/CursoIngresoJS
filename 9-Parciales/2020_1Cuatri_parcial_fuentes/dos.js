/*
2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.
Tomás Hernández
Ejercicio 02
*/
/*function mostrar()
{
  let nombreIngresado;
  let precioIngresado;
  let pesoIngresado;
  let tipoIngresado;
  let banderaCarneCara = true;
  let banderaCarneLiviana = true;
  let corteMasCaro;
  let nombreCorteMasCaro;
  let corteMasLiviano;
  let nombreCorteMasLiviano
  let sumaTotal = 0;
  let respuesta = "si";
  let mensaje;

  while(respuesta == "si")
  {

    nombreIngresado = prompt("Ingrese el nombre del corte de la carne.");

    precioIngresado = parseInt(prompt("Ingrese el precio de la carne."));
    while(isNaN(precioIngresado) || precioIngresado < 0)
    {
      precioIngresado = parseInt(prompt("Error, solo puede ingresar números en esta casilla. Ingrese el precio de la carne"));
    }

    pesoIngresado = parseInt(prompt("Ingrese el peso de la carne."));
    while(isNaN(pesoIngresado) || precioIngresado < 0)
    {
      pesoIngresado = parseInt(prompt("Error, solo puede ingresar números en esta casilla. Ingrese el peso de la carne"));
    }

    tipoIngresado = prompt("Ingrese el tipo de carne. (Con hueso o sin hueso)")
    while(tipoIngresado != "con hueso" && tipoIngresado != "sin hueso")
    {
      tipoIngresado = prompt("Error, puede ingresar si es 'con hueso' o 'sin hueso'.")
    }

    sumaTotal = sumaTotal + pesoIngresado;

    if (tipoIngresado == "sin hueso")
    {
      if (banderaCarneCara == true)
      {
        banderaCarneCara = false;
        corteMasCaro = precioIngresado;
        nombreCorteMasCaro = nombreIngresado;
      }
      else
      {
        if (precioIngresado > corteMasCaro)
        {
          corteMasCaro = precioIngresado;
          nombreCorteMasCaro = nombreIngresado;
        }
      }
    }
    else
    {
      if (banderaCarneLiviana == true)
      {
        banderaCarneLiviana = false;
        nombreCorteMasLiviano = nombreIngresado;
        corteMasLiviano = pesoIngresado;
      }
      else
      {
        if (pesoIngresado < corteMasLiviano)
        {
          nombreCorteMasLiviano = nombreIngresado;
          corteMasLiviano = pesoIngresado;
        }
      }
    }

    respuesta = prompt("¿Desea seguir ingresando productos?")
  }


  mensaje = "El peso total es de "+sumaTotal;
  mensaje = mensaje + ". El corte más caro de las carnes sin hueso se llama "+nombreCorteMasCaro+ " y vale "+corteMasCaro;
  mensaje = mensaje + ". El corte más liviano de las carnes con hueso se llama " + nombreCorteMasLiviano + "y vale $" + corteMasLiviano;

  document.write(mensaje);
}
*/

/*
5 estudiantes de programacion quieren validar sus datos para ponerla de una buena vez,
se les va a pedir el nombre, el apellido, el sexo (masculino, femenino, jona),
si es programador de java o de c++ y su peso (mayor a 100 kilos porque son programadores).
VALIDAR

Informar=
A) el promedio de peso de los programadores.
B) la cantidad de programadores de java y la de c++.
C) el primer programador de sexo femenino.
D) el programador con menor peso.
Tomás Hernández
Ejercicio nacho
*/

function mostrar()
{
  let nombreIngresado;
  let apellidoIngresado;
  let pesoIngresado;
  let sexoIngresado;
  let lenguajeIngresado;
  let pesoTotal = 0;
  let contadorPeso = 0;
  let promedioTotal;
  let banderaMenosPeso=true;
  let sumaCMAS = 0;
  let sumaJava = 0;
  let menosPeso;
  let nombreMenosPeso;
  let apellidoMenosPeso;
  let banderaPrimeraMujer = true;
  let nombrePrimeraMujer;
  let apellidoPrimeraMujer;
  let contador = 0;
  let mensaje;

  while(contador > 5)
  {
    nombreIngresado = prompt("Ingrese su nombre.");
    apellidoIngresado = prompt("Ingrese su apellido.");

    pesoIngresado = parseInt(prompt("Ingrese su peso."));
    while(pesoIngresado < 99 || isNaN(pesoIngresado))
    {
      pesoIngresado = parseInt(prompt("Error, ingrese un peso mayor a 100 kilos, porque es lo mínimo que pesa un programador"));
    }

    sexoIngresado = prompt("Ingrese su sexo.").toLowerCase();
    while(sexoIngresado !="masculino" || sexoIngresado !="femenino" || sexoIngresado !="jona")
    {
      sexoIngresado = prompt("Error, ingrese un sexo que sea masculino, femenino o jona").toLowerCase();
    }

    lenguajeIngresado = prompt("Ingrese el lenguaje de programación en el que programa.").toLowerCase();
    while(lenguajeIngresado !="c++" || lenguajeIngresado !="java")
    {
      lenguajeIngresado = prompt("Error, ingrese un lenguaje de programación que sea Java o C++");
    }

    pesoTotal = pesoTotal + pesoIngresado;
    contadorPeso = contadorPeso + 1;
    contador = contador + 1;

    switch(lenguajeIngresado) //B
    {
      case "c++":
        sumaCMAS++;
      break;

      default:
        sumaJava++;
      break;
    }

    if(banderaMenosPeso == true) //D
    {
      banderaMenosPeso = false;
      menosPeso = pesoIngresado;
      nombreMenosPeso = nombreIngresado;
      apellidoMenosPeso = apellidoIngresado;
    }
    else
    {
      if(menosPeso > pesoIngresado)
      {
        menosPeso = pesoIngresado;
        nombreMenosPeso = nombreIngresado;
        apellidoMenosPeso = apellidoIngresado;
      }
    }

    if(sexoIngresado == "femenino") //C
    {
      if(banderaPrimeraMujer == true)
      {
        banderaPrimeraMujer = false;
        nombrePrimeraMujer = nombreIngresado;
        apellidoPrimeraMujer;
      }
    }

  }

  promedioTotal = pesoTotal/contadorPeso; //A

  mensaje = "El promedio de peso de los programadores es de "+promedioTotal; //A
  mensaje = mensaje + ". La cantidad de programadores de C++ es de "+sumaCMAS+" y la cantidad de programadores de JAVA es de "+sumaJava; //B
  mensaje = mensaje + ". El nombre completo de la primera programadora es"+nombrePrimeraMujer+" "+apellidoPrimeraMujer; //C
  mensaje = mensaje + ". El nombre del programador con menos peso es "+nombreMenosPeso+" y pesa " +menosPeso+"kg." //D

  document.write(mensaje);
}