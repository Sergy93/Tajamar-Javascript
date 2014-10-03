var alumnos = [];

function anadirAlumno() {
    var alumno = [];

    alumno[0] = document.getElementById("nombre").value;
    alumno[1] = Number(document.getElementById("nota").value);
    alumno[2] = Number(document.getElementById("edad").value);

    if (alumno[0] && alumno[1] && alumno[2] && !isNaN(alumno[1]) && !isNaN(alumno[2])) {
        alumnos.push(alumno);
    }

    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("edad").value = "";
}

function mostrarAlumnos() {
    var lista = document.getElementById("lista");

    if (alumnos.length < 1) {
        lista.innerHTML = "<li> No hay alumnos que mostrar </li>";
    } else {
        lista.innerHTML = "";
        for (var i = 0; i < alumnos.length; i++) {
            lista.innerHTML = lista.innerHTML += "<li onclick='cambiarElegido(" + i + ")'> <strong> Nombre: </strong>" + alumnos[i][0] + "<strong> Nota: </strong>" + alumnos[i][1] + "<strong> Edad: </strong>" + alumnos[i][2] + " </li>";
        }
    }
}

function cambiarElegido(idElegido) {
    var mostrar = document.getElementById('mostrar');

    var alumno = alumnos[idElegido];

    mostrar.innerHTML = "<strong> Nombre: </strong>" + alumno[0] + "<br/><br/><strong> Nota: </strong>" + alumno[1] + "<br/><br/><strong> Edad: </strong>" + alumno[2];
}

function calcularMedia() {
    var total = 0;

    if (alumnos.length < 1) {
        mostrar.innerHTML = "<li> No hay alumnos que mostrar </li>";
    } else {

        for (var i = 0; i < alumnos.length; i++) {
            total += alumnos[i][1];
        }

        mostrar.innerHTML = "La media de notas es de " + total / alumnos.length;
    }
}

(function () {
    mostrarAlumnos();
})();