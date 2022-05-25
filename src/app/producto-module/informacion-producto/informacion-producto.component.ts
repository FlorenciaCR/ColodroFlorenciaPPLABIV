import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.scss']
})
export class InformacionProductoComponent implements OnInit {

  @Input() productoSeleccionadoMostrar : Producto= new Producto();
  constructor() { }

  ngOnInit(): void {
  }

}
