var btn = document.querySelector('#btnCalcular');
btn.addEventListener('click', function(){
    var fin = Number(document.querySelector('#fin').value);
    calcularSumatorias(50, fin);
});

function calcularSumatorias(inicio, fin){
    var sumPares = 0;
    var sumImpares = 0;
    var sumMultiplos = 0;

    for(var i=inicio; i<=fin; i++) {
        if(i % 2 == 0) {
            sumPares += i;
        } else {
            sumImpares += i;
        }
        if(i % 5 == 0) {
            sumMultiplos += i;
        }
    }

    var sumParesDiv = document.getElementById('sumPares');
    var sumImparesDiv = document.getElementById('sumImpares');
    var sumMultiplosDiv = document.getElementById('sumMultiplos');

    sumParesDiv.textContent = 'La sumatoria de los números pares es: ' + sumPares;
    sumImparesDiv.textContent = 'La sumatoria de los números impares es: ' + sumImpares;
    sumMultiplosDiv.textContent = 'La sumatoria de los múltiplos de 5 es: ' + sumMultiplos;

    var maxSum = Math.max(sumPares, sumImpares, sumMultiplos);
    var minSum = Math.min(sumPares, sumImpares, sumMultiplos);

    if(sumPares == maxSum) {
        sumParesDiv.style.color = 'green';
    } else if(sumPares == minSum) {
        sumParesDiv.style.color = 'red';
    } else {
        sumParesDiv.style.border = '2px dotted purple';
    }

    if(sumImpares == maxSum) {
        sumImparesDiv.style.color = 'green';
    } else if(sumImpares == minSum) {
        sumImparesDiv.style.color = 'red';
    } else {
        sumImparesDiv.style.border = '2px dotted purple';
    }

    if(sumMultiplos == maxSum) {
        sumMultiplosDiv.style.color = 'green';
    } else if(sumMultiplos == minSum) {
        sumMultiplosDiv.style.color = 'red';
    } else {
        sumMultiplosDiv.style.border = '2px dotted purple';
    }
}
