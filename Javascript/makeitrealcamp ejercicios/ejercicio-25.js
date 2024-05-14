/*
Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula).
*/

function terminanConS(palabrasVarias){

    let filtro = []
    
    for(let i = 0; i < palabrasVarias.length;){
        filtro = palabrasVarias[i]
        filtro = filtro.split('')
        if(filtro[filtro.length - 1] === 's' || filtro[filtro.length - 1] === 'S'){
            i += 1
            continue
        }else {
            palabrasVarias.splice(i,1)
            i = 0
        }
    }
    return palabrasVarias

}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []

/* Reutilicé el código anterior y modifiqué que acceda a 'filtro.length - 1' para evaluar si debe eliminar ese valor del array principal */

//agregar correción 'retorne nuevo arreglo'. Yo retorno el mismo corregido