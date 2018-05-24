import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // We want to add some functionality to this directive, which
  // allows us to add a certain CSS class to the element the
  // directive it sits on, when it is clicked and remove the class
  // ones we click the element again.

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
