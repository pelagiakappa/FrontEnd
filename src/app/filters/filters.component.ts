import {Component, OnInit} from '@angular/core';
import {FiltersService} from './filters.service';

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

  constructor(private filtersService: FiltersService) {
  }

  ngOnInit() {
    this.radioFilters = this.filtersService.getRadioFilters();
    this.checkboxFilters = this.filtersService.getCheckboxFilters();
  }

}
