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
document.getElementById('btnGuardar').addEventListener('click', guardarEstudiante);

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
            <td>${arrayEstudiantes[i].matricula}</td>
            <td>${arrayEstudiantes[i].nombre}</td>
            <td>${arrayEstudiantes[i].apellido}</td>
            <td>${arrayEstudiantes[i].carrera}</td>
            <td><button id="editar${i}" class="btn btn-warning">Editar</button></td>
            <td><button id="eliminar${i}" class="btn btn-danger">Eliminar</button></td>
        </tr>`;
    }

    // Asignar funciones a los botones después de generar la tabla
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        document.getElementById(`editar${i}`).addEventListener('click', () => editarEstudiante(i));
        document.getElementById(`eliminar${i}`).addEventListener('click', () => eliminarEstudiante(i));
    }
}



function editarEstudiante(index) {
    let estudiante = arrayEstudiantes[index];
    document.getElementById('matricula').value = estudiante.matricula;
    document.getElementById('nombre').value = estudiante.nombre;
    document.getElementById('apellido').value = estudiante.apellido;
    document.getElementById('carrera').value = estudiante.carrera;

    document.getElementById('btnAgregar').style.display = 'none';
    document.getElementById('btnGuardar').style.display = 'block';

    storage.asignar('indexEditar', index);
}

function guardarEstudiante() {
    let index = storage.obtener('indexEditar');
    arrayEstudiantes[index].matricula = document.getElementById('matricula').value;
    arrayEstudiantes[index].nombre = document.getElementById('nombre').value;
    arrayEstudiantes[index].apellido = document.getElementById('apellido').value;
    arrayEstudiantes[index].carrera = document.getElementById('carrera').value;

    storage.asignar('arrayEstudiantes', arrayEstudiantes);
    mostrarTabla();

    document.getElementById('btnAgregar').style.display = 'block';
    document.getElementById('btnGuardar').style.display = 'none';
}

function eliminarEstudiante(index) {
    arrayEstudiantes.splice(index, 1);
    storage.asignar('arrayEstudiantes', arrayEstudiantes);
    mostrarTabla();
}
