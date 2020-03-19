import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, AfterViewInit {
  searchText = "";
  @Input('autoFocus') autoFocus;
  @Output('onSearchTextChange') onSearchTextChange: EventEmitter<any> = new EventEmitter()
  @ViewChild('search', { static: false }) search: ElementRef;

  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.autoFocus)
      this.search.nativeElement.focus();
  }

  searchChanged() {
    this.onSearchTextChange.next(this.searchText);
  }
}
