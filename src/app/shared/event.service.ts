import {EventEmitter} from '@angular/core';

export class EventService {
  emailEvent = new EventEmitter<string>();
  passwordEvent = new EventEmitter<string>();

  linkClicked = new EventEmitter<string>();
}
