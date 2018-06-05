import {Blueprint} from '../blueprints/blueprint.module';

export class FiveStarsService {
  private blueprintsFiveStars: Blueprint[] = [
    {
      name: 'Blueprint 3'
    },
    {
      name: 'Blueprint 10'
    },
    {
      name: 'Blueprint 2'
    },
    {
      name: 'Blueprint 7'
    },
    {
      name: 'Blueprint 1'
    },
    {
      name: 'Blueprint 4'
    },
    {
      name: 'Blueprint 9'
    },
    {
      name: 'Blueprint 27'
    },
    {
      name: 'Blueprint 77'
    },
    {
      name: 'Blueprint 15'
    },
    {
      name: 'Blueprint 23'
    },
    {
      name: 'Blueprint 19'
    }
  ];

  setBlueprintsFiveStars(bpFiveStars: Blueprint) {
    this.blueprintsFiveStars.push(bpFiveStars);
  }

  getBlueprintsFiveStars() {
    return this.blueprintsFiveStars;
  }
}
