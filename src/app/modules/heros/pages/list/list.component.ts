import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Router } from '@angular/router';
import { UtilitiesService } from 'src/app/core/services/utilities.service';
import { BroadcastService } from 'src/app/core/services/broadcast.service';
import { SortTypes } from "../../../../shared/enums/sort-types.enum";
import { BroadcastKeys } from 'src/app/shared/enums/broadcast-keys.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  heros;
  sortTypes = SortTypes;
  sortSubscription;
  constructor(private herosService: HerosService,
    private router: Router,
    private utilitiesService: UtilitiesService,
    private broadcastService: BroadcastService) {
    this.getHeros();
    this.sortSubscription = this.broadcastService.getBroadcast().subscribe(event => {
      if (event && event.key === BroadcastKeys.SortTypeChanged) {
        this.sort(event.data)
      }
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sortSubscription.unsubscribe()
  }

  getHeros() {
    this.herosService.getHeros().subscribe(res => {
      this.heros = [...res];
      this.sort(this.sortTypes.Name);
    });
  }

  search(text) {
    console.log(text);
  }

  openDetails(id) {
    this.router.navigate([`./heros/details/${id}`])
  }

  sort(key) {
    this.heros = this.utilitiesService.sortArrayOfObjectByKey(key, this.heros)
  }
}
