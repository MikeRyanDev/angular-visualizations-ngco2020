import { Injectable } from "@angular/core";
import { of } from "rxjs";

declare var require: any;

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  data: [{ year: number; movies: number }] = require("./data.json");

  getMoviesByYear() {
    return of(this.data);
  }
}
