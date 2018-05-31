import {Component, Input, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.css']
})
export class AlertInfoComponent implements OnInit {
  @Input() message: string;

  constructor() {
  }

  ngOnInit() {
    $('.alert').fadeTo(2000, 500).slideUp(500, function () {
      $(this).slideUp(500);
    });
  }

}
