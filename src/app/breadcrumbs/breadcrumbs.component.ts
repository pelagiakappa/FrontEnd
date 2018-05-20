import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {BreadcrumbsService} from './breadcrumbs.service';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: string[];
  category: string;

  constructor(private breadcrumbsService: BreadcrumbsService,
              private route: ActivatedRoute,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.breadcrumbs = this.breadcrumbsService.getBreadcrumbs();
    this.category = this.route.snapshot.params['category'];
    this.breadcrumbs.push(this.category);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.breadcrumbs = this.breadcrumbsService.getBreadcrumbs();
          this.category = params['category'];
          this.breadcrumbs.push(this.category);
        }
      );

    // For the HeaderComponent to understand when to put the `app-search-bar` in the header.
    this.categoriesService.categoryHome.emit(false);
  }

}
