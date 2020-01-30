import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Point } from "./shared";
import { MoviesService } from "./movies.service";

@Component({
  selector: "app-root",
  template: `
    <div class="card">
      <h2>Movies By Year</h2>
      <app-sparkline-chart [points]="points$ | async"></app-sparkline-chart>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
      }

      h2 {
        color: #bddfff;
        font-family: "Raleway", sans-serif;
        margin-left: 0.83em;
        margin-bottom: -0.83em;
      }

      .card {
        display: inline-block;
        margin: 0 auto;
        width: auto;
        background-color: #09243d;
        border-radius: 2px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      }
    `
  ]
})
export class AppComponent {
  constructor(private movies: MoviesService) {}

  points$: Observable<Point[]> = this.movies.getMoviesByYear().pipe(
    map(movies => {
      return movies.map(({ year, movies }) => {
        return {
          x: year,
          y: movies,
          tooltip: `${movies} movies in ${year}`
        };
      });
    })
  );
}
