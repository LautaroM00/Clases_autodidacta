/*
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0). 
*/

function removerCeros()
{
    let arr = []
    
    let i = 0

    let filtro

    let iteraciones

    //Ingresar números al array
    
    do{
    filtro = prompt('Ingrese un número', '')

    if (filtro === null || filtro === '' || isNaN( filtro )) break
    else 
        {
        arr.push(+filtro)
        }
    }while(true)

    i = 0

    //Filtrar ceros

    do{
        if(arr[i] === 0)
            arr.splice(i,1)
        else
            {
            if(arr[i] === undefined) 
                break
            else 
                i++
            }
    }while(true)

    alert(arr)
}

removerCeros()

/* 
Nota: este ejercicio lo resolví desconociendo la existencia de la propiedad arr.filter para filtrar un valor en el array
*/