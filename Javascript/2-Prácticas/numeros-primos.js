/* Este script muestra una ventana de alerta
en la que al insertar un número (dentro del conjunto
de los naturales) te muestra todos los números primos
hasta el número ingresado inclusive.
 */

let numeroUsuario = prompt('Ingrese un número', '');

let n;

for(let i = 2; i < +numeroUsuario + 1; i++){
    n = 2;
    do {
        t = true
        if(i % n == 0) {
            if(i == n) {
                alert(i);
                t = false;
            }else {
                t = false;
            }
        }else {
            n++;
        }
    } while ( t );
}