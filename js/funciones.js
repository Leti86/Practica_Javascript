
function pintarTareas(pListaTareas, pSeccion) {

    seccionTareas.innerHTML = "";

    pListaTareas.forEach(tarea => {
        pintarUnaTarea(tarea, pSeccion);
    })


}

let id = 5;

function pintarUnaTarea(pTarea) {


    let article = document.createElement('article');
    article.className = pTarea.prioridad;
    article.classList.add('contenedor_tarea');
    let div = document.createElement('div');
    div.classList.add('nombre_tarea');
    div.dataset.id = pTarea.idTarea;
    let h3 = document.createElement('h3');
    let button = document.createElement('button');
    button.setAttribute('onClick', 'eliminarTarea(this)');
    button.value = "Eliminar";
    button.classList.add('btnEliminar');
    buttonText = document.createTextNode("Eliminar");
    button.appendChild(buttonText);



    //contenido div "nombre_tarea"
    let contenidoh3 = document.createTextNode(`${pTarea.nombre}`);
    h3.appendChild(contenidoh3);
    div.appendChild(h3);
    div.appendChild(button);

    // meto todo en el article
    article.appendChild(div);
    seccionTareas.appendChild(article);

}



function addTarea(pTarea, pPrioridad) {
    /* console.log(pPrioridad); */
    const newTarea = {
        idTarea: id,
        nombre: pTarea,
        prioridad: pPrioridad
    }
    //antes de meter en la lista compuebo que el contacto no existe (evitar duplicados)
    let existe = tareas.findIndex(tarea => {
        return tarea.nombre == pTarea && tarea.prioridad == pPrioridad
    })

    if (existe == -1) {
        tareas.push(newTarea);
        pintarUnaTarea(newTarea, seccionTareas);
        id++;

    } else {
        alert('tarea repetida')
    }
}

function filtrarTareasPorPrioridad(pListaTareas, pPrioridad) {
    let result = pListaTareas.filter(tarea =>
        pPrioridad == tarea.prioridad
    )

    return result;

    /* console.log(result);  OK */
}

function eliminar(pListaTareas, id) {
    tareaParaEliminar = pListaTareas.findIndex(tarea => tarea.idTarea == id);
    pListaTareas.splice(tareaParaEliminar, 1);

}



function buscarTarea(pListaTareas, pPalabraBuscada) {


    let listaFiltradaPorPalabra = pListaTareas.filter(
        tarea => {
            return tarea.nombre.toLowerCase().includes(pPalabraBuscada.toLowerCase());
        })
    return listaFiltradaPorPalabra;
}




