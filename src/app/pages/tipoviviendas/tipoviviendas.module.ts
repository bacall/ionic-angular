import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoviviendasPageRoutingModule } from './tipoviviendas-routing.module';

import { TipoviviendasPage } from './tipoviviendas.page';
import { ComponentsModule } from "../../components/components.module";
import { SharedpipesModule } from '../../sharedpipes/sharedpipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoviviendasPageRoutingModule,
    ComponentsModule,
    IonicModule,
    SharedpipesModule
  ],
  declarations: [TipoviviendasPage]
})
export class TipoviviendasPageModule {}
