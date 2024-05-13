
/* 
Escribe una función sumInput() que:

Pida al usuario valores usando prompt y los almacene en el array.
Termine de pedirlos cuando el usuario ingrese un valor no numérico, una cadena vacía, o presione “Escape”.
Calcule y devuelva la suma de los items del array.
P.D. Un cero 0 es un número válido, por favor no detengas los ingresos con el cero. 
*/

let num

let arr = []

let contenedorSuma = 0

function sumImput(){
    do{
        num = prompt('Ingrese un número', '')
    
        if(+num)
        {
            arr.push(num)
        }

    }while(+num || num === '0')
    
    for (let i = 0;arr.length > i; i++)
    {
        contenedorSuma += +arr[i]
    }

}

sumImput()

alert(contenedorSuma)