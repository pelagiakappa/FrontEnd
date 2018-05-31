import {Component, Input, OnInit} from '@angular/core';

declare var $: any;

import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() flagSuccess: boolean;
  @Input() flagError: boolean;
  @Input() flagInfo: boolean;
  messageSuccess: string;
  messageError: string;
  messageInfo: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.successMessage.subscribe(
      (message: string) => {
        if (message === 'Logout') {
          this.messageSuccess = undefined;
        } else {
          this.messageSuccess = message;
          $('.alert').fadeTo(1000, 500).slideUp(500, function () {
            $(this).slideUp(500);
          });
        }
      }
    );
    this.authService.errorMessage.subscribe(
      (error: string) => {
        if (error === 'Logout') {
          this.messageError = undefined;
        } else {
          this.messageError = error;
          $('.alert').fadeTo(3000, 500).slideUp(500, function () {
            $(this).slideUp(500);
          });
        }
      }
    );
    this.authService.infoMessage.subscribe(
      (info: string) => {
        if (info === 'Logout') {
          this.messageInfo = undefined;
        } else {
          this.messageInfo = info;
          $('.alert').fadeTo(2000, 500).slideUp(500, function () {
            $(this).slideUp(500);
          });
        }
      }
    );
  }

}
