import {Component, OnInit} from '@angular/core';

import {FiltersService} from './filters.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  radioFilters: {
    title: string,
    values: string[]
  }[];

  checkboxFilters: {
    title: string,
    values: string[]
  }[];

  category: string;

  constructor(private filtersService: FiltersService,
              private route: ActivatedRoute,
              private router: Router,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.radioFilters = this.filtersService.getRadioFilters();
    this.checkboxFilters = this.filtersService.getCheckboxFilters();
    this.route.params.subscribe(
      (params: Params) => {
        this.category = params['name'];
      }
    );

    // For the HeaderComponent to understand when to put the `app-search-bar` in the header.
    this.categoriesService.categoryHome.emit(false);
  }

  onShowResults() {
    this.router.navigate(['/category', this.category]);
  }

}
