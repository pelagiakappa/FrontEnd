import {Component, OnInit} from '@angular/core';

import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  messageSuccess: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.successMessage.subscribe(
      (message: string) => {
        this.messageSuccess = message;
      }
    );
  }

}
