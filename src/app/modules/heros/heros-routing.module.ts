import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerosComponent } from './heros.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HerosComponent,
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
