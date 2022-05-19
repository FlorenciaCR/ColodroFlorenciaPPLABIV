export class Producto {
    codigo:string;
    descripcion:string;
    precio:number;
    stock:number;
    paisDeOrigen:any;
    comestible:boolean;

    public constructor(codigo:string='',descripcion:string='',precio:number=0,stock:number=0,paisOrigen :any='',comestible:boolean=false )
    {
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;
        this.stock=stock;
        this.paisDeOrigen=paisOrigen;
        this.comestible=comestible;
    }
}