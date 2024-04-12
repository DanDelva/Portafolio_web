//Objetos: atributos y metodos
//en js se puede crear objetos sin necesisad de tener una clase
const persona = {
    nombre:'Goku',
    Apellidos: 'perez',
    edad: 15,
    saludar: function(){
        return 'Hola, soy  '+this.nombre
    }
}
const persona2 = {
    nombre:'Mopri',
    Apellidos: 'Cruj',
    edad: 25,
    saludar: function(){
        return 'Hola, soy  '+this.nombre
    }
}
let personas = [persona,persona2]
console.log(personas[0].saludar());

let tabla='';
persona.nombre = 'pablo';
for(let i = 0; i<personas.length; i++){
tabla += '<tr><td>'+(i+1)+'</td><td>'
+personas[i].nombre+'</td><td>'
+personas[i].Apellidos+'</td><td>'
+personas[i].edad+'</td><tr>'
}
document.getElementById('tabla').innerHTML = tabla;
