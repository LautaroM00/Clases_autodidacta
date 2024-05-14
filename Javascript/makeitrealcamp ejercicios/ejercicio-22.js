/*
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares.
*/

function posiciones(numeros){
    let posiciones = []

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2){
            continue
        }else posiciones.push(i)
    }
    return posiciones
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []