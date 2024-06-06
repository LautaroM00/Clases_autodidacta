const formulario = document.getElementById('formulario')

const nombre = document.getElementById('nombre')

const apellido = document.getElementById('apellido')

const mostrar = document.getElementById('mostrar')

const parrafo = document.getElementById('parrafo')

const array = []

const handlerEvent = (evento) => {
    event.preventDefault()

    const DATO = {
        nombre: nombre.value,
        apellido: apellido.value
    }

    array.push(DATO)
}

formulario.addEventListener('submit', handlerEvent)



mostrar.onclick = () => parrafo.innerHTML = JSON.stringify(array)







