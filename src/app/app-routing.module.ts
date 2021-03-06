import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'gobierno', loadChildren: './gobierno/gobierno.module#GobiernoPageModule'},
  { path: 'gobernante', loadChildren: './gobernante/gobernante.module#GobernantePageModule'},
  { path: 'servicios', loadChildren: './servicios/servicios.module#ServiciosPageModule' },
  { path: 'cultura', loadChildren: './cultura/cultura.module#CulturaPageModule' },
  { path: 'entretenimiento', loadChildren: './entretenimiento/entretenimiento.module#EntretenimientoPageModule' },
  { path: 'gobernante', loadChildren: './gobernante/gobernante.module#GobernantePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
