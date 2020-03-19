import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  filterObjectsByKey(key, value, data) {
    return data.filter(h => h[key] === value)[0]
  }

  sortArrayOfObjectByKey(key, data) {
    return data.sort((a, b) => a[key].localeCompare(b[key]));
  }
}
