import {EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from 'firebase';

declare var $: any;

@Injectable()
export class AuthService {
  token: string;
  successMessage = new EventEmitter<string>();
  errorMessage = new EventEmitter<string>();

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          console.log(response);
          this.successMessage.emit('You are now registered!');

          $('#myModalSignup').modal('hide');

          this.router.navigate([], {relativeTo: this.route});
        }
      )
      .catch(
        error => {
          console.log(error);
          this.errorMessage.emit(error.message);
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

          $('#myModalSignin').modal('hide');

          this.router.navigate([], {relativeTo: this.route});
        }
      )
      .catch(
        error => {
          console.log(error);
          this.errorMessage.emit(error.message);
          this.successMessage.emit('Logout');
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.successMessage.emit('Logout');
    this.errorMessage.emit('Logout');
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
