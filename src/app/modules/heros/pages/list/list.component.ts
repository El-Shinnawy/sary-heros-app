import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  heros;
  constructor(private herosService: HerosService) {
    this.getHeros();
  }

  ngOnInit() {
  }

  getHeros() {
    this.herosService.getHeros().subscribe(res => {
      this.heros = [...res];
    });
  }
}
