import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-component-routing.module';
import { ListaComponent } from './lista-component.component';

import { BoxModule } from 'angular-admin-lte';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
      CommonModule,
      ListaRoutingModule,
      BoxModule,
      FormsModule
    ],
    declarations: [ListaComponent]
  })
export class ListaComponentModule {}