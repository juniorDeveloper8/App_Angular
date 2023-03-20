import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  //FORMA DE REDIRECIONAR SI NO HAY NADA CON BUENAS PRACTICAS
  { path: '', component: HomeComponent  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
