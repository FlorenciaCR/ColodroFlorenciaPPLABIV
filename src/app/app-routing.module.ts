import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'bienvenida', component:BienvenidaComponent  },
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
   //LAZY LOADING
   {
    path: 'producto',e
    loadChildren: () => import ('./producto-module/producto-module.module').then(m => m.ProductoModuleModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
