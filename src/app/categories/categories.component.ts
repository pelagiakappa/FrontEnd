import {Component, DoCheck, OnInit} from '@angular/core';

import {CategoriesService} from './categories.service';
import {Category} from './category.module';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, DoCheck {
  categories: Category[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    // For the HeaderComponent to understand when to put the `app-search-bar` in the header.
    this.categoriesService.categoryHome.emit(true);
  }

  ngDoCheck() {
    this.categories = this.categoriesService.getCategories();
  }

}
