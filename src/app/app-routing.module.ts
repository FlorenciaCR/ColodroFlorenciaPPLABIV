import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'bienvenida', component:BienvenidaComponent  },
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
   //LAZY LOADING
   {
    path: 'producto',
    loadChildren: () => import ('./producto-module/producto-module.module').then(m => m.ProductoModuleModule)
   },
   {
    path: 'container', 
    loadChildren: () => import ('./container-module/container-module.module').then(m => m.ContainerModuleModule),
    canActivate:[AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
