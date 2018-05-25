export class BlueprintsService {
  private blueprints = ['Blueprint 1', 'Blueprint 2', 'Blueprint 3', 'Blueprint 4', 'Blueprint 5'];

  private savedBlueprints = [];

  getBlueprints() {
    return this.blueprints.slice();
  }

  setSavedBlueprints(blueprint: string) {
    let bpExists = false;
    let bpIndex = 0;

    this.savedBlueprints.forEach(
      (bp: string, index: number) => {
        if (bp === blueprint) {
          bpExists = true;
          bpIndex = index;
        }
      }
    );

    if (bpExists) {
      this.savedBlueprints.splice(bpIndex, 1);
    } else {
      this.savedBlueprints.push(blueprint);
    }
  }

  getSavedBlueprints() {
    if (this.savedBlueprints[0] !== undefined) {
      return this.savedBlueprints.slice();
    } else {
      return ['You haven\'t saved any items yet.'];
    }
  }

}
