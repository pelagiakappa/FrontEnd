import {Component, OnInit} from '@angular/core';

import {OrdersService} from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: string[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.orders = this.ordersService.getOrders().slice(1);
  }

}
