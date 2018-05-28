import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.btn-pref .btn').click(function () {
        $('.btn-pref .btn').removeClass('btn-primary').addClass('btn-default');
        // $(".tab").addClass("active"); // instead of this do the below
        $(this).removeClass('btn-default').addClass('btn-primary');
      });
    });
  }

}
