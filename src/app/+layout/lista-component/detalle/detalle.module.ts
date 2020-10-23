import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { BoxModule } from 'angular-admin-lte';


@NgModule({
    declarations: [DetalleComponent],
    imports: [ CommonModule,
    DetalleRoutingModule,
    BoxModule ]
})
export class DetalleComponentModule {}