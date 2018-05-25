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
  clickedHeart = false;

  constructor(private blueprintsService: BlueprintsService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onClickHeart() {
    if (this.authService.isAuthenticated()) {
      this.clickedHeart = !this.clickedHeart;
      this.blueprintsService.heartClicked.emit(true);
    } else {
      this.router.navigate(['/signin']);
    }

  }

}
