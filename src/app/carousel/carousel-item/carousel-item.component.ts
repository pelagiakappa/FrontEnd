import {Component, Input, OnInit} from '@angular/core';

import {BlueprintsService} from '../../blueprints/blueprints.service';
import {AuthService} from '../../auth/auth.service';
import {OrdersService} from '../../account/orders/orders.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() blueprint: string;
  clickedHeart: boolean;

  constructor(private blueprintsService: BlueprintsService,
              public authService: AuthService,
              private ordersService: OrdersService) {
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

  onAddOrders() {
    this.ordersService.setOrders(this.blueprint);
  }

}
