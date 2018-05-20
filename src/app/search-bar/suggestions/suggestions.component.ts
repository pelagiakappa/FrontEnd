import {Component, OnInit} from '@angular/core';

import {CategoriesService} from '../../categories/categories.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  categories: { type: string }[];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }

}
