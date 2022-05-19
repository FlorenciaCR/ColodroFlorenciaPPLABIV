import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  productoSeleccRecibido : Producto=new Producto();
  constructor() { }

  ngOnInit(): void {
  }

  padreRecibeEventoProducto(productoSeleccionado : Producto)
  {
    console.log('producto seleccionado en la tabla listado fue:'+productoSeleccionado.descripcion);
    this.productoSeleccRecibido = productoSeleccionado;
  }

}
