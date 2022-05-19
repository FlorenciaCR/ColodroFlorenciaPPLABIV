import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerModuleRoutingModule } from './container-module-routing.module';
import { AltaContainerComponent } from './alta-container/alta-container.component';
import { EliminarContainerComponent } from './eliminar-container/eliminar-container.component';
import { ListadoContainerComponent } from './listado-container/listado-container.component';
import { ModificarContainerComponent } from './modificar-container/modificar-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbmContainerComponent } from './abm-container/abm-container.component';


@NgModule({
  declarations: [
    AltaContainerComponent,
    EliminarContainerComponent,
    ListadoContainerComponent,
    ModificarContainerComponent,
    AbmContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContainerModuleModule { }
