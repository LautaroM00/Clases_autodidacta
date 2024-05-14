/*
Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula).
*/

function empiezanConA(palabrasVarias){

    let filtro = []
    
    for(let i = 0; i < palabrasVarias.length;){
        filtro = palabrasVarias[i]
        filtro = filtro.split('')
        if(filtro[0] === 'A' || filtro[0] === 'a'){
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
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []

//agregar correción 'retorne nuevo arreglo'. Yo retorno el mismo corregido