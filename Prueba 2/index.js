
function generarNumeros() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  
  var resultado = "";
  for (var i = numero1; i >= 0; i--) {
    if (i % numero2 == 0) {
      resultado += "<div><b>" + i + " es múltiplo de " + numero2 + "</b></div>";
    } else {
      resultado += "<div>" + i + "no es multiplo de "+ numero2 + "</div>";
    }
  }
  
  document.getElementById("resultado").innerHTML = resultado;
}
