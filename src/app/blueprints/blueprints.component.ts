import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {BlueprintsService} from './blueprints.service';

@Component({
  selector: 'app-blueprints',
  templateUrl: './blueprints.component.html',
  styleUrls: ['./blueprints.component.css']
})
export class BlueprintsComponent implements OnInit {
  blueprints: string[];
  category: string;

  constructor(private blueprintsService: BlueprintsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.blueprints = this.blueprintsService.getBlueprints();
    this.category = this.route.snapshot.params['category'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.category = params['category'];
        }
      );
  }

}
