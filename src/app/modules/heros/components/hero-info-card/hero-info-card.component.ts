import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-info-card',
  templateUrl: './hero-info-card.component.html',
  styleUrls: ['./hero-info-card.component.scss']
})
export class HeroInfoCardComponent implements OnInit {
  @Input('details') details;
  constructor() { }

  ngOnInit() {
  }
}
