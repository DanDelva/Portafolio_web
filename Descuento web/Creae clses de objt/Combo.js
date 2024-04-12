export class Combo{
    id=''
    nombre=''
    clase=''
    opciones=[]
    constructor( i, n, c, o){
        this.id= i
        this.nombre= n
        this.clase=c
        this.opciones=o
    }
    mostrar(){
        let select = '<select id="'+this.id+'" name="'+this.nombre+'" class="form-select '+this.clase+'">'
        for( let i=0; i< this.opciones.length; i++){
            select +='<option value="'+this.opciones[i]+'">'+this.opciones[i]+'</option>';
        }
        select +='</select>';
        return select;
    }
}
