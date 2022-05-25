import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoModuleRoutingModule } from './producto-module-routing.module';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { InformacionPaisComponent } from './informacion-pais/informacion-pais.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { InformacionProductoComponent } from './informacion-producto/informacion-producto.component';


@NgModule({
  declarations: [
    DetalleProductoComponent,
    ListadoProductoComponent,
    InformacionProductoComponent,
    InformacionPaisComponent
  ],
  imports: [
    CommonModule,
    ProductoModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductoModuleModule { }
