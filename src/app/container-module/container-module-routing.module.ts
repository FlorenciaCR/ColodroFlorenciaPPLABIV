import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from './abm-container/abm-container.component';

const routes: Routes = [{ 
  path: 'abmcontainer', component: AbmContainerComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerModuleRoutingModule { }
