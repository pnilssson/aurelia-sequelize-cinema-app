import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class MovieService {
  constructor(http) {
    this.http = http;
    const baseUrl = 'http://localhost:3000/api/'

    http.configure(config => {
      config
        .withBaseUrl(baseUrl)
        .withDefaults({
          headers: {
            'Accept': 'application/json',
          }
        })
    })
  }

  getMovies() {
    return this.http.fetch('movies')
      .then(response => response.json())
      .then(movies => {
        return movies
      })
      .catch(error => {
        console.log('Error fetching movies', error);
        return [];
      })
  }
}


