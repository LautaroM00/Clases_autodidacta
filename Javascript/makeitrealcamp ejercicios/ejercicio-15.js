
/*
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U
*/

function transcribir(arr){
    arr = arr.split('')
    let resultado = ''
    for(let i = 0; i < arr.length; i++){
        (arr[i] === "A") ? arr[i] = 'U' :
        (arr[i] === "T") ? arr[i] = 'A' :
        (arr[i] === "C") ? arr[i] = 'G' :
        (arr[i] === "G") ? arr[i] = 'C' :''
        resultado += arr[i]
}
return resultado
}

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

