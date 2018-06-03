import {Component, OnInit} from '@angular/core';

import {BlueprintsService} from '../../blueprints/blueprints.service';

declare var $: any;

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: string[];

  constructor(private blueprintsService: BlueprintsService) {
  }

  ngOnInit() {
    this.favorites = this.blueprintsService.getSavedBlueprints();

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
            const eachNewHeight = $(this).children('.panel-body').outerHeight(true);
            $(this).css({
              height: eachNewHeight
            });
          });
          $('.panel-default').find('.panel-heading').addClass('is-open');
        });
      }

      function closeAll() {
        $('.close-btn').on('click', function () {
          $('.panel-default').find('.panel-heading').next('.panel-collapse').css({
            height: 0
          });
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

          // remove existing classes & add class to clicked target
          if (!el.hasClass('is-open')) {
            el.addClass('is-open');
          } else {
            // if we are on clicked target then remove the class
            el.removeClass('is-open');
          }
        });
      }

      openAll();
      closeAll();
      openCloseItem();

      $(document).ready(function () {
        function toggleIcon(e) {
          $(e.target)
            .prev('.panel-heading')
            .find('.more-less')
            .toggleClass('glyphicon-plus glyphicon-minus');
        }

        $('.panel-group').on('hidden.bs.collapse', toggleIcon);
        $('.panel-group').on('shown.bs.collapse', toggleIcon);
      });
    });

  }

}
