import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CategoriesService} from '../categories/categories.service';
import {Category} from '../categories/category.module';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, DoCheck {
  @ViewChild('inputCategory') inputCategory: ElementRef;
  categories: Category[];
  keyDownFlag = false;

  constructor(private categoriesService: CategoriesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.categories = this.categoriesService.getCategories();
  }

  onSearchCategory() {
    for (const categoryType of this.categories) {
      if (categoryType.type.toUpperCase() === this.inputCategory.nativeElement.value.toUpperCase()) {
        this.router.navigate([categoryType.type],
          {relativeTo: this.route});
      }
    }
  }

  onKeyDown() {
    this.keyDownFlag = true;
  }

}
