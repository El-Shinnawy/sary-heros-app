import { Injectable } from '@angular/core';
import { XhrService } from 'src/app/core/services/xhr.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private xhrService: XhrService) { }

  heros;

  getHeros() {
    return this.xhrService.call('heros.json').pipe(map(res => {
      this.heros = res || [];
      return res;
    }))
  }

  getHeroByID(id) {
    if (this.heros) {
      return this.heros.filter(hero => hero.id === id);
    }
    else {
      this.getHeros().subscribe(res => {
        this.getHeroByID(id);
      })
    }
  }
}
