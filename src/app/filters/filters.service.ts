export class FiltersService {
  private radioFilters = [
    {
      title: 'Availability',
      values: ['30%', '50%', '100%']
    },
    {
      title: 'Trust',
      values: ['Yes', 'No']
    }
  ];

  private checkboxFilters = [
    {
      title: 'Source',
      values: ['Google', 'Amazon']
    },
    {
      title: 'Country',
      values: ['Greece', 'USA']
    }
  ];

  getRadioFilters() {
    return this.radioFilters.slice();
  }

  getCheckboxFilters() {
    return this.checkboxFilters.slice();
  }

}
