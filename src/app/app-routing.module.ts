import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'crear-ref',
    loadChildren: () => import('./crear-ref/crear-ref.module').then( m => m.CrearRefPageModule)
  },
  {
    path: 'editar-ref/:id',
    loadChildren: () => import('./editar-ref/editar-ref.module').then( m => m.EditarRefPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
