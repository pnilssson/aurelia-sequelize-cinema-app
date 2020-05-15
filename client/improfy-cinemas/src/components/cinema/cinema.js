import { customElement, inject } from 'aurelia-framework';
import { MovieService } from "../../resources/services/movie-service";
import { CinemaService } from "../../resources/services/cinema-service";
import { CinemaModel } from "../../resources/models/cinema-model";

@customElement('cinema')
@inject(MovieService, CinemaService)
export class Cinema {
  movies = [];
  cinema = CinemaModel;
  constructor(MovieService, CinemaService) {
    this.cinemaTitle = '';
    this.cinemaDescription = '';
    this.movieService = MovieService;
    this.cinemaService = CinemaService;
  }

  activate(params) {
    this.getMovies(params.id);
    this.getCinema(params.id);
  }

  getCinema(paramId) {
    this.cinemaService.getCinema(paramId)
      .then(response => {
        this.cinema = response
        this.cinemaTitle = this.cinema.title;
        this.cinemaDescription = this.cinema.description;
      })
  }

  getMovies(paramId) {
    this.movieService.getMovies()
      .then(response => {
        this.movies = response.filter(movie => movie.cinemaId.toString() === paramId);
      })
  }
}
