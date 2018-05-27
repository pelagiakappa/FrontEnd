import {Component, Input, OnInit} from '@angular/core';

import {BlueprintsService} from '../blueprints.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent implements OnInit {
  @Input() blueprint: string;
  clickedHeart: boolean;

  constructor(private blueprintsService: BlueprintsService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.blueprintsService.getSavedBlueprints().forEach(
      (bp: string) => {
        if (bp === this.blueprint) {
          this.clickedHeart = true;
        }
      }
    );
  }

  onClickHeart() {
    this.clickedHeart = !this.clickedHeart;
    this.blueprintsService.setSavedBlueprints(this.blueprint);
  }

}
