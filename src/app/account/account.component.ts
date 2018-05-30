import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
  parentSnapshot = this.route.snapshot;
  childSnapshot = this.route.snapshot.firstChild;

  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute) {
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
    if (this.childSnapshot) {
      const name = this.childSnapshot.data.title;
      $('#' + name).removeClass('btn-default').addClass('btn-primary');
      if (name === 'favorites') {
        $('#profile, #ratings, #orders').removeClass('btn-primary').addClass('btn-default');
        $('#tab2').addClass('in active');
        $('#tab1, #tab3, #tab4').removeClass('in active');
        this.favoritesFlag = true;
        this.ratingsFlag = false;
        this.ordersFlag = false;
      } else if (name === 'ratings') {
        $('#profile, #favorites, #orders').removeClass('btn-primary').addClass('btn-default');
        $('#tab3').addClass('in active');
        $('#tab1, #tab2, #tab4').removeClass('in active');
        this.ratingsFlag = true;
        this.favoritesFlag = false;
        this.ordersFlag = false;
      } else if (name === 'orders') {
        $('#profile, #favorites, #ratings').removeClass('btn-primary').addClass('btn-default');
        $('#tab4').addClass('in active');
        $('#tab1, #tab2, #tab3').removeClass('in active');
        this.ordersFlag = true;
        this.favoritesFlag = false;
        this.ratingsFlag = false;
      }
    } else if (this.parentSnapshot) {
      $('#profile').removeClass('btn-default').addClass('btn-primary');
      $('#favorites, #ratings, #orders').removeClass('btn-primary').addClass('btn-default');
      $('#tab1').addClass('in active');
      $('#tab2, #tab3, #tab4').removeClass('in active');
    }
    this.eventService.linkClicked.subscribe(
      (name: string) => {
        $('#' + name).removeClass('btn-default').addClass('btn-primary');
        if (name === 'profile') {
          $('#favorites, #ratings, #orders').removeClass('btn-primary').addClass('btn-default');
          $('#tab1').addClass('in active');
          $('#tab2, #tab3, #tab4').removeClass('in active');
        } else if (name === 'favorites') {
          $('#profile, #ratings, #orders').removeClass('btn-primary').addClass('btn-default');
          $('#tab2').addClass('in active');
          $('#tab1, #tab3, #tab4').removeClass('in active');
          this.favoritesFlag = true;
          this.ratingsFlag = false;
          this.ordersFlag = false;
        } else if (name === 'ratings') {
          $('#profile, #favorites, #orders').removeClass('btn-primary').addClass('btn-default');
          $('#tab3').addClass('in active');
          $('#tab1, #tab2, #tab4').removeClass('in active');
          this.ratingsFlag = true;
          this.favoritesFlag = false;
          this.ordersFlag = false;
        } else if (name === 'orders') {
          $('#profile, #favorites, #ratings').removeClass('btn-primary').addClass('btn-default');
          $('#tab4').addClass('in active');
          $('#tab1, #tab2, #tab3').removeClass('in active');
          this.ordersFlag = true;
          this.favoritesFlag = false;
          this.ratingsFlag = false;
        }
      }
    );
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
