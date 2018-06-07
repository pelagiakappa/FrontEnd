import {Component, DoCheck, OnInit} from '@angular/core';

import {BlueprintsService} from '../../blueprints/blueprints.service';

declare var $: any;

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit, DoCheck {
  favorites: string[];

  constructor(private blueprintsService: BlueprintsService) {
  }

  ngOnInit() {
    $(document).ready(function () {

      $('body').on('click', function () {
        const totalItems = $('.panel-default').children('.panel-heading').length;
        const totalItemsOpen = $('.panel-default').children('.panel-heading.is-open').length;

        if (totalItems === totalItemsOpen) {
          $('.open-btn').addClass('hidden');
          $('.close-btn').removeClass('hidden');
          $('.buttons-wrapper').addClass('is-open');
        } else {
          $('.open-btn').removeClass('hidden');
          $('.close-btn').addClass('hidden');
          $('.buttons-wrapper').removeClass('is-open');
        }
      });

      function openAll() {
        $('.open-btn').on('click', function () {
          $('.panel-default').find('.panel-heading').next('.panel-collapse').each(function () {
            $('.panel-collapse').css({
              height: 130
            })
              .addClass('show');
          });
          $('.panel-default').find('.panel-heading').addClass('is-open');
        });
      }

      function closeAll() {
        $('.close-btn').on('click', function () {
          $('.panel-default').find('.panel-heading').next('.panel-collapse').css({
            height: 0
          })
            .removeClass('show');
          $('.panel-default').find('.panel-heading').removeClass('is-open');
        });
      }

      function openCloseItem() {
        $('.panel-default').find('.panel-heading').on('click', function () {
          const el = $(this),
            target = el.next('.panel-collapse'),
            parentHeight = target.height(),
            childHeight = target.children('.panel-body').outerHeight(true),
            newHeight = parentHeight > 0 ? 0 : childHeight;

          // animate to new height
          target.css({
            height: newHeight
          });

          if (!el.hasClass('is-open')) {
            // close all the other
            $('.panel-default').find('.panel-heading').next('.panel-collapse').css({
              height: 0
            })
              .removeClass('show');
            $('.panel-default').find('.panel-heading').removeClass('is-open');
            // add class to clicked target only
            el.addClass('is-open');
          } else {
            // if we are on clicked target then remove the class
            el.removeClass('is-open');
            // close all the other
            $('.panel-default').find('.panel-heading').next('.panel-collapse').css({
              height: 0
            })
              .removeClass('show');
            $('.panel-default').find('.panel-heading').removeClass('is-open');
          }
        });
      }

      openAll();
      closeAll();
      openCloseItem();
    });
  }

  ngDoCheck() {
    this.favorites = this.blueprintsService.getSavedBlueprints();
  }

  onRemove(selectedFavorite: string) {
    this.blueprintsService.setSavedBlueprints(selectedFavorite);
  }

}
