// EJEMPLO !

//function esPar(numero1) {
//    return numero1 % 2 == 0;
//}

//var numero = prompt("Dime un numero");

//var resul = esPar(numero) ? "es par" : "no es par";

//document.writeln("El numero " + numero + " " + resul);

//_________________________________________________________________________

// EJEMPLO 2

//var array1 = new Array(4);
//var array2 = [];
//var array3 = [1, 2, 6, 8, 7];

//array2[0] = "Pepe";
//array1[0] = "Eva";

//for (var i = 0; i < array3.length; i++) {
//    document.write(array3[i]);
//}

//_________________________________________________________________________


// EJEMPLO 3

//var n1 = prompt("Dime el numero 1");
//var n2 = prompt("Dime el numero 2");

//if (isNaN(n1) || isNaN(n2)) {

//    alert("Error, solo números.");
//} else {
//    var n3 = n1 / n2;

//    if (isFinite(n3)) {
//        alert(n3);
//    } else {
//        alert("La operacion es infinita");
//    }
//}

//________________________________________________________________________

//EJEMPLO 4

//var array1 = new Array(4);
//var array2 = [];
//var array3 = [1, 2, 6, 8, 7];

//array2[0] = "Pepe";
//array1[0] = "Eva";

//array3 = array3.concat(array2);
//array3.push("Hola Don Pepito");

//array3.splice(array3.indexOf(6), 2, "adios", "don", "jose");

//for (var i = 0; i < array3.length; i++) {
//    document.write(array3[i] + "<br />");
//}

//_______________________________________________________________________

//EJEMPLO 5

//function hola(msg) {
//    alert(msg);
//}

//var hola2 = function (msg) {
//    alert(msg);
//}

//hola('Hola');

//hola2("Hola");

//hola2 = "Hola Don Pepito";

//var hola3 = hola;

//var pasar = function (objeto) {
//    alert(objeto);
//}

//var recibir = function (pasado) {
//    pasado("Estoy llamando a una función desde otra.");
//}

//recibir(pasar);

//_______________________________________________________________________

//EJEMPLO 6

//function alerta(msg) {
//    alert(msg);
//}

//alerta((function (animal1, animal2) { return animal1 + ' ama ' + animal2 })('gato', 'perro'));

//_______________________________________________________________________

//TRASTEO CON PROPIEDADES

//var original= {
//    prop: "uno",
//}

//var prueba = original;

////original.prop = "dos";

//alert(prueba.prop);

//_______________________________________________________________________

//EJEMPLO 7

//function sumar(n1, n2) {
//    this.resultado = n1 + n2;
//    return this.resultado;
//}

//(function () {
//    var r = sumar(15, 20);
//    alert(r);

//    var obj = { x: 22, y: 44 };

//    //apply
//    var args = [5, 23];
//    var rr = sumar.apply(obj, args);
//    var rrr = sumar.call(obj, 5, 23);

//    alert("Con apply = " + rr);
//    alert("Con call = " + rrr);
//})();

//_______________________________________________________________________

//EJEMPLO 8

//var obj = new Object;
//obj.nombre = "Sergio";
//obj.apellido = "Jimenez";

//var obj2 = { nombre: 'Sergio', apellido: 'Jimenez' };

//var obj3 = {};
//obj.nombre = "Sergio";
//obj.apellido = "Jimenez";

//function Persona(nombre, apellido) {
//    this.nombre = nombre || "nombreTest";
//    this.apellido = apellido || "jimenezTest";

//    this.escribir = function () {
//        alert(this.nombre + " " + this.apellido);
//    }
//}

//var p = new Persona("Sergio", "Jimenez");
//var p2 = new Persona();
//var p3 = new Persona(undefined, "Jimenez");

//p3.escribir();

//String.prototype.toJSON = function () {
//    return "Algo";
//}

//var hola = "hola";
//alert(hola.toJSON());

//Estudiante.prototype = new Persona;
//Estudiante.constructor = Estudiante;

//function Estudiante() {
//    this.cursor = "XXX";
//}

//var e = new Estudiante();

//alert(e instanceof Persona);
//alert(e.escribir());


var frame = document.getElementById("frame");

frame.innerHTML = history.previous;

