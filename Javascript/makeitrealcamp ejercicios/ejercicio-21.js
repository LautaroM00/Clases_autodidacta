/*
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.
*/

function pares(numeros){
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2){
            numeros.splice(i,1)
        }else continue
    }
    return numeros
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []

//agregar correción 'retorne nuevo arreglo'. Yo retorno el mismo corregido