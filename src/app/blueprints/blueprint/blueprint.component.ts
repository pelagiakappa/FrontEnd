import {Component, Input, OnInit} from '@angular/core';

import {BlueprintsService} from '../blueprints.service';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent implements OnInit {
  @Input() blueprint: string;
  clickedStar = false;

  constructor(private blueprintsService: BlueprintsService) {
  }

  ngOnInit() {
  }

  onClickStar() {
    this.clickedStar = !this.clickedStar;
    this.blueprintsService.starClicked.emit(true);
  }

}
