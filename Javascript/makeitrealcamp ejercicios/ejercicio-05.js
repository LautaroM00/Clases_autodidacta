/*
Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string. 
*/

function likes()
{
    let numeroLikes = prompt('¿Cuántos likes hay?','')
    numeroLikes < 1000  && numeroLikes !== null   ? caso = 'a' : 
    numeroLikes >= 1000 && numeroLikes < 1000000  ? caso = 'b' :
    numeroLikes >= 1000000                        ? caso = 'c' :
    alert('Ingrese un valor válido')

    switch(caso)
    {
        case 'a':
            alert(`Tienes ${ numeroLikes } likes!`)
            break
        case 'b':
            numeroLikes /= 1000
            numeroLikes = Math.trunc(numeroLikes)
            alert(`Tienes ${ numeroLikes + 'K' } likes!`)
            break
        case 'c':
            numeroLikes /= 1000000
            numeroLikes = Math.trunc(numeroLikes)
            alert(`Tienes ${ numeroLikes + 'M' } likes!`)
            break
    }
}

likes()