import {EventEmitter} from '@angular/core';

import {Category} from './category.module';

export class CategoriesService {
  // private categories: Category[] = [
  //   new Category('Weather'),
  //   new Category('Mobile'),
  //   new Category('Laptop'),
  //   new Category('Desktop')
  // ];
  private categories: Category[];

  categoryHome = new EventEmitter<boolean>();

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  getCategories() {
    return this.categories;
  }

}
