
function pintarTareas(pListaTareas, pSeccion) {



    /* pSeccion.innerText = ""; //para que solo me pinte la ultima lista con las tareas filtradas en otras funciones */

    pListaTareas.forEach(tarea => {
        pintarUnaTarea(tarea, pSeccion);
    })

}

function pintarUnaTarea(pTarea, pSeccion) {

    let article = document.createElement('article');
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let input = document.createElement('input');
    input.setAttribute("type", "button");





    //contenido div "nombre_tarea"
    let contenidoh3 = document.createTextNode(`${pTarea.nombre}`);
    let contenidoInput = document.createTextNode('ELIMINAR');
    input.appendChild(contenidoInput);
    h3.appendChild(contenidoh3);
    div.appendChild(h3);
    div.appendChild(input);


    // meto todo en el article
    article.appendChild(div);

    pSeccion.appendChild(article);

    if (pTarea.prioridad == "URGENTE") {



    }




}