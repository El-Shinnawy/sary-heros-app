import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'heros',
    loadChildren: () => import('./modules/heros/heros.module').then(m => m.HerosModule)
  },
  {
    path: '',
    redirectTo: 'heros',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
