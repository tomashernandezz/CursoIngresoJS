/*
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Tomás Hernández
Switch / If
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let bonificacion;
    let precioLamparas;
    let precioConDescuento;
    let impuesto;
    let porcentajeBruto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    porcentajeBruto = 10;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            bonificacion = 0;
        break;

        case 3:
        if (marca == "ArgentinaLuz")
            {
                bonificacion = 15;
            }
            else if(marca == "FelipeLamparas")
            {
                bonificacion = -0;
            }
            else 
            {
                bonificacion = 5;
            }
        break;

        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                bonificacion = 25;
            }
            else
            {
                bonificacion = 20;
            }
        break;

        case 5:
            if (marca == "ArgentinaLuz" ) {
                bonificacion = 40;
            } 
            else
            {
                bonificacion = 30;
            }
        break;

        default:
            bonificacion = 50;
        break;
    }

    precioLamparas = 35*cantidadLamparas;
    precioConDescuento = (precioLamparas*bonificacion*1)/100

    if(precioConDescuento > 119)
    {
        impuesto = precioConDescuento * porcentajeBruto / 100;
        precioConDescuento = precioConDescuento + impuesto;
        alert("IIBB usted pagó "+impuesto+" de impuestos");
    }

    document.getElementById("txtIdprecioDescuento").value=precioConDescuento;

}
*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Tomás Hernández
Switch / Switch */
/*function CalcularPrecio () 
{
    let cantidadLamparas;
    let marca;
    let bonificacion;
    let precioLamparas;
    let precioConDescuento;
    let impuesto;
    let porcentajeBruto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    porcentajeBruto = 10;

    switch(marca)
    {
        case "ArgentinaLuz":
                switch(cantidadLamparas)
                {
                    case 1:
                    case 2:
                        bonificacion = 0;
                    break;

                    case 3:
                        bonificacion = 15;
                    break;

                    case 4:
                        bonificacion = 25;
                    break;

                    case 5:
                        bonificacion = 40;
                    break;

                    default:
                        bonificacion = 50;
                    break;
                }
        break;

        case "FelipeLamparas":
                switch(cantidadLamparas)
                {
                    case 1:
                    case 2:
                        bonificacion = 0;
                    break;  
                    case 3:
                        bonificacion = 10;
                    break;  
                    case 4:
                        bonificacion = 25;
                    break;  
                    case 5:
                        bonificacion = 30;
                    break;  
                    default:
                        bonificacion = 50;
                    break;
                }
        break;

        default:
                switch(cantidadLamparas)
            {
                case 1:
                case 2:
                    bonificacion = 0;
                break;

                case 3:
                    bonificacion = 5;
                break;

                case 4:
                    bonificacion = 20;
                break;

                case 5:
                    bonificacion = 30;
                break;

                default:
                    bonificacion = 50;
                break;
            }
        break;
    }

    precioLamparas = 35*cantidadLamparas;
    precioConDescuento = (precioLamparas*bonificacion*1)/100

    if(precioConDescuento > 119)
    {
        impuesto = precioConDescuento * porcentajeBruto / 100;
        precioConDescuento = precioConDescuento + impuesto;
        alert("IIBB usted pagó "+impuesto+" de impuestos");
    }

    document.getElementById("txtIdprecioDescuento").value=precioConDescuento;

}*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Tomás Hernández
IF / IF  */
/*
function CalcularPrecio () 
{
    let marca;
    let precioLamparas;
    let cantidadLamparas;
    let precioFinal;
    let bonificacion;
    let impuesto;
    let porcentajeBruto;


    porcentajeBruto = 10;
    cantidadLamparas=parseInt(document.getElementById('txtIdCantidad').value);
    marca=document.getElementById('Marca').value;
    precioLamparas = 35;
    
    
    if (cantidadLamparas > 5)
     {
        bonificacion = 50;  
     }
     else 
     {
        if (cantidadLamparas == 5)
         {
            if (marca == "ArgentinaLuz")
             {  
                bonificacion = 40;
             }
            else
             {
                bonificacion = 30;
             }
   
        
          }
        else
        {
   
          
            if (cantidadLamparas == 4)
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    bonificacion = 25;
                } 
                 else
                  {
                    bonificacion = 20;
                  }
            }
   
           
            else
            {
                if (cantidadLamparas == 3) 
                {
                   if (marca == "ArgentinaLuz")
                    {
                        bonificacion = 15;
                    } 
                    else
                    {
                        if (marca == "FelipeLamparas")
                         {
                            bonificacion = 10;
                         } 
                         else 
                         {
                            bonificacion = 5;
                         }
                    }
    
                
                }                   
                else
                {
                    bonificacion = 0;
                }                       

            }

        }
     }

    bonificacion = precioLamparas * bonificacion / 100;
    precioFinal= cantidadLamparas * (precioLamparas - bonificacion);  
        
     
     if (precioFinal >120)
      {
        impuesto = precioFinal * porcentajeBruto / 100;
        precioFinal = precioFinal + impuesto;
        alert("IIBB Usted pago "  + impuesto + " de impuestos");
      } 
    document.getElementById('txtIdprecioDescuento').value=precioFinal;   
}    */

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Tomás Hernández
IF / SWITCH  */
function CalcularPrecio () 
{

    let cantidad;
    let otraMarca;
    let descuento;
    let precio;
    let resultado;
    let impuesto;
    let precioImpuesto;
    
    impuesto = 10;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    otraMarca = document.getElementById('Marca').value;
    precio = 35;

    if (cantidad == 3) 
    {
    switch (otraMarca)
    { 
      case "ArgentinaLuz":
        descuento = 15;
      break;
      case "FelipeLamparas":
        descuento = 10;
      break;
      default:
        descuento = 5;
      break;
    }
    }
    else
    {
    if (cantidad == 4) 
    {
        switch (otraMarca)
        { 
          case "ArgentinaLuz":
          case "FelipeLamparas":
            descuento = 25;
          break;
          default:
            descuento = 20;
          break;
        }
    }
    else
    {
        if (cantidad == 5) 
        {
            switch(marcas)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
            }
        }
        else
        {
            descuento = 50;
        }
    }
 }

    descuento = precio * descuento / 100;
    resultado = (precio - descuento) * cantidad; 
   
    if (resultado > 120)
      {
        impuesto = resultado * impuesto / 100;
        precioImpuesto = resultado + impuesto;
        alert("Usted pago "+ precioImpuesto+ " de IIBB siendo " +impuesto+" el impuesto que se pagó ");
      } 
           
    document.getElementById('txtIdprecioDescuento').value = resultado;   
}
