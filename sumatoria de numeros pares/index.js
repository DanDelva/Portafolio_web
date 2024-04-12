function calcular() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;
    
    switch (operacion) {
        case 'suma':
            resultado = 0;
            for (var i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    resultado += i;
                }
            }
            break;
        case 'promedio':
            var suma = 0;
            var contador = 0;
            for (var i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    suma += i;
                    contador++;
                }
            }
            resultado = suma / contador;
            break;
        case 'multiplicacion':
            resultado = 1;
            for (var i = num1; i <= num2; i++) {
                if (i % 2 == 0) {
                    resultado *= i;
                }
            }
            break;
    }

    document.getElementById('resultado').innerHTML = "El resultado es: " + resultado;
}
