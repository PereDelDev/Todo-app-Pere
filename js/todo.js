const formNombrePrioridad = document.querySelector('#formNombrePrioridad')
const formPrioridad = document.querySelector('#soloPrioridad')
const formNombre = document.querySelector('#soloNombre')
const seccion = document.querySelector('.secciontareas')
let id = tareas.length
function pintarTareas(lista, domElement) {
    lista.forEach(objeto => pintarTarea(objeto, domElement))
}

formNombrePrioridad.addEventListener('submit', getData)

function getData(event) {
    event.preventDefault()
    let tarea = event.target.nombre.value
    let prioridad = event.target.prioridad.value
    const nuevaTarea = { id: id, titulo: tarea, prioridad: prioridad }

    console.log(nuevaTarea)
    guardarData(tareas, nuevaTarea)


}

function borrarTarea(event) {
    let id = Number(event.target.dataset.id);
    let posicion = tareas.findIndex(tarea => tarea.id === id)
    tareas.splice(posicion, 1)
    padre = event.target.parentNode.parentNode
    hijo = event.target.parentNode
    padre.removeChild(hijo)
    console.log(tareas)
}
function pintarTarea(objeto, domElement) {
    const article = document.createElement('article')
    const button = document.createElement('button')
    const h2 = document.createElement('h2')
    h2.textContent = objeto.titulo
    button.dataset.id = id
    button.textContent = 'Eliminar'
    button.addEventListener('click', borrarTarea)
    article.classList.add(objeto.prioridad)
    article.append(h2, button)
    domElement.appendChild(article)
}

function guardarData(list, objeto) {
    let resultado = list.findIndex(item => item.titulo === objeto.titulo)
    if (resultado === -1) {
        list.push(objeto)
        pintarTarea(objeto, seccion)
        id++
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