import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';

const routes: Routes = [
  { path: 'alta', component: AltaProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoModuleRoutingModule { }
