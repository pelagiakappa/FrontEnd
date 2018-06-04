import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {CategoriesService} from '../categories/categories.service';
import {BlueprintsService} from '../blueprints/blueprints.service';
import {AuthService} from '../auth/auth.service';
import {Category} from '../categories/category.module';
import {Blueprint} from '../blueprints/blueprint.module';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private categoriesService: CategoriesService,
              private blueprintsService: BlueprintsService,
              private authService: AuthService) {
  }

  storeCategories() {
    return this.http.put('https://ng-frontend-b2e57.firebaseio.com/categories.json', this.categoriesService.getCategories());
  }

  getCategories() {
    this.http.get('https://ng-frontend-b2e57.firebaseio.com/categories.json')
      .subscribe(
        (response: Response) => {
          const categories: Category[] = response.json();
          this.categoriesService.setCategories(categories);
        }
      );
  }

  getBlueprints() {
    this.http.get('https://ng-frontend-b2e57.firebaseio.com/blueprints.json')
      .subscribe(
        (response: Response) => {
          const blueprints: Blueprint[] = response.json();
          this.blueprintsService.setBlueprints(blueprints);
        }
      );
  }

}
