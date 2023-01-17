import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'vivienda/:tipo',
    loadChildren: () => import('./pages/tipoviviendas/tipoviviendas.module').then( m => m.TipoviviendasPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'zonas/otras-ciudades/:ciudad',
    loadChildren: () => import('./pages/otrasciudades/otrasciudades.module').then( m => m.OtrasciudadesPageModule)
  },
  {
    path: 'quienes',
    loadChildren: () => import('./pages/quienes/quienes.module').then( m => m.QuienesPageModule)
  },
  {
    path: 'contactar',
    loadChildren: () => import('./pages/contactar/contactar.module').then( m => m.ContactarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
