/*
Crea una función que multiplique todas las propiedades
numéricas de obj por 2
*/

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

function multiplicaNumero(menu)
{
    for (let prop in menu)
        {
            if (+menu[prop])
            {
                menu[prop] *= 2
            }
        }return
}

multiplicaNumero(menu)