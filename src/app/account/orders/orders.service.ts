export class OrdersService {
  private orders = [''];

  setOrders(blueprint: string) {
    let bpExists = false;
    let bpIndex = 0;

    this.orders.forEach(
      (bp: string, index: number) => {
        if (bp === blueprint) {
          bpExists = true;
          bpIndex = index;
        }
      }
    );

    if (bpExists) {
      this.orders.splice(bpIndex, 1);
    } else {
      this.orders.push(blueprint);
    }
  }

  getOrders() {
    return this.orders.slice();
  }
}
