import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {BlueprintsService} from './blueprints.service';
import {Blueprint} from './blueprint.module';

declare var $: any;

@Component({
  selector: 'app-blueprints',
  templateUrl: './blueprints.component.html',
  styleUrls: ['./blueprints.component.css']
})
export class BlueprintsComponent implements OnInit, DoCheck {
  category: string;
  pagedBlueprints: Blueprint[];

  constructor(private blueprintsService: BlueprintsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.category = params['name'];
        }
      );
    $(document).ready(function () {
      $('#list').click(function (event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
        $('#list').addClass('active');
        $('#grid').removeClass('active');
      });
      $('#grid').click(function (event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
        $('#grid').addClass('active');
        $('#list').removeClass('active');
      });
    });
  }

  ngDoCheck() {
    this.pagedBlueprints = this.blueprintsService.pagedBps;
  }

}
