import { customElement } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { CinemaService } from "../../resources/services/cinema-service";

@customElement('home')
@inject(CinemaService)
export class Home {
  cinemas = [];
  constructor(CinemaService) {
    this.cinemaService = CinemaService;
  }

  attached() {
    this.getCinemas();
  }

  getCinemas() {
    this.cinemaService.getCinemas()
      .then(response => {
        this.cinemas = response;
      })
  }
}
