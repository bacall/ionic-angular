import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtrasciudadesPageRoutingModule } from './otrasciudades-routing.module';
import { ComponentsModule } from "../../components/components.module";
import { OtrasciudadesPage } from './otrasciudades.page';
import { SharedpipesModule } from '../../sharedpipes/sharedpipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtrasciudadesPageRoutingModule,
    ComponentsModule,
    SharedpipesModule
  ],
  declarations: [OtrasciudadesPage]
})
export class OtrasciudadesPageModule {}
