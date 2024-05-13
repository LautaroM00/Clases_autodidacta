/*
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.
// escribe tu respuesta acá
*/

let numero

function fizzBuzz()
{
    numero = prompt('Ingrese un número', '');

    if(numero === null || isNaN(numero)) alert('Cancelado')
    else
    {
    (numero % 3) === 0 &&  (numero % 5) === 0 ? alert('fizzbuzz') :
    (numero % 3) !== 0 &&  (numero % 5) === 0 ? alert('buzz')     :
    (numero % 3) === 0 && !(numero % 5) !== 0 ? alert('fizz')     :
    alert(numero)
    }
}

fizzBuzz()