export class persona {
    //Atibutos y metodos
    nombre=''
    apellidos=''
    peso='0'
    altura='0'
    constructor(nom,ape,pe,al){
    this.nombre= nom;
    this.apellidos= ape;
    this.peso= pe;
    this.altura= al;
    }
    saludar(){
    return 'Hola,  soy  ' + this.nombre+' '+this.apellidos;
    }
    imc(){
      return (this.peso/(this.altura * this.altura));  
    }
}
    