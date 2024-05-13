/*
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
*/

function sumarRango()
{
    let a = +prompt('Ingrese un número', '')

    let b = +prompt('Ingrese otro número', '')

    let contenedor = 0
    if (a == b) contenedor = 0
    else
    {
        for(;a <= b;)
            {
                contenedor += a
                ++a
            }
    }
    alert(contenedor)
}

sumarRango()