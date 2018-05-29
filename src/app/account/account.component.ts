import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

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
              private route: ActivatedRoute,
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

    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          const parentData = this.route.snapshot.data.title;
          const child = this.route.snapshot.firstChild;
          let childData: string;

          if (child != null) {
            childData = child.data.title;
          }

          if (childData) {
            $('#profile').removeClass('btn-primary').addClass('btn-default');
            if (childData === 'favorites') {
              $('#favorites').removeClass('btn-default').addClass('btn-primary');
              $('#ratings').removeClass('btn-primary').addClass('btn-default');
              $('#orders').removeClass('btn-primary').addClass('btn-default');
              this.favoritesFlag = true;
              $('#tab2').collapse('show');
              $('#tab1').collapse('hide');
              $('#tab3').collapse('hide');
              $('#tab4').collapse('hide');
            } else if (childData === 'ratings') {
              $('#ratings').removeClass('btn-default').addClass('btn-primary');
              $('#favorites').removeClass('btn-primary').addClass('btn-default');
              $('#orders').removeClass('btn-primary').addClass('btn-default');
              $('#tab3').collapse('show');
              $('#tab1').collapse('hide');
              $('#tab2').collapse('hide');
              $('#tab4').collapse('hide');
              this.onClickRatings();
            } else if (childData === 'orders') {
              $('#orders').removeClass('btn-default').addClass('btn-primary');
              $('#favorites').removeClass('btn-primary').addClass('btn-default');
              $('#ratings').removeClass('btn-primary').addClass('btn-default');
              $('#tab4').collapse('show');
              $('#tab1').collapse('hide');
              $('#tab2').collapse('hide');
              $('#tab3').collapse('hide');
              this.onClickOrders();
            }
          } else if (parentData) {
            $('#profile').removeClass('btn-default').addClass('btn-primary');
            $('#favorites').removeClass('btn-primary').addClass('btn-default');
            $('#ratings').removeClass('btn-primary').addClass('btn-default');
            $('#orders').removeClass('btn-primary').addClass('btn-default');
            $('#tab1').collapse('show');
            $('#tab2').collapse('hide');
            $('#tab3').collapse('hide');
            $('#tab4').collapse('hide');
            this.onClickProfile();
          }
        }
      }
    );

    if (this.parentSnapshot) {
      $('#profile').removeClass('btn-default').addClass('btn-primary');
      $('#favorites').removeClass('btn-primary').addClass('btn-default');
      $('#ratings').removeClass('btn-primary').addClass('btn-default');
      $('#orders').removeClass('btn-primary').addClass('btn-default');
      $('#tab1').collapse('show');
      $('#tab2').collapse('hide');
      $('#tab3').collapse('hide');
      $('#tab4').collapse('hide');
      this.onClickProfile();
    } else if (this.childSnapshot) {
      $('#profile').removeClass('btn-primary').addClass('btn-default');
      if (this.childSnapshot.data.title === 'favorites') {
        $('#favorites').removeClass('btn-default').addClass('btn-primary');
        $('#ratings').removeClass('btn-primary').addClass('btn-default');
        $('#orders').removeClass('btn-primary').addClass('btn-default');
        this.onClickFavorites();
        $('#tab2').collapse('show');
        $('#tab1').collapse('hide');
        $('#tab3').collapse('hide');
        $('#tab4').collapse('hide');
      } else if (this.childSnapshot.data.title === 'ratings') {
        $('#ratings').removeClass('btn-default').addClass('btn-primary');
        $('#favorites').removeClass('btn-primary').addClass('btn-default');
        $('#orders').removeClass('btn-primary').addClass('btn-default');
        $('#tab3').collapse('show');
        $('#tab1').collapse('hide');
        $('#tab2').collapse('hide');
        $('#tab4').collapse('hide');
        this.onClickRatings();
      } else if (this.childSnapshot.data.title === 'orders') {
        $('#orders').removeClass('btn-default').addClass('btn-primary');
        $('#favorites').removeClass('btn-primary').addClass('btn-default');
        $('#ratings').removeClass('btn-primary').addClass('btn-default');
        $('#tab4').collapse('show');
        $('#tab1').collapse('hide');
        $('#tab2').collapse('hide');
        $('#tab3').collapse('hide');
        this.onClickOrders();
      }
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
