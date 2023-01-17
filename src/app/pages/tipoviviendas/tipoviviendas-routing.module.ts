import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoviviendasPage } from './tipoviviendas.page';
const routes: Routes = [
  {
    path: '',
    component: TipoviviendasPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoviviendasPageRoutingModule {}
