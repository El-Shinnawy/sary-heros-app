import { Component, OnInit, Output } from '@angular/core';
import { SortTypes } from "../../../shared/enums/sort-types.enum";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  sortTypes = SortTypes;
  constructor() { }

  ngOnInit() {
  }

}
