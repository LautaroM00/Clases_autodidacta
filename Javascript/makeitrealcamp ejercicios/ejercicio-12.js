/*
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.
*/

function sumarArreglo()
{
    let arr = []

    let i = 0

    let contenedor = 1
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
            contenedor *= +arr[i]
        }
    alert(contenedor)
}

sumarArreglo()

//Misma estructura que el anterior, dos pequeños cambios en contenedor = 1 y en la linea 24 contenedor multiplica en lugar de sumar.