import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {BlueprintsService} from '../../blueprints.service';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-blueprint-details',
  templateUrl: './blueprint-details.component.html',
  styleUrls: ['./blueprint-details.component.css']
})
export class BlueprintDetailsComponent implements OnInit {
  blueprintName: string;
  clickedHeart: boolean;

  constructor(private route: ActivatedRoute,
              private blueprintsService: BlueprintsService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.blueprintName = params['blueprint'];
      }
    );
    this.blueprintsService.getSavedBlueprints().forEach(
      (bp: string) => {
        if (bp === this.blueprintName) {
          this.clickedHeart = true;
        }
      }
    );
  }

  onClickHeart() {
    this.clickedHeart = !this.clickedHeart;
    this.blueprintsService.setSavedBlueprints(this.blueprintName);
  }

}
