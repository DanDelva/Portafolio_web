class Estudiante {
    constructor(matricula, nombre, apellido, carrera) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.carrera = carrera;
    }
}

const storage = {
    obtener(clave) {
        const valor = window.localStorage.getItem(clave);
        return valor ? JSON.parse(valor) : [];
    },
    asignar(clave, valor) {
        window.localStorage.setItem(clave, JSON.stringify(valor));
    },
    eliminar(clave) {
        window.localStorage.removeItem(clave);
    },
    limpiar() {
        window.localStorage.clear(); 
    }
}

let arrayEstudiantes = storage.obtener('arrayEstudiantes');

document.getElementById('btnAgregar').addEventListener('click', agregarEstudiante);

function agregarEstudiante() {
    let matricula = document.getElementById('matricula').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let carrera = document.getElementById('carrera').value;

    let estudiante = new Estudiante(matricula, nombre, apellido, carrera);
    arrayEstudiantes.push(estudiante);

    storage.asignar('arrayEstudiantes', arrayEstudiantes);
    mostrarTabla();
}

function mostrarTabla() {
    let tabla = document.getElementById('tabla');
    // Limpiar la tabla antes de agregar las filas
    tabla.innerHTML = '';
    
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        tabla.innerHTML += `<tr>
            <td>${i+1}</td>
            <td><input id="matricula${i}" value="${arrayEstudiantes[i].matricula}" disabled /></td>
            <td><input id="nombre${i}" value="${arrayEstudiantes[i].nombre}" disabled /></td>
            <td><input id="apellido${i}" value="${arrayEstudiantes[i].apellido}" disabled /></td>
            <td><input id="carrera${i}" value="${arrayEstudiantes[i].carrera}" disabled /></td>
            <td><button id="editar${i}" class="btn btn-warning">Editar</button><button id="guardar${i}" class="btn btn-success" style="display: none;">Guardar</button></td>
            <td><button id="eliminar${i}" class="btn btn-danger">Eliminar</button></td>
        </tr>`;
    }

    // Asignar funciones a los botones después de generar la tabla
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        document.getElementById(`editar${i}`).addEventListener('click', () => editarEstudiante(i));
        document.getElementById(`guardar${i}`).addEventListener('click', () => guardarEstudiante(i));
        document.getElementById(`eliminar${i}`).addEventListener('click', () => eliminarEstudiante(i));
    }
}

function editarEstudiante(index) {
    document.getElementById(`matricula${index}`).disabled = false;
    document.getElementById(`nombre${index}`).disabled = false;
    document.getElementById(`apellido${index}`).disabled = false;
    document.getElementById(`carrera${index}`).disabled = false;

    document.getElementById(`editar${index}`).style.display = 'none';
    document.getElementById(`guardar${index}`).style.display = 'block';
}

function guardarEstudiante(index) {
    arrayEstudiantes[index].matricula = document.getElementById(`matricula${index}`).value;
    arrayEstudiantes[index].nombre = document.getElementById(`nombre${index}`).value;
    arrayEstudiantes[index].apellido = document.getElementById(`apellido${index}`).value;
    arrayEstudiantes[index].carrera = document.getElementById(`carrera${index}`).value;

    storage.asignar('arrayEstudiantes', arrayEstudiantes);
    mostrarTabla();

    document.getElementById(`editar${index}`).style.display = 'block';
    document.getElementById(`guardar${index}`).style.display = 'none';
}

function eliminarEstudiante(index) {
    arrayEstudiantes.splice(index, 1);
    storage.asignar('arrayEstudiantes', arrayEstudiantes);
    mostrarTabla();
}
