import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import * as firebase from 'firebase';

import {DataStorageService} from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isPopState = false;

  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private locationStrategy: LocationStrategy) {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAGZ5_2tyQyrs6dM2405XbjYtPU2gYEy3M',
      authDomain: 'ng-frontend-b2e57.firebaseapp.com'
    });

    this.dataStorageService.getCategories();
    this.dataStorageService.getBlueprints();

    this.locationStrategy.onPopState(() => {
      this.isPopState = true;
    });
    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }
      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });
  }

}
