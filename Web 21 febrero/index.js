var btn = document.querySelector('#btnMostrar');
btn.addEventListener('click', function(){//que al presionar el boton nos muestre los resultados de las variables siguientes
var tabla = document.querySelector('#tabla').value;
var inicio = document.querySelector('#inicio').value;
var fin = document.querySelector('#fin').value;
    calcularTabla(tabla, inicio, fin);
//calcularTabla(tabla)anexar dos variables mas;
});


function calcularTabla(t, inicio, fin){
    var div = document.getElementById('res');
    var resultado = '';
    for(var i=inicio; i<=fin; i++){//for(var i=1; i<=10; i++){
    
    resultado += t+' x '+i+' = '+(t*i)+'<br>';   //resultado += t+' x '+i+' = '+(t*i)+'<br>';
    }
    div.innerHTML = resultado;
}

//Programa web que calcule la sumatoria de los numeros pares
//Comprendidos entre un rango de numeros
//2 input, 1 boton y 1 label