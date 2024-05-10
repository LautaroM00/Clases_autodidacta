/* Escribe un código que sume el valor de todas las propiedades
del objeto y los muestre en ventana de alerta
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let suma = 0

for (let key in salaries){
    salaries[key]
    suma += +salaries[key]
}

alert(suma)