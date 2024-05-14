/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.
*/

function max(obtenerMaximo){
    let numeroMaximo = obtenerMaximo[0]

    for(i = 1; i < obtenerMaximo.length; i++){
        if (numeroMaximo > obtenerMaximo[i]) continue
        else numeroMaximo = obtenerMaximo[i]
    }
    return numeroMaximo
}

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9