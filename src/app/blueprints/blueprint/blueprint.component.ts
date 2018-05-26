import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {BlueprintsService} from '../blueprints.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.css']
})
export class BlueprintComponent implements OnInit {
  @Input() blueprint: string;
  clickedHeart: boolean;

  constructor(private blueprintsService: BlueprintsService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.blueprintsService.getSavedBlueprints().forEach(
      (bp: string) => {
        if (bp === this.blueprint) {
          this.clickedHeart = true;
        }
      }
    );
  }

  onClickHeart() {
    if (this.authService.isAuthenticated()) {
      this.clickedHeart = !this.clickedHeart;
      this.blueprintsService.setSavedBlueprints(this.blueprint);
    } else {
      this.router.navigate(['/signin']);
    }

  }

}
