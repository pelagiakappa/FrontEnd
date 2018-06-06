import {Component, DoCheck, OnInit} from '@angular/core';

import {OrdersService} from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, DoCheck {
  orders: string[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.orders = this.ordersService.getOrders().slice(1);
  }

  onRemove(selectedOrder: string) {
    this.ordersService.setOrders(selectedOrder);
  }

}
