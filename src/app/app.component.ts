import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

import {DataStorageService} from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAGZ5_2tyQyrs6dM2405XbjYtPU2gYEy3M',
      authDomain: 'ng-frontend-b2e57.firebaseapp.com'
    });

    this.dataStorageService.getCategories();
  }

}
