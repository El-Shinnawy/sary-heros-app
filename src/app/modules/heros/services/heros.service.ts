import { Injectable } from '@angular/core';
import { XhrService } from 'src/app/core/services/xhr.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UtilitiesService } from 'src/app/core/services/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private xhrService: XhrService,
    private utilitiesService: UtilitiesService) { }

  heros;

  getHeros() {
    return this.xhrService.call('heros.json').pipe(map(res => {
      this.heros = res || [];
      return res;
    }))
  }

  getHeroByID(id) {
    return this.heros ? this.utilitiesService.filterObjectsByKey('id', id, this.heros) : undefined;
  }
}
