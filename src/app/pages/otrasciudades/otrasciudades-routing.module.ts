import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtrasciudadesPage } from './otrasciudades.page';

const routes: Routes = [
  {
    path: '',
    component: OtrasciudadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtrasciudadesPageRoutingModule {}
