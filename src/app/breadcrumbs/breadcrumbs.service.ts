export class BreadcrumbsService {
  private breadcrumbs = ['Home'];

  getBreadcrumbs() {
    return this.breadcrumbs.slice();
  }

}
