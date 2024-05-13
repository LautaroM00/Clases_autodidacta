/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/


function bmi(peso,altura)
{
    peso = prompt('Ingrese su peso', '')

    altura = prompt('Ingrese su altura' ,'')

    let bmi = peso/altura**2

    bmi = 
    (bmi < 18.5)                 ? bmi = 'a' : 
    (bmi >= 18.5 && bmi <= 24.9) ? bmi = 'b' : 
    (bmi >= 25 && bmi <=29.9)    ? bmi = 'c' : 
    (bmi > 30)                   ? bmi = 'd' :
    alert('Ingrese un valor válido');

    switch(bmi)
    {
        case "a":
            alert("Bajo de peso")
            break

        case 'b':
            alert("Normal")
            break

        case 'c':
            alert("Sobrepeso")
            break

        case 'd':
            alert("Obeso")
            break
    }
}

bmi()