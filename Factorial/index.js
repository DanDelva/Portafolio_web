var div = document.querySelector('#res');
    var num = document.querySelector('#num');

    num.addEventListener('keypress', function(event){
        if(event.charCode == 13){
            var factorial = 1;
            for(var i=1; i<=num.value; i++){
                factorial *= i;
                //factorial = factorial * i;
                
                
            }
            for (var i = 1; i <= 5; i++) {
                div.innerHTML += "<h" + i + ">Hola a todos</h" + i + ">";
            }

            div.innerHTML = 'El factorial de ' + num.value + ' es ' + factorial;
        }
    });