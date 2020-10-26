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

    let selectPrioridad = prioridad.value;

    if (innputTarea != "" && selectPrioridad != "-1") {

        addTarea(innputTarea, selectPrioridad);


    }

    else {
        alert('Los campos no pueden ser vacios)');
    }
    /* innputTarea.innerHTML = "";
      selectPrioridad = "-1"; Esto no funciona?? */


}

/* Tareas pintadas - seleccionar por prioridades */

let selectPrioridad2 = document.querySelector('#prioridad_2');

const prioridadesDeLasTareas = new Array();
for (tarea of tareas) {
    prioridadesDeLasTareas.push(tarea.prioridad)
} /* asi consigo un array con el tipo de proridades, pero estan duplicados */
/* console.log(prioridadesDeLasTareas); OK*/

let borradoPrioridadesRepetidas = new Set(prioridadesDeLasTareas);
/* console.log(borradoPrioridadesRepetidas); */
const listaPrioridades = Array.from(borradoPrioridadesRepetidas);
/* console.log(listaPrioridades); OK*/
listaPrioridades.forEach(prioridad => {
    listaPrioridades.innerHTML = `<option value="${prioridad}">${prioridad}</option>`
    /* console.log(listaPrioridades); OK*/
})

//evento para capturar prioridad
selectPrioridad2.addEventListener('change', event => {

    let listaFiltradaPorPrioridades = filtrarTareasPorPrioridad(tareas, event.target.value);

    seccionTareas.innerHTML = "";


    pintarTareas(listaFiltradaPorPrioridades, seccionTareas);
});


/* borrar tarea */

function eliminarTarea(event) {
    let id = event.parentNode.dataset.id;
    /* console.log(id); */
    eliminar(tareas, id);



    pintarTareas(tareas, seccionTareas);

}




/* Buscar tareas */

let buscador = document.querySelector('#buscador_tarea');
buscador.addEventListener('input', recogerBusqueda);

function recogerBusqueda(event) {

    let palabraABuscar = event.target.value.trim();

    /* console.log(palabraABuscar); OK*/

    let listaTareaEncontrada = buscarTarea(tareas, palabraABuscar);
    /* console.log(listaTareaEncontrada); */
    pintarTareas(listaTareaEncontrada, seccionTareas);

}


/* Evento Boton eliminar

let btnEliminar = document.querySelector('#btnEliminar');
let contenedorTarea = document.querySelector('#contenedor_tarea')


btnEliminar.addEventListener('click', eliminarTarea);

function eliminarTarea(event) {

  let inputEliminar = contenedorTarea.value;

  inputEliminar.innerHTML = "";

}  */























