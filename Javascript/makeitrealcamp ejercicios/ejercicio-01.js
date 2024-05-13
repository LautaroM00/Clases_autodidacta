/*
Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

function contrasenaValida()
{
    contrasena = prompt('Ingrese su contraseña', '')
    if(contrasena === '2Fj(jjbFsuj' || contrasena === 'eoZiugBf&g9') alert(true)
    else alert(false)
}

contrasenaValida()