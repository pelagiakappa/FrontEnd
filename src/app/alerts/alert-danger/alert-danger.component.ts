import {Component, Input, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-alert-danger',
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.css']
})
export class AlertDangerComponent implements OnInit {
  @Input() error: string;

  constructor() {
  }

  ngOnInit() {
    $('.alert').fadeTo(4000, 500).slideUp(500, function () {
      $(this).slideUp(500);
    });
  }

}
