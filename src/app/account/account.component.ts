import {Component, OnInit} from '@angular/core';

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

  constructor(private eventService: EventService) {
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

}
