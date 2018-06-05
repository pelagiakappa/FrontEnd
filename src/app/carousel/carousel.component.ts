import {Component, OnInit} from '@angular/core';

import {FiveStarsService} from './five-stars.service';
import {Blueprint} from '../blueprints/blueprint.module';

declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  allFiveStarsBlueprints: Blueprint[];
  firstFourBlueprints: Blueprint[];
  nextFourBlueprints: Blueprint[];
  finalFourBlueprints: Blueprint[];

  constructor(private fiveStarsService: FiveStarsService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#myCarousel').carousel({
        interval: 5000
      });
    });
    this.allFiveStarsBlueprints = this.fiveStarsService.getBlueprintsFiveStars();
    this.firstFourBlueprints = this.allFiveStarsBlueprints.slice(0, 4);
    this.nextFourBlueprints = this.allFiveStarsBlueprints.slice(4, 8);
    this.finalFourBlueprints = this.allFiveStarsBlueprints.slice(8, 12);
  }

}
