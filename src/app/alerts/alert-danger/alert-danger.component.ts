import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-alert-danger',
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.css']
})
export class AlertDangerComponent implements OnInit {
  messageError: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.errorMessage.subscribe(
      (error: Error) => {
        this.messageError = error.message;
        $('.alert').fadeTo(4000, 500).slideUp(500, function () {
          $(this).slideUp(500);
        });
      }
    );
  }

}
