import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any, searchText): any {
    if (!searchText)
      return data

    return data.filter(d => d.name.toLowerCase().includes(searchText.toLowerCase()))
  }
}
