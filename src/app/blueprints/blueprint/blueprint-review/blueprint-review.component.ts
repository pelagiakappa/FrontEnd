import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-blueprint-review',
  templateUrl: './blueprint-review.component.html',
  styleUrls: ['./blueprint-review.component.css']
})
export class BlueprintReviewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(function () {
      const reviewBox = $('#post-review-box');
      const newReview = $('#new-review');
      const openReviewBtn = $('#open-review-box');
      const closeReviewBtn = $('#close-review-box');
      const ratingsField = $('#ratings-hidden');

      openReviewBtn.click(function () {
        reviewBox.slideDown(400, function () {
          $('#new-review').trigger('autosize.resize');
          newReview.focus();
        });
        openReviewBtn.fadeOut(100);
        closeReviewBtn.show();
      });

      closeReviewBtn.click(function (e) {
        e.preventDefault();
        reviewBox.slideUp(300, function () {
          newReview.focus();
          openReviewBtn.fadeIn(200);
        });
        closeReviewBtn.hide();

      });

      $('.starrr').on('starrr:change', function (e, value) {
        ratingsField.val();
      });
    });
  }

}
