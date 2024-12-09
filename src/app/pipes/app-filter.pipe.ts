import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter',
  standalone: true,
})
export class AppFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(item =>
      item.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
