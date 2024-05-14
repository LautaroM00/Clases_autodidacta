/*
Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
*/

function duplicar(numeros){
    let numerosPorDos = []

    for(let i = 0; i < numeros.length; i++){
        numerosPorDos[i] = numeros[i] * 2
    }
    return numerosPorDos
}

// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []