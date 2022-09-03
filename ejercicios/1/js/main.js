console.log("estoy en la carpeta js")

/* ---------------------------------------------------------------------------- */
/*  DOM : Document Object Model -> document (adentro de window) -> página web   */
/* ---------------------------------------------------------------------------- */
var titulo = window.document.getElementById("mititulo")
let miInput = window.document.getElementById("inputcolor")
console.dir('aaa',titulo)
// console.log(miInput.value)

// titulo.style.color = 'red'


function cambiarTitulo(){
    titulo.innerHTML= "lo modifique con javascript" 
}
function cambiarColor(){
    titulo.style.color = 'red'
}

/* -------------------------------------------------------------------------- */
/*  Nuevos constructores de funciones arrow function en ES6 - ECMAScript2015  */
/* -------------------------------------------------------------------------  */
console.log('\n/* JS5- funciones y expresiones */')
//representacion de la funcion
// function sumar(a,b) {
//     return a + b
// }
/* const sumar = function(a,b){
    return (a + b)
}
console.log(sumar(10, 5)) */

console.log('\n/* ES6- funciones flecha ó arrow function ó expresiones lambda */')
const sumar = (a,b) => {
    return (a + b)
}
console.log(sumar(10, 5))
