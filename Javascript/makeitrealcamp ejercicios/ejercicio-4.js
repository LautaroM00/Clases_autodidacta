/* Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte */

let arr = []

function imprimirArreglo(){
do{
    contenedorValores = prompt('Ingrese elementos')

    if(contenedorValores ?? false) arr.push(contenedorValores)
    else break

}while(true)

do
{
    imprimirElemento = arr.shift()

    if(imprimirElemento === undefined) break
    else alert(imprimirElemento)

}while(true)
}

imprimirArreglo()