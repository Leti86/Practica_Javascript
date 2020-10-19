/* Pintar tareas */

let seccionTareas = document.querySelector('#tareas');

pintarTareas(tareas, seccionTareas);

/* Pintar nuevas tareas */

let anadirTarea = document.getElementById('addTarea');
let prioridad = document.querySelector('#prioridad');
let btnGuardar = document.getElementById('btnGuardar');


btnGuardar.addEventListener('click', guardarLaTarea);

function guardarLaTarea(event) {
    event.preventDefault();

    let innputTarea = anadirTarea.value.trim();
    console.log(innputTarea);
    let selectPrioridad = prioridad.value;

    if (innputTarea != "" && selectPrioridad != "-1") {

        addTarea(innputTarea, selectPrioridad);
    }
    else {
        alert('Los campos no pueden ser vacios)');
    }

    /* addTarea.value = "";
    prioridad.value = "-1"; */
}










