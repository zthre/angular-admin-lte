import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-roouting.module';
import { ListaComponent } from './lista.component';

//import { ListaModule as MkListaModule, BoxModule, DropdownModule } from 'angular-admin-lte';
import { BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    ListaRoutingModule,
    BoxModule/*,
    MkTabsModule,
    BoxModule,
    DropdownModule*/
  ],
  declarations: [ListaComponent]
})
export class ListaModule { }
