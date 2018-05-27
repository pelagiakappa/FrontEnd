import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';
import * as $ from 'jquery';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.router.navigate([], {relativeTo: this.route});

        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );

          // to close the popup TODO
          // $('.modal').removeClass('in');
          // $('.modal').attr('aria-hidden', 'true');
          // $('.modal').css('display', 'none');
          // $('.modal-backdrop').remove();
          // $('body').removeClass('modal-open');

          this.router.navigate([], {relativeTo: this.route});
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate([], {relativeTo: this.route});
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
