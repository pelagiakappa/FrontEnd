import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {BlueprintsService} from '../../blueprints.service';
import {AuthService} from '../../../auth/auth.service';
import {OrdersService} from '../../../account/orders/orders.service';

@Component({
  selector: 'app-blueprint-details',
  templateUrl: './blueprint-details.component.html',
  styleUrls: ['./blueprint-details.component.css']
})
export class BlueprintDetailsComponent implements OnInit, DoCheck {
  blueprintName: string;
  clickedHeart: boolean;
  description = true;
  information = false;
  ratings = false;
  clickedAddOrders: boolean;

  constructor(private route: ActivatedRoute,
              private blueprintsService: BlueprintsService,
              public authService: AuthService,
              private router: Router,
              private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.blueprintName = params['blueprint'];
      }
    );
    this.route.fragment.subscribe(
      (fragment) => {
        if (fragment === 'description') {
          this.description = true;
          this.information = false;
          this.ratings = false;
        }
        if (fragment === 'information') {
          this.description = false;
          this.information = true;
          this.ratings = false;
        }
        if (fragment === 'ratings') {
          this.description = false;
          this.information = false;
          this.ratings = true;
        }
      }
    );
  }

  ngDoCheck() {
    this.blueprintsService.getSavedBlueprints().forEach(
      (bp: string) => {
        if (bp === this.blueprintName) {
          this.clickedHeart = true;
        }
      }
    );
    this.ordersService.getOrders().forEach(
      (bp: string) => {
        if (bp === this.blueprintName) {
          this.clickedAddOrders = true;
        }
      }
    );
  }

  onClickHeart() {
    this.clickedHeart = !this.clickedHeart;
    this.blueprintsService.setSavedBlueprints(this.blueprintName);
  }

  onDescription() {
    this.router.navigate(['/details', this.blueprintName], {fragment: 'description'});
  }

  onInformation() {
    this.router.navigate(['/details', this.blueprintName], {fragment: 'information'});
  }

  onRatings() {
    this.router.navigate(['/details', this.blueprintName], {fragment: 'ratings'});
  }

  onAddOrders() {
    this.clickedAddOrders = !this.clickedAddOrders;
    this.ordersService.setOrders(this.blueprintName);
  }

}
