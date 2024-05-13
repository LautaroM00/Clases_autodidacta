/*
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.
*/
function contarRango()
{
    let a = prompt('Ingrese un número', '')

    let b = prompt('Ingrese otro número', '')

    let contador = 0

    for(; a < b;)
        {
            ++contador
            a++
        }
        alert(contador - 1)

}

contarRango()