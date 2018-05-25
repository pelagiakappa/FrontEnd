import {Component, DoCheck, OnInit} from '@angular/core';

import {BlueprintsService} from '../blueprints/blueprints.service';
import {CategoriesService} from '../categories/categories.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  homeCategory: boolean;
  blueprintsSaved: string[];

  constructor(private blueprintsService: BlueprintsService,
              private categoriesService: CategoriesService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.categoriesService.categoryHome.subscribe(
      (flag: boolean) => {
        this.homeCategory = flag;
      }
    );
  }

  ngDoCheck() {
    this.blueprintsSaved = this.blueprintsService.getSavedBlueprints();
  }

  onLogout() {
    this.authService.logout();
  }

}
