const formNombrePrioridad = document.querySelector('#formNombrePrioridad')
const formPrioridad = document.querySelector('#soloPrioridad')
const formNombre = document.querySelector('#soloNombre')
const seccion = document.querySelector('.secciontareas')
function pintarTareas(lista, domElement) {
    lista.forEach(objeto => pintarTarea(objeto, domElement))
}

function pintarTarea(objeto, domElement) {
    const article = document.createElement('article')
    const button = document.createElement('button')
    const h2 = document.createElement('h2')
    h2.textContent = objeto.titulo
    button.textContent = 'Eliminar'
    article.append(h2, button)

    domElement.appendChild(article)
}


pintarTareas(tareas, seccion)





/* 
<article>
<h2>Nombre de la Tarea</h2>
<button>Eliminar</button>
</article> */