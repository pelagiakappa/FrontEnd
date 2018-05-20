import {Component, OnInit} from '@angular/core';

import {BlueprintsService} from '../blueprints/blueprints.service';
import {CategoriesService} from '../categories/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  clickedStar = false;
  homeCategory: boolean;

  constructor(private blueprintsService: BlueprintsService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.blueprintsService.starClicked.subscribe(
      (flag: boolean) => {
        this.clickedStar = flag;
      }
    );

    this.categoriesService.categoryHome.subscribe(
      (flag: boolean) => {
        this.homeCategory = flag;
      }
    );
  }

}
