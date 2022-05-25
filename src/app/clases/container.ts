export class Container {
    
    id:string;
    codigo:string;
    capacidad:number;
    marca:string;
    
    public constructor(id:string='',codigo:string='',marca:string='',capacidad:number=0)
    {
        this.id=id
        this.codigo=codigo;
        this.marca=marca;
        this.capacidad=capacidad;
    }
}