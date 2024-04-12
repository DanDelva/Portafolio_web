

function calcularPromedio() {
    var parcial1 = parseFloat(document.getElementById('parcial1').value);
    var parcial2 = parseFloat(document.getElementById('parcial2').value);
    var parcial3 = parseFloat(document.getElementById('parcial3').value);
    var ordinario = parseFloat(document.getElementById('ordinario').value);

    var promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    var promedioFinal = (promedioParciales + ordinario) / 2;
   
    var resultado = document.getElementById('resultado');
    resultado.innerText = 'El promedio final es: ' + promedioFinal.toFixed(2);

    if (promedioFinal <6) {
        resultado.style.color = 'red';
    } else {
        resultado.style.color = 'green';
    }
}