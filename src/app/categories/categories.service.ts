import {EventEmitter} from '@angular/core';

export class CategoriesService {
  private categories = [
    {
      type: 'Weather'
    },
    {
      type: 'Mobile'
    },
    {
      type: 'Laptop'
    },
    {
      type: 'Desktop'
    },
  ];

  categoryHome = new EventEmitter<boolean>();

  getCategories() {
    return this.categories.slice();
  }

}
