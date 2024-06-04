let tiempo = {
    horas: 0,
    minutos: 0,
    segundos: 0
}

let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

horas.innerHTML = tiempo.horas
minutos.innerHTML = tiempo.minutos
segundos.innerHTML = tiempo.segundos

function sumarUnidadTiempo(){
    tiempo.segundos += 1
    if(tiempo.segundos === 60){
        tiempo.segundos = 0
        segundos.innerHTML = tiempo.segundos
        tiempo.minutos += 1
        minutos.innerHTML = tiempo.minutos
    }
    if(tiempo.minutos === 60){
        tiempo.minutos = 0
        minutos.innerHTML = tiempo.minutos
        tiempo.horas += 1
        horas.innerHTML = tiempo.horas
    }
    segundos.innerHTML = tiempo.segundos
}

setInterval(sumarUnidadTiempo, 1000)

/* Funciones de cargar, guardar y reiniciar*/

function guardarTiempo(){
    let guardarTiempo = {
        horas: Number(horas.innerHTML),
        minutos: Number(minutos.innerHTML),
        segundos: Number(segundos.innerHTML)
    }

    let tiempoString = JSON.stringify(guardarTiempo)

    localStorage.setItem('contador',tiempoString)
}

function cargarTiempo(){
    let tiempoString = localStorage.getItem('contador')

    if(tiempoString === null){
        tiempo = {
            horas: 0,
            minutos: 0,
            segundos:0
        }
        horas.innerHTML = tiempo.horas
        minutos.innerHTML = tiempo.minutos
        segundos.innerHTML = tiempo.segundos
        return
    }

    tiempo = JSON.parse(tiempoString)

    horas.innerHTML = Number(tiempo.horas)
    minutos.innerHTML = Number(tiempo.minutos)
    segundos.innerHTML = Number(tiempo.segundos)
}

function reiniciarTiempo(){
    tiempo.horas = 0
    tiempo.minutos = 0
    tiempo.segundos = 0
    horas.innerHTML = tiempo.horas
    minutos.innerHTML = tiempo.minutos
    segundos.innerHTML = tiempo.segundos
}

/* Botones para cargar, guardar tiempo o reiniciar*/


let guardar = document.getElementById('guardar')

guardar.onclick = guardarTiempo

let cargar = document.getElementById('cargar')

cargar.onclick = cargarTiempo

let reiniciar = document.getElementById('reiniciar')

reiniciar.onclick = reiniciarTiempo