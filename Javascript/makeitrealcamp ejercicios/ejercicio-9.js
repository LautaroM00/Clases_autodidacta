/*
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":
*/

function numeroDeAes()
{
    let contenedor = prompt('Ingrese una palabra a evaluar', '')

    contenedor = contenedor.split('')

    let cantidadAes = 0

    for(let i = 0; i < contenedor.length; i++)
        {
            if(contenedor[i] === 'a') ++cantidadAes
            else continue
        }

    alert(cantidadAes)
}

numeroDeAes()