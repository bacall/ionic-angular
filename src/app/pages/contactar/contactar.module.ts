import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactarPageRoutingModule } from './contactar-routing.module';
import { ContactarPage } from './contactar.page';
import { ComponentsModule } from "../../components/components.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ContactarPageRoutingModule,
    HttpClientModule

  ],
  declarations: [ContactarPage]
})
export class ContactarPageModule {}
