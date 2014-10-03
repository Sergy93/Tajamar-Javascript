var valores = [];

var calcularMedia = function () {
    this.media = (sumar() / valores.length);
};

function sumar() {
    var suma = 0;
    for (var i = 0; i < valores.length; i++) {
        suma += valores[i];
    }
    return suma;
}

function mostrarMedia(objMedia) {
    document.writeln("La media es " + objMedia.media);
}

(function () {
    //Una de las dos:

    //Opcion Sergio.
    while (true) {

        var valor = prompt("Introduce un nuevo número:");

        if (isNaN(valor)) {
            break;
        }
        valores.push(Number(valor));
    }

    //Opcion Esther.
    //do {
    //    if (typeof (valor) != "undefined") valores.push(Number(valor));

    //    var valor = prompt("Introduce un nuevo número:");

    //} while (!isNaN(valor));

    document.writeln("La suma es " + sumar() + "<br/>");
    mostrarMedia(new calcularMedia);

})();