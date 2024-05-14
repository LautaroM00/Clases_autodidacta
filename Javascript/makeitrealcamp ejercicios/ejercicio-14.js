/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
*/

function sumarArreglo(arr,posicionInicial,posicionFinal){
    let contenedor = 0
    if(posicionInicial === posicionFinal){
        return contenedor = 0
    }
    for(i = posicionInicial; i <= posicionFinal; i++){
        contenedor += arr[i]
    }
    return contenedor
}

console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

//Nota: a partir de ahora voy a respetar que la impresión se haga en consola.