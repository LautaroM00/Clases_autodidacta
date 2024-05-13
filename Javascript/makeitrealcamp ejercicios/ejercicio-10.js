/*
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.
*/

function numeroDeCaracteres()
{
    let contenedor = prompt('Ingrese una palabra a evaluar', '')

    let caracter = prompt('Ingrese caracter a evaluar')

    contenedor = contenedor.split('')

    let cantidadCaracter = 0

    for(let i = 0; i < contenedor.length; i++)
        {
            if(contenedor[i] === caracter) ++cantidadCaracter
            else continue
        }

    alert(cantidadCaracter)
}

numeroDeCaracteres()

//noté que el código de este ejercicio tiene la misma funcionalidad que el anterior, entonces bastó con copiar y pegar y que la comparación de la linea 17 la haga con el caracter que ingresa el usuario.