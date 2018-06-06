import {Blueprint} from '../../blueprints/blueprint.module';

export class OrdersService {
  private orders: Blueprint[];

  setOrders(order: Blueprint) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders.slice();
  }
}
