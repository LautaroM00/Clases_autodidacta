/*
Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”.
*/

function password(palabra){

    letras = palabra.split('')

    palabraFinal = ''

    for (i = 0; i < letras.length; i++){
        (letras[i] === ' ') ? letras.splice(i,1) :
        (letras[i] === 'a') ? letras[i] = '4'    :
        (letras[i] === 'e') ? letras[i] = '3'    :
        (letras[i] === 'i') ? letras[i] = '1'    :
        (letras[i] === 'o') ? letras[i] = '0'    : '';
        palabraFinal += letras[i]
    }
    return palabraFinal
}

// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""