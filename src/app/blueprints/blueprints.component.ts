import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {BlueprintsService} from './blueprints.service';

declare var $: any;

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

}
