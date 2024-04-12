var btn = document.getElementById('btn1');
btn.addEventListener('click', function(){
    var num = document.querySelector('#num').value;
    var sumaPar = 0;
    var sumaImpar = 0;
    var sumaMul = 0;
    for(var i=50; i<=num; i++){
        if(i % 2 ==0){    //i porque es la variable de incremento
            sumaPar = sumaPar +i;
        }
        else{
            sumaImpar += i;
        }
        if(i % 5== 0){
            sumaMul = sumaMul +i;
            //sumaImpar += i;
        }
    }
    var div1 =document.getElementById('div1');
    var div2 =document.getElementById('div2');
    var div3 =document.getElementById('div3');
    div1.innerHTML = "suma de pares:"+sumaPar;
    div2.innerHTML = "suma de Impares:"+sumaImpar;
    div3.innerHTML = "suma de Multiplos de 5:"+sumaMul;
    div1.style.color = 'black';
    div2.style.color = 'black';
    div3.style.color = 'black';
    var numeros = [sumaPar,sumaImpar,sumaMul];
    console.log(numeros);
    var ordenados= numeros.sort(function(a, b) {
        return a - b;
    });
    console.log(ordenados);
    console.log(ordenados[0]);
    //console.log(numeros.indexOf(numeros[ordenados.indexOf][ordenadoos.indexOf(105)]));
  
    var mayor; var enmedio; var menor;
    if(sumaPar > sumaImpar){
        mayor = sumaPar;
        div1.style.color ='green'
        if(mayor < sumaMul){
            mayor = sumaMul;
            div3.style.color ='green'
        }
    }
    else{
        mayor= sumaImpar;
        div2.style.color = 'green';
    }
});
