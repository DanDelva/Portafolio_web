var div = document.querySelector('#res');
/*for(var i=1; i<=100; i++){ //Imprime hasta el 9 por menor a <10
//console.log(i);
div.innerHTML += i + ' <br>';
  //div.innerHTML = div.innerHTML + i ;
}*/

var fin = document.querySelector('#fin');
fin.addEventListener('keypress', function(event){
    console.log(event);
    if(event.charCode == 13){
        div.innerHTML = '';
        for(var i=1; i<=fin.value; i++){
        div.innerHTML += i + '  '; 
    }
    }

});