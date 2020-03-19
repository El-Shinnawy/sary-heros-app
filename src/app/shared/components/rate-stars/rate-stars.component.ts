import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-stars',
  templateUrl: './rate-stars.component.html',
  styleUrls: ['./rate-stars.component.scss']
})
export class RateStarsComponent implements OnInit {
  @Input('rate') rate = 0
  constructor() { }
  ngOnInit() {
  }

}
