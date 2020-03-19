import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { XhrService } from './services/xhr.service';
import { UtilitiesService } from './services/utilities.service';
import { BroadcastService } from './services/broadcast.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    XhrService,
    UtilitiesService,
    BroadcastService
  ],
  exports: []
})
export class CoreModule { }
