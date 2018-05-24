import {Component, DoCheck, OnInit} from '@angular/core';

import {CategoriesService} from '../../categories/categories.service';
import {Category} from '../../categories/category.module';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit, DoCheck {
  categories: Category[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.categories = this.categoriesService.getCategories();
  }

}
