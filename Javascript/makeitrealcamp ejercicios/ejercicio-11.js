/*
Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.
*/

function sumarArreglo()
{
    let arr = []

    let i = 0

    let contenedor = 0
    do{
        numero = prompt('Ingrese número', '')
        if(numero === null || isNaN(numero) || numero === '') break
        else 
        {
            arr[i] = +numero
            i++
        }
    }while(true)

    for(i = 0; i < arr.length; i++)
        {
            contenedor += +arr[i]
        }
    alert(contenedor)
}

sumarArreglo()