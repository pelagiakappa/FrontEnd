import {EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';
import * as $ from 'jquery';

@Injectable()
export class AuthService {
  token: string;
  successMessage = new EventEmitter<string>();
  errorMessage = new EventEmitter<Error>();

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.successMessage.emit('You are now registered!');

          $('.alert').fadeTo(2000, 500).slideUp(500, function () {
            $(this).slideUp(500);
          });

          $('.modal').fadeTo(1000, 500).slideUp(500, function () {
            $(this).slideUp(500);
          })
            .attr('aria-hidden', 'true')
            .css('display', 'none');
          $('.modal-backdrop').remove();

          this.router.navigate([], {relativeTo: this.route});
        }
      )
      .catch(
        error => {
          console.log(error);
          this.errorMessage.emit(error);
        }
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.successMessage.emit('You have successfully logged in!');
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );

          $('.alert').fadeTo(2000, 500).slideUp(500, function () {
            $(this).slideUp(500);
          });

          $('.modal').modal('hide'); // TODO

          this.router.navigate([], {relativeTo: this.route});
        }
      )
      .catch(
        error => {
          console.log(error);
          this.errorMessage.emit(error);
        }
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
