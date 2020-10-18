
function pintarTareas(pListaTareas, pSeccion) {



    /* pSeccion.innerText = ""; //para que solo me pinte la ultima lista con las tareas filtradas en otras funciones */

    pListaTareas.forEach(tarea => {
        pintarUnaTarea(tarea, pSeccion);
    })

}

function pintarUnaTarea(pTarea, pSeccion) {

    let article = document.createElement('article');
    let div = document.createElement('div');
    div.classList.add('nombre_tarea');
    let h3 = document.createElement('h3');
    let input = document.createElement('input');
    input.setAttribute("type", "button");
    input.value = "Eliminar";



    //contenido div "nombre_tarea"
    let contenidoh3 = document.createTextNode(`${pTarea.nombre}`);
    h3.appendChild(contenidoh3);
    div.appendChild(h3);
    div.appendChild(input);



    // meto todo en el article
    article.appendChild(div);

    pSeccion.appendChild(article);

    if (pTarea.prioridad == "URGENTE") {

        article.style.backgroundColor = "red";
    }
    if (pTarea.prioridad == "diaria") {

        article.style.backgroundColor = "green";
    }
    if (pTarea.prioridad == "semanal") {

        article.style.backgroundColor = "orange";
    }

}

function addTarea(pTarea, pPrioridad) {

    const newTarea = {
        idTarea: id,
        nombre: pTarea,
        prioridad: pPrioridad
    }

    //antes de meter en la lista compuebo que el contacto no existe (evitar duplicados)

    let existe = tareas.findIndex(tarea => {
        return tarea.nombre == pTarea && tarea.prioridad == pPrioridad
    })

    if (existe == -1)/* porque la funcion findIndex me devulve la posicion (del duplicado) o un -1 si no lo encuentra(no habria duplicado) */ {

        tareas.push(newTarea);
        pintarUnaTarea(pTarea, pPrioridad, seccionTareas);
        id++;

    } else {
        alert('tarea repetida')
    }

}