import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';
import { HerosComponent } from './heros.component';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HerosComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    HerosRoutingModule,
    SharedModule
  ]
})
export class HerosModule { }