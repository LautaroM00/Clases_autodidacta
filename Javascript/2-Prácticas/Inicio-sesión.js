/* Este algoritmo lo hice para practicar el uso de if
y su correcta anidación. Es un inicio de sesión
símple. */

let userName = prompt("Ingrese su usuario", "");

if (userName === "Admin") {
    let password = prompt("Ingrese su contraseña", ["TheMaster"] );
    if(password === "TheMaster") {
        alert("Bienvenido!")
    }else if(password) {
        alert("Contraseña incorrecta")
    }else {
        alert("Cancelado")
    }
}else if(userName) {
    alert("No te conozco")
    }else{
        alert("Cancelado")
    }


