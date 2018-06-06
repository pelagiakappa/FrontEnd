export class OrdersService {
  private orders = [''];

  setOrders(blueprint: string) {
    this.orders.push(blueprint);
  }

  getOrders() {
    return this.orders.slice();
  }
}
