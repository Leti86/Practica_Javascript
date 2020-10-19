
function pintarTareas(pListaTareas, pSeccion) {

    /* pSeccion.innerText = ""; //para que solo me pinte la ultima lista con las tareas filtradas en otras funciones */
    pListaTareas.forEach(tarea => {
        pintarUnaTarea(tarea, pSeccion);
    })
}

function pintarUnaTarea(pTarea, pSeccion) {


    let article = document.createElement('article');
    article.className = pTarea.prioridad;
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
    seccionTareas.appendChild(article);



}

let id = 1;


function addTarea(pTarea, pPrioridad) {
    console.log(pPrioridad);


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
        pintarUnaTarea(newTarea, seccionTareas);

        id++;
    } else {
        alert('tarea repetida')
    }
}