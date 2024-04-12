var boton = document.getElementById("btn1"); //document hace referencia al html

boton.addEventListener('click', Operacion);
function  Operacion(){
var num1 = parseInt(document.getElementById("n1").value); //'var' declara nombre a la variable y se le asigna un nombre
var num2 = parseInt(document.getElementById("n2").value);
var opcion = document.getElementById('Operacion').value;
var resultado;
if(opcion == 1){// igual doble comparacion semi-esactas valores
    resultado = num1 + num2; //igual asigna valores
}
else if(opcion == 2){
    resultado = num1 - num2;
}
else if(opcion == 3){
 resultado = num1 * num2;
}
else{
    resultado = num1 / num2;
}


document.getElementById("resultado").innerHTML  = resultado; 
}