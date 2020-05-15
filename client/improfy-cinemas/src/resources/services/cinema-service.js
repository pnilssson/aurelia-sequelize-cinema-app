import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';

@inject(HttpClient)
export class CinemaService {
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

  getCinemas() {
    return this.http.fetch('cinemas')
      .then(response => response.json())
      .then(cinemas => {
        return cinemas
      })
      .catch(error => {
        console.log('Error fetching cinemas', error);
        return [];
      })
  }

  getCinema(id) {
    return this.http.fetch(`cinema/${id}`)
      .then(response => response.json())
      .then(cinema => {
        return cinema
      })
      .catch(error => {
        console.log('Error fetching cinemas', error);
        return [];
      })
  }
}


