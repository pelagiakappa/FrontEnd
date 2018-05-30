import {EventEmitter} from '@angular/core';

export class EventService {
  email = new EventEmitter<string>();
  password = new EventEmitter<string>();

  linkClicked = new EventEmitter<string>();
}
