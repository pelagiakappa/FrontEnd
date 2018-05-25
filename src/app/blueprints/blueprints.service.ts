import {EventEmitter} from '@angular/core';

export class BlueprintsService {
  private blueprints = ['Blueprint 1', 'Blueprint 2', 'Blueprint 3', 'Blueprint 4', 'Blueprint 5'];

  heartClicked = new EventEmitter<boolean>();

  getBlueprints() {
    return this.blueprints.slice();
  }

}
