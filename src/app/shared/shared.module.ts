import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SortComponent } from './components/sort/sort.component';
import { SliderSwitchComponent } from './components/slider-switch/slider-switch.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RateStarsComponent } from './components/rate-stars/rate-stars.component';

@NgModule({
  declarations: [
    SearchFieldComponent,
    SortComponent,
    SliderSwitchComponent,
    FilterPipe,
    RateStarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchFieldComponent,
    SortComponent,
    SliderSwitchComponent,
    FilterPipe,
    RateStarsComponent
  ]
})
export class SharedModule { }
