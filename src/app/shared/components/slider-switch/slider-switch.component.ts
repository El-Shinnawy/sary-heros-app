import { Component, OnInit, Input } from '@angular/core';
import { SortTypes } from "../../enums/sort-types.enum";
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { BroadcastKeys } from '../../enums/broadcast-keys.enum';

@Component({
  selector: 'app-slider-switch',
  templateUrl: './slider-switch.component.html',
  styleUrls: ['./slider-switch.component.scss']
})
export class SliderSwitchComponent implements OnInit {
  sortTypes = SortTypes;
  selectedSortType = "";
  constructor(private broadcastService: BroadcastService) {
    this.selectedSortType = this.sortTypes.Name;
  }

  ngOnInit() {
  }

  switchSortType(type) {
    this.selectedSortType = type;
    this.broadcastService.sendBroadcast({
      key: BroadcastKeys.SortTypeChanged,
      data: type.toLowerCase()
    })
  }

}
