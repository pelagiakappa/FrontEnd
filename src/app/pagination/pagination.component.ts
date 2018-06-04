import {Component, OnInit} from '@angular/core';

import {BlueprintsService} from '../blueprints/blueprints.service';
import {PagerService} from './pager.service';
import {Blueprint} from '../blueprints/blueprint.module';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  // array of all blueprints to be paged
  private allBlueprints: Blueprint[];
  // pager object
  pager: any = {};
  // paged blueprints
  pagedBlueprints: Blueprint[];

  constructor(private blueprintsService: BlueprintsService,
              private pagerService: PagerService) {
  }

  ngOnInit() {
    // get dummy data
    this.allBlueprints = this.blueprintsService.getBlueprints();
    // initialize to page 1
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allBlueprints.length, page);

    // get current page of blueprints
    this.pagedBlueprints = this.allBlueprints.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.blueprintsService.pagedBps = this.pagedBlueprints;
  }

}
