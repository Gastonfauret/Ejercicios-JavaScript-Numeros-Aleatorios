/* Funcion que genera un numero aleatorio entre 0 y el numero que le
pasemos como parametro (superiorLimit) */

function randomIntGenerator (superiorLimit) {
    return Math.floor(Math.random() * superiorLimit);
}

/* El ciclo for nos generara, en este caso, 5 numeros aleatoria.
El ciclo llamara 5 veces a la funcion definida arriba. */

for (var i = 0; i < 5; i++) {
    console.log(randomIntGenerator(5)); // Genera 5 numeros aleatorios entre 0 y 5 (Sin incluirlo).
}

/* Numeros Enteros Aleatorios en Un Rango */

function randomRange (lowerLimit, upperLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
}

console.log(randomRange(3, 8)); // Genera un numero aleatorio entre 3 y 8.

for (var i = 0; i < 5; i++) {
    console.log(randomRange(3, 8)); // Genera 5 numeros aleatorios entre 3 y 8 (incluyendolo);
}

/* Funcion ParseInt */
/* Convierte una cadena de strings a numero entero.
Tambien convierte un numero decimal a  numero entero, 
redondeando hacia abajo.*/

console.log(parseInt("56")); // 56
console.log(parseInt(5.6)); // 5
console.log(parseInt("abc")); // NaN (Not a Number).

/*Ejemplos */

var a = "5";
var b = "8";
console.log(a + b); // 58

var a = parseInt("5");
var b = parseInt("8");
console.log(a + b); // 13

/*Operador condicional (ternario)  */

// Funcion Tradicional

function returnLower (x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(returnLower(1, 3)); // 1

// Con operador condicional o ternario

function returnLower(x, y) {
    return x < y ? x : y;
}

console.log(returnLower(7, 2)); // 2
// "?": Return. En este caso: Si (x < y) es true, retorna x.
//":": Sino. En este caso: Si (x < y) es false, retorna y.

/*Otro Ejemplo */

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3); // 27 (Se cumple la segunda opcion(b * 3))

var a = 15;
var b = 9;

console.log(a > b ? a + 2 : b * 3); // 17 (Se cumple la Primera opcion (a > b))
console.log(a > b ? "a es mayor a b" : "b es mayor a a"); // a es mayor a a

/* Multiples Operadores Condicionales */

function compareNumbers(a, b) {
    if (a === b) {
        return "a y b son iguales";
    } else if (a > b) {
        return "a es mayor que b";
    } else {
        return "b es mayor que a"
    }
}

console.log(compareNumbers(5, 9)); // b es mayor que a
console.log(compareNumbers(15, 9)); // a es mayor que b
console.log(compareNumbers(5, 5)); // a y b son iguales

// Con operador ternario

function compareNumbers(a, b) {
    return a == b ? `"a y b son iguales"` 
        : a > b ? "a es mayor que b" 
        : "b es mayor que a"; 
}

console.log(compareNumbers(3, 10)); // b es mayor que a
console.log(compareNumbers(13, 10)); // a es mayor que b
console.log(compareNumbers(3, 3)); // a y b son iguales

// Se puede usar interpolacion.

/*Congelar un Objeto */
/*Esto se usa para que no se pueda modificar un objeto, que no se
le pueda a
 */
