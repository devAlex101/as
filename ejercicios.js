const ejercicio1 = function () {
  var nombre = prompt("Ingrese su nombre");
  console.log("Hola, " + nombre);
};

const ejercicio2 = function () {
  var radCirculo = prompt("Ingrese el radio del circulo: ");
  alert("El perimetro del circulo es: " + radCirculo * 2 * Math.PI);
  var area = Math.pow(radCirculo, 2) * Math.PI;
  alert("El area del circulo es: " + area.toFixed(1));
};

const ejercicio3 = function () {
  //habia un error al ingresar datos se trataban como cadenas de texto
  var nota = 0,
    r = 0,
    a = 0,
    c = 0;
  for (var i = 1; i <= 4; i++) {
    a = prompt("Ingrese la nota: #" + i);
    nota += Number(a); //concatenando
    c++;
  }
  r = nota / c;
  alert("El promedio de las " + c + " notas , es de : " + r);
};

const ejercicio4 = function () {
  var pulgadas = 2.54;
  var cm = Number(prompt("Ingrese las pulgadas : "));
  var res = cm / 2.54;
  alert(
    "Los " + cm + " ingresadas, equivalen a " + res.toFixed(4) + " pulgadas"
  );
};

const ejercicio5 = function () {
  var entrada = Number(prompt("Ingrese un numero: "));
  var cadena = entrada.toString();
  var longitud = cadena.length;
  var single = 0;
  var nuevoNumero = 0;

  for (var i = longitud; i >= 1; i--) {
    single = entrada % 10;
    entrada = Math.floor(entrada / 10);
    nuevoNumero = nuevoNumero + single * Math.pow(10, i);
  }
  nuevoNumero = nuevoNumero / 10;
  alert("El nuevo numero es : " + nuevoNumero);
};

const ejercicio6 = function () {
  var a = Number(prompt("Ingrese un cateto: "));
  var b = Number(prompt("Ingrese el otro cateto: "));

  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  alert("La hipotenusa es: " + c);
};

const ejercicio7 = function(){
    var horas = Number(prompt("Ingrese la hora actual: "));
    var aumento = Number(prompt("Ingrese la cantidad de horas: "));

    var horaFutura=0;
    horaFutura = (horas + aumento)%24 ;


    alert("La hora futura es: "+horaFutura);
    
    
};

const ejercicio8 = function(){
    var numReal = Math.abs(Number(prompt("Ingrese el numero real: ")));
    var numEntero = Math.floor(numReal);

    var resultado = numReal - numEntero
    
    alert  (resultado);
};

const ejercicio9= function(){
    var nc = 0, nf=0, nc=0;
    var c1 = (Number(prompt("Ingrese la nota certamen1: ")));
    var c2 = (Number(prompt("Ingrese la nota certamen2: ")));
    var c3 = (Number(prompt("Ingrese nota de laboratorio: ")));

    var nl = c3;
    nc = (c1+c2+c3)/3 ;
    nf = (nc*0.7)+(nl*0.3);

    alert("Necesita nota "+(100-nf)+" en el certamen 3");

};

ejercicio9();
