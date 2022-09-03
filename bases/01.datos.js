console.log('Bienvenidos al curso de JSAv');
// ES6 = ECMA SCRIPT 6

// var

/* var numero = 10;
var numero = 6;

console.log("el valor del numero almacenado es:", numero); */

//let y const

//let crearCaja = "10 manzanas"; //aca cree el lugar para guardar la informacion, luego le puse un valor
console.log('\n/* ES6 - let / const */')
let crearCaja; //estoy creando el lugar
crearCaja = "10 manzanas" // estoy cargando la caja
crearCaja = "12 manzanas";

//variable= es algo que varia en el tiempo
//constante = es inmutable
const PI = 3.14
const iva = 21
console.log(crearCaja)

let iva2 = 10;


//estructura de control

/* for(recibe valores){
    los repite
}
 */
// la primer parte del for "let i = 0" inicializamos
// es la condicion para que se efectue lo que esta adentro
// la tercera parte que se repita de cierta manera

/* for(let i = 500; i<=1000;i++ ){
    console.log(i)
} */
// for(let i = 500; i<=1000; i++ ){
//     console.log(i)
// }
// for(let i = 1000; i>=500;i-- ){
//     console.log(i)
// }

console.log('/* -------------------------------------- */')
//Bloque de código anónimo
// scope de las variables.... ambito de la variable
{
    var b = 5;
    let a = 5;
    a = "ariel";
    console.log("entre los parentesis",a);
    console.log("fuera de los parentesis",b);
    
    console.log("entre los parentesis",a);
}

let a = 10;


console.log("fuera de los parentesis",a)
console.log("fuera de los parentesis",b)
// para descargar la extension de es6
// https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets

// vbscript -> microsoft window
// javascript -> mozilla linux

//Bloque de código condicional
//valores booleanos  verdadero (true) o falso (false)
let existe = false;

if(existe) { //el condicional if consulta por verdadero o falso
    console.log('existe es verdadero')
}else{
    console.log('existe es falso')
}

let misaEdad = 21;
let apellido = 'baez'
if(misaEdad>18){

    console.log('es mayor')
    
    console.log(apellido)
}else{

    console.log('es mitai')
    
}
console.log(apellido)
console.log(misaEdad)

//Bloque de código funcional
function foo() { //la declaracion de algo por hacer
    //var c = 7
    let c = 7
    console.log("respuesta de la funcion",c)
    return c;
}

foo()

/* --------------------------------------------------------------------- */
/*               Variables, funciones y tipos de datos                   */
/* --------------------------------------------------------------------- */
//1) Tipo de datos primitivo: number, string y boolean -> Copia es por valor
//2) Tipo de datos objeto: array, object y function -> Copia es por referencia

/* ---------------------------------------------------------- */
//1)
/* Variables */
let nombre = 'Juan'
let existe2 = true;
let edad = 10;
console.log(nombre, typeof nombre) // que tipo de valor es
console.log(existe2, typeof existe2) // que tipo de valor es
console.log(edad, typeof edad) // que tipo de valor es

/**
 * array
 */

let numeros = [1,2,3,4,5,6]
let conjunto = [1,"1",5,true,foo(), "sol"]
let estudiantes = ["silvio","misa","luchi"]
console.log(estudiantes)
console.log(conjunto)
console.log(numeros)

/**
 * Objeto
 */

let notaEstudiante = {
    materia: 'fisica',
    nota: 10
}
console.log(notaEstudiante)

/* ---------------------------------------------------------- */
