import { PLATFORM } from "aurelia-framework";

export class App {
  configureRouter(config, router) {
    config.title = 'Improfy Cinema';
    config.map([
      { route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('components/home/home'),
        nav: true
      },
      { route: 'cinema/:id',
        name: 'cinema',
        moduleId: PLATFORM.moduleName('components/cinema/cinema'),
        nav: false
      },
    ]);
    this.router = router;
  }
}
