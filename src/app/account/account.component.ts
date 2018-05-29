import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {EventService} from '../shared/event.service';

declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  email: string;
  password: string;
  showPassword = 'Show Password';
  hidePassword = 'Hide Password';
  pswMessage = this.showPassword;
  favoritesFlag: boolean;
  ratingsFlag: boolean;
  ordersFlag: boolean;

  constructor(private eventService: EventService,
              private router: Router) {
  }

  ngOnInit() {
    this.eventService.email.subscribe(
      (email: string) => {
        this.email = email;
      }
    );
    this.eventService.password.subscribe(
      (psw: string) => {
        this.password = psw;
      }
    );
    $(document).ready(function () {
      $('.btn-pref .btn').click(function () {
        $('.btn-pref .btn').removeClass('btn-primary').addClass('btn-default');
        $(this).removeClass('btn-default').addClass('btn-primary');
      });
    });
  }

  onClickPsw() {
    if (this.pswMessage === this.showPassword) {
      this.pswMessage = this.hidePassword;
    } else {
      this.pswMessage = this.showPassword;
    }
  }

  onClickProfile() {
    this.router.navigate(['/account']);
  }

  onClickFavorites() {
    this.favoritesFlag = true;
    this.ratingsFlag = false;
    this.ordersFlag = false;
    this.router.navigate(['/account/favorites']);
  }

  onClickRatings() {
    this.ratingsFlag = true;
    this.favoritesFlag = false;
    this.ordersFlag = false;
    this.router.navigate(['/account/ratings']);
  }

  onClickOrders() {
    this.ordersFlag = true;
    this.favoritesFlag = false;
    this.ratingsFlag = false;
    this.router.navigate(['/account/orders']);
  }

}
