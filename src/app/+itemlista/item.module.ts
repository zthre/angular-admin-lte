import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { ListaRoutingModule } from './lista-roouting.module';
import { ItemComponent } from './item/item.component';

//import { ListaModule as MkListaModule, BoxModule, DropdownModule } from 'angular-admin-lte';
import { BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
   // ListaRoutingModule,
    BoxModule/*,
    MkTabsModule,
    BoxModule,
    DropdownModule*/
  ],
  declarations: [ItemComponent]
})
export class ItemModule { }
