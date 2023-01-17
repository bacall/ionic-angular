import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { ComponentsModule } from "../../components/components.module";
import { SharedpipesModule } from '../../sharedpipes/sharedpipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    ComponentsModule,
    SharedpipesModule
  ],
  declarations: [DetallePage]
})
export class DetallePageModule {}
