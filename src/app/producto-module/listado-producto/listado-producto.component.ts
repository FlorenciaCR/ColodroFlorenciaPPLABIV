import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.scss']
})
export class ListadoProductoComponent implements OnInit {

  listaProductosColeccion:Producto[]=[new Producto()];
  @Output() productoSeleccionadoEvento = new EventEmitter<any>();

  constructor(private firestore : FirebaseService) { }

  ngOnInit(): void {
    this.firestore.obtenerTodos('productosCollection').subscribe(dataJson=>{


      console.log("obtener todos id")

      let listadoProductosTraidos = dataJson.map(objProdJson=>{
        let productoObj = new Producto(objProdJson.codigo,
                                        objProdJson.descripcion,
                                        objProdJson.precio,
                                        objProdJson.stock,
                                        objProdJson.paisDeOrigen,
                                        objProdJson.comestible
                                        );
                                        
        return productoObj;
      })
      this.listaProductosColeccion = listadoProductosTraidos;
      console.log(this.listaProductosColeccion)
    })
  }


  lanzarEventoProductoSeleccionado(producto:Producto){
    this.productoSeleccionadoEvento.emit(producto);
    //console.log('producto selec'+ producto.descripcion);
  }

  

}
