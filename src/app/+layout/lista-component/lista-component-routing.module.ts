import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista-component.component';
import { DetalleComponent } from './detalle/detalle.component';



const routes: Routes = [{
    path: '',
    component: ListaComponent//,
    //loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleComponentModule)
  }];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ListaRoutingModule  {  }