import {Component, OnInit} from '@angular/core';

import {CategoriesService} from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: { type: string }[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();

    // For the HeaderComponent to understand when to put the `app-search-bar` in the header.
    this.categoriesService.categoryHome.emit(true);
  }

}
