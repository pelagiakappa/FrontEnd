import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#myCarousel').carousel({
        interval: 5000
      });
    });
  }

}
