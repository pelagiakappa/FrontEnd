import {Component, Input, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.css']
})
export class AlertSuccessComponent implements OnInit {
  @Input() message: string;

  constructor() {
  }

  ngOnInit() {
    $('.alert').fadeTo(1000, 500).slideUp(500, function () {
      $(this).slideUp(500);
    });
  }

}
