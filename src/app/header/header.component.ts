import {Component, DoCheck, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import * as $ from 'jquery';

import {BlueprintsService} from '../blueprints/blueprints.service';
import {CategoriesService} from '../categories/categories.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  homeCategory: boolean;
  blueprintsSaved: string[];

  constructor(private blueprintsService: BlueprintsService,
              private categoriesService: CategoriesService,
              public authService: AuthService) {
  }

  ngOnInit() {
    this.categoriesService.categoryHome.subscribe(
      (flag: boolean) => {
        this.homeCategory = flag;
      }
    );
  }

  ngDoCheck() {
    this.blueprintsSaved = this.blueprintsService.getSavedBlueprints();
  }

  onLogout() {
    this.authService.logout();
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  onClick() {
    $('.modal').removeClass('in');
    $('.modal').attr('aria-hidden', 'true');
    $('.modal').css('display', 'none');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
  }

}
