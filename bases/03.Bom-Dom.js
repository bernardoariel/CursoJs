/* ---------------------------------------------------------------------------- */
/*  BOM : Browser Object Model -> window -> navegador                           */
/*  DOM : Document Object Model -> document (adentro de window) -> página web   */
/* ---------------------------------------------------------------------------- */
console.log(window.innerWidth)
console.log(innerHeight)

console.log(window.outerWidth)
console.log(outerHeight)

let titulo = window.document.getElementById('titulo')// a traves del id
console.log(titulo)
titulo.innerHTML = 'modificado';

let titulo2 = window.document.getElementsByClassName('titulo2')[0]
console.log(titulo2)
titulo2.innerHTML = 'aaaa'
// array [] -> conjunto de valores
// un objeto {} -> propiedad y valor

let saludar = window.document.querySelector('#saludo')

console.log(saludar)
/* -------------------------------------------------- */
/*            Acceso al elemento de lista             */
/* -------------------------------------------------- */
// aca tomo el array de elementos me devuelve un array de li
var items = document.querySelectorAll('li')
console.log(items)
const colores = ['orange','red','blue','green','brown','blueviolet']
                // 0      1      2      3       4
                /* items.length con esto obtengo la cantidad del array */
for(let i=0; i < items.length; i++){
    
    if(i < 4){
        items[i].innerHTML = 'este es el caramelo nro. ' + i;
        items[i].style.color = colores[i]
    }
}
 /* -------------------------------------------------- */
 /*         Creación de un elemento de parrafo         */
 /* -------------------------------------------------- */

 let parrafo = document.createElement('p') //aca lo creamos en el ambito de JS
 parrafo.innerHTML = 'este es un parrafo'
 console.log(parrafo)
 parrafo.style.color = 'yellow'
parrafo.style.backgroundColor = 'black'
parrafo.style.borderRadius = '15px'
parrafo.style.padding = '10px'
parrafo.style.fontSize = '20px'
parrafo.id = 'parrafo'
parrafo.classList.add('txt')
 document.body.appendChild(parrafo)