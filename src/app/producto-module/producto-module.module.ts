import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoModuleRoutingModule } from './producto-module-routing.module';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';


@NgModule({
  declarations: [
    AltaProductoComponent,
    ListadoPaisesComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoModuleModule { }
