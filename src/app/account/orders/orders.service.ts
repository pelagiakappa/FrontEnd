export class OrdersService {
  private orders: string[];

  setOrders(blueprint: string) {
    this.orders.push(blueprint);
  }

  getOrders() {
    return this.orders.slice();
  }
}
