import {Component, OnInit} from '@angular/core';

import {BlueprintsService} from '../../blueprints/blueprints.service';

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
  }

}
