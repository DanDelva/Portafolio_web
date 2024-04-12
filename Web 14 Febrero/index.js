var letra = document.getElementById('letra');
letra.addEventListener('keyup', function(){
div1.innerHTML = letra.value;
});



var div1 = document.querySelector('#div1');
var fondo = document.querySelector('#fondo');
fondo.addEventListener('mousemove', function(){
var nuevoFondo = fondo.value;
div1.style.background = nuevoFondo;
});
var texto = document.querySelector('#texto');
texto.addEventListener('change',() => {
var nuevoColor = texto.value;
div1.style.color = nuevoColor;
});
var fuente = document.querySelector('#fuente');
fuente.addEventListener('change', () => {
var nuevaFuente = fuente.value;
div1.style.fontSize = nuevaFuente+'px';
});

var alto = document.querySelector('#alto');
alto.addEventListener('change', () => {
    var nuevoAlto= alto.value;
    div1.style.height = nuevoAlto+'px';
    });
    var ancho = document.querySelector('#ancho');
    ancho.addEventListener('change', () => {
        var nuevoAncho = ancho.value;
        div1.style.width = nuevoAncho+'px';
        });
        var borde = document.querySelector('#borde');
        borde.addEventListener('change', () => {
            var nuevoBorde = borde.value;
            div1.style.border = nuevoBorde+'px solid black';
            });
