var url = "http://alumnos-mcsd2014.azure-mobile.net/tables/alumnos";

function cargar() {
    var ajax = new XMLHttpRequest();

    ajax.open("get", url);

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            var res = ajax.responseText;
            var datos = eval(res);

            pintarTabla(datos);
        }
    }
    ajax.send(null);
}

function pintarTabla(datos) {
    var tabla = document.getElementById("datos");

    while (tabla.childNodes.length > 0) {
        tabla.removeChild(tabla.firstChild);
    }

    for (var i = 0; i < datos.length; i++) {
        var fila = document.createElement('tr');

        //filas
        var c1 = document.createElement("td");
        var c2 = document.createElement("td");
        var c3 = document.createElement("td");

        //texto de cada fila
        var t1 = document.createTextNode(datos[i].nombre);
        var t2 = document.createTextNode(datos[i].edad);
        var t3 = document.createTextNode(datos[i].nota);

        //asignamos el texto a las filas
        c1.appendChild(t1);
        c2.appendChild(t2);
        c3.appendChild(t3);

        //Añadimos los nodos a la fila y esta a la tabla
        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);
    }
}

(function () {
    cargar();
})();