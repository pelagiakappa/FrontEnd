import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {EventService} from '../shared/event.service';

declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, DoCheck {
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

  ngDoCheck() {
    const url = this.router.url;
    if (url === '/account') {
      $('#profile').removeClass('btn-default').addClass('btn-primary');
      $('#favorites, #ratings, #orders').removeClass('btn-primary').addClass('btn-default');
      $('#tab1').addClass('in active');
      $('#tab2, #tab3, #tab4').removeClass('in active');
    } else if (url === '/account/favorites') {
      $('#favorites').removeClass('btn-default').addClass('btn-primary');
      $('#profile, #ratings, #orders').removeClass('btn-primary').addClass('btn-default');
      $('#tab2').addClass('in active');
      $('#tab1, #tab3, #tab4').removeClass('in active');
      this.favoritesFlag = true;
      this.ratingsFlag = false;
      this.ordersFlag = false;
    } else if (url === '/account/ratings') {
      $('#ratings').removeClass('btn-default').addClass('btn-primary');
      $('#profile, #favorites, #orders').removeClass('btn-primary').addClass('btn-default');
      $('#tab3').addClass('in active');
      $('#tab1, #tab2, #tab4').removeClass('in active');
      this.ratingsFlag = true;
      this.favoritesFlag = false;
      this.ordersFlag = false;
    } else if (url === '/account/orders') {
      $('#orders').removeClass('btn-default').addClass('btn-primary');
      $('#profile, #favorites, #ratings').removeClass('btn-primary').addClass('btn-default');
      $('#tab4').addClass('in active');
      $('#tab1, #tab2, #tab3').removeClass('in active');
      this.ordersFlag = true;
      this.favoritesFlag = false;
      this.ratingsFlag = false;
    }
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
