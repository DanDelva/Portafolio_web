import {persona} from './persona.js'
import {Combo} from './Combo.js'

const benny = new persona ('Mopri','Juarez', 68, 1.80);
const Micochi = new persona ('Micochi','Loco', 82, 1.70);

console.log(benny.imc());
console.log(Micochi.saludar());

let arrayValores = [];

let btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
    let valores= document.querySelector('#valores').value;
    arrayValores = valores.split(',');
    const colores = new Combo('cmbColores','colores','text-danger',arrayValores);
    document.getElementById('div1').innerHTML =colores.mostrar();
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', ()=>{
    if (arrayValores.length > 0) {
        arrayValores.pop();
        const colores = new Combo('cmbColores','colores','text-danger',arrayValores);
        document.getElementById('div1').innerHTML =colores.mostrar();
    }
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', ()=>{
    localStorage.setItem('colores', JSON.stringify(arrayValores));
});
