const formNombrePrioridad = document.querySelector('#formNombrePrioridad')
const formPrioridad = document.querySelector('#soloPrioridad')
const formNombre = document.querySelector('#soloNombre')
const seccion = document.querySelector('.secciontareas')
let id = tareas.length
function pintarTareas(lista, domElement) {
    domElement.innerHTML = ''
    lista.forEach(objeto => pintarTarea(objeto, domElement))
}
const tickverde = document.querySelector('.tickverde')
const tickrojo = document.querySelector('.tickrojo')
const wrapper = document.querySelector('.wrapper')

formNombrePrioridad.addEventListener('submit', getData)
formPrioridad.addEventListener('change', filtrarTareas)
formNombre.addEventListener('keyup', filtrarNombres)

function filtrarNombres(event) {
    event.preventDefault()
    let valor = event.target.value
    const listaFiltrada = filtroNombres(tareas, valor)
    pintarTareas(listaFiltrada, seccion)

}
function filtroNombres(list, valor) {
    return list.filter(item => {
        let nombre = item.titulo.toLowerCase()
        let miNombre = valor.toLowerCase()
        return nombre.includes(miNombre)
    })
}

function filtroTareas(list, valor) {
    return list.filter(item => {
        let prioridad = item.prioridad
        let miprioridad = valor
        return prioridad.includes(miprioridad)
    })
}

function filtrarTareas(event) {

    const listaFiltrada = filtroTareas(tareas, event.target.value)
    pintarTareas(listaFiltrada, seccion)
}
function correcto() {
    tickverde.style.opacity = '1'
    wrapper.style.cssText = 'box-shadow: 2px 2px 20px green;';
    setTimeout(() => {
        tickverde.style.opacity = '0'
        wrapper.style.cssText = 'box-shadow: 2px 2px 10px black;';
    }, 1500)
}

function getData(event) {
    event.preventDefault()
    let tarea = event.target.nombre.value
    let prioridad = event.target.prioridad.value
    if (tarea !== '' && prioridad !== '') {

        const nuevaTarea = { idTarea: id, titulo: tarea, prioridad: prioridad }
        guardarData(tareas, nuevaTarea)
    } else if (tarea === '' && prioridad !== '') {
        alert('Introduce una Tarea')
    } else if (tarea !== '' && prioridad === '') {
        alert('Introduce la Prioridad')
    } else if (tarea === '' && prioridad === '') {
        alert('Los campos no pueden estar vacios')
    }


}
function borrarTick() {
    tickrojo.style.opacity = '1'
    wrapper.style.cssText = 'box-shadow: 2px 2px 20px red;';
    setTimeout(() => {
        tickrojo.style.opacity = '0'
        wrapper.style.cssText = 'box-shadow: 2px 2px 10px black;';
    }, 1000)
}
function borrarTarea(event) {
    let id = Number(event.target.dataset.id);
    console.log(id)
    let posicion = tareas.findIndex(tarea => tarea.idTarea === id)
    tareas.splice(posicion, 1)
    padre = event.target.parentNode.parentNode
    borrarTick()
    hijo = event.target.parentNode
    hijo.style.opacity = 0
    setTimeout(() => {



        padre.removeChild(hijo)
        if (tareas.length === 0) {
            seccion.innerHTML = `<h3> NO HAY TAREAS</h3>`
        }

    }, 1000);


}
function pintarTarea(objeto, domElement) {
    const article = document.createElement('article')
    const button = document.createElement('button')
    const h2 = document.createElement('h2')
    h2.textContent = objeto.titulo
    console.log(objeto.idTarea)
    button.dataset.id = objeto.idTarea
    button.textContent = 'X'
    button.addEventListener('click', borrarTarea)
    article.classList.add(objeto.prioridad)
    article.append(h2, button)
    domElement.appendChild(article)
}

function guardarData(list, objeto) {
    let resultado = list.findIndex(item => item.titulo.toLowerCase() === objeto.titulo.toLowerCase())
    if (resultado === -1) {
        list.push(objeto)
        pintarTareas(list, seccion)
        id++
        correcto()
    } else {
        alert('La Tarea ya existe')
    }
}



pintarTareas(tareas, seccion)





/* 
<article>
<h2>Nombre de la Tarea</h2>
<button>Eliminar</button>
</article> */