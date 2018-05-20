import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filter: { title: string, values: string[] };
  @Input() inputType: string;
  currentCategory: string;
  previousFilter: string;
  flag = false;
  savePreviousFilter: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentCategory = this.route.snapshot.params['category'];
    this.previousFilter = this.route.snapshot.params['filter'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.previousFilter = params['filter'];
        }
      );
  }

  // TODO
  onClickFilter(filterValue: string) {
    if (this.previousFilter === undefined) {
      // The first time.
      this.router.navigate([
        this.currentCategory + '/' + filterValue
      ]);
    } else {
      if (this.inputType === 'radio') {
        for (const currentFilter of this.filter.values) {
          if (currentFilter === this.previousFilter) {
            // We're in the same filter.
            this.flag = true;
          }
        }
        if (this.flag) {
          // We're in the same filter.
          this.router.navigate([
            this.currentCategory + '/' + filterValue
          ]);
        } else {
          // We're not in the same filter.
          this.savePreviousFilter = this.previousFilter; // TODO
          this.router.navigate([
            this.currentCategory + '/' + this.previousFilter + '+' + filterValue
          ]);
        }
      } else {
        // for checkbox
        this.router.navigate([
          this.currentCategory + '/' + this.previousFilter + '+' + filterValue
        ]);
      }
    }
  }

}
