import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth/auth.service';

declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, DoCheck {
  emailAccount: string;
  passwordAccount: string;
  emailFlag: boolean;
  pswFlag: boolean;
  favoritesFlag: boolean;
  ratingsFlag: boolean;
  ordersFlag: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.btn-pref .btn').click(function () {
        $('.btn-pref .btn').removeClass('btn-primary').addClass('btn-default');
        $(this).removeClass('btn-default').addClass('btn-primary');
      });
    });
  }

  ngDoCheck() {
    this.emailAccount = this.authService.emailSaved;
    // TODO stop storing user password in frontend (Zero Security!)
    this.passwordAccount = this.authService.pswSaved;
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

  onSaveEmail(newEmail: string) {
    this.emailFlag = true;
    this.pswFlag = false;
    this.authService.successMessage.emit('Logout');
    if (newEmail === this.emailAccount) {
      this.authService.infoMessage.emit('No changes detected!');
      this.authService.errorMessage.emit('Logout');
    } else {
      this.authService.changeEmail(newEmail);
    }
  }

  onSavePsw(currentPsw: string, newPsw: string, reenterNewPsw: string) {
    this.pswFlag = true;
    this.emailFlag = false;
    this.authService.successMessage.emit('Logout');
    if (currentPsw === this.passwordAccount) {
      if (currentPsw === newPsw) {
        this.authService.infoMessage.emit('No changes detected!');
        this.authService.errorMessage.emit('Logout');
      } else if (newPsw !== reenterNewPsw) {
        this.authService.errorMessage.emit('Error! Reenter the new password!');
        this.authService.infoMessage.emit('Logout');
      } else {
        this.authService.changePassword(newPsw);
      }
    } else {
      this.authService.errorMessage.emit('This is not your current password!');
      this.authService.infoMessage.emit('Logout');
    }
  }

  onChangeEmail() {
    if ($('#changeEmail').hasClass('dropup')) {
      $('#changeEmail').removeClass('dropup');
    } else {
      $('#changeEmail').addClass('dropup');
    }
  }

  onChangePsw() {
    if ($('#changePsw').hasClass('dropup')) {
      $('#changePsw').removeClass('dropup');
    } else {
      $('#changePsw').addClass('dropup');
    }
  }

}
