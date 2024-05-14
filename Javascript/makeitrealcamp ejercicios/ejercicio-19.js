/*
Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:

Nota: Intentarlo hacer sin el método Math.min de JavaScript. 
*/

function min(obtenerMinimo){
    let numeroMinimo = obtenerMinimo[0]

    for(i = 1; i < obtenerMinimo.length; i++){
        if (numeroMinimo < obtenerMinimo[i]) continue
        else numeroMinimo = obtenerMinimo[i]
    }
    return numeroMinimo
}

// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

//Reutilicé el código anterior y solo cambié, en la linea 11, el '>'  por '<'.