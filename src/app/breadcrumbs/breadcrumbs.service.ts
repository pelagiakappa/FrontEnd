export class BreadcrumbsService {
  private breadcrumbs = ['Home'];

  blueprintCategory: string;

  getBreadcrumbs() {
    return this.breadcrumbs.slice();
  }

}
