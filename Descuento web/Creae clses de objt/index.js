import {persona} from './persona.js'
import {Combo} from './Combo.js'
const benny = new persona ('Mopri','Juarez', 68, 1.80);
const Micochi = new persona ('Micochi','Loco', 82, 1.70);
console.log(benny.imc());
console.log(Micochi.saludar());
//const colores = new Combo('cmbColores','colores','text-danger',['azul', 'rojo', 'verde'])
//document.getElementById('div1').innerHTML =colores.mostrar();

let btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
    let valores= document.querySelector('#valores').value;
    let arrayValores = valores.split(',');
    const colores=
    new Combo('cmbColores','colores','text-danger',arrayValores);
document.getElementById('div1').innerHTML =colores.mostrar();


});
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ()=>{
    // Aquí puedes agregar la funcionalidad para el botón btn2
    // Por ejemplo, eliminar el último color añadido
    if (arrayValores.length > 0) {
        arrayValores.pop();
        const colores=
        new Combo('cmbColores','colores','text-danger',arrayValores);
        document.getElementById('div1').innerHTML =colores.mostrar();
    }
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', ()=>{
    // Aquí puedes agregar la funcionalidad para el botón btn3
    // Por ejemplo, guardar los colores en local storage
    localStorage.setItem('colores', JSON.stringify(arrayValores));
});