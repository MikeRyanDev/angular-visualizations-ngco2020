import { Component, Input } from "@angular/core";
import { Point } from "./shared";

@Component({
  selector: "svg:g[app-sparkline-dots]",
  template: `
    <svg:circle
      *ngFor="let point of points"
      [attr.cx]="point.x"
      [attr.cy]="point.y"
      [matTooltip]="point.tooltip"
    />
  `,
  styles: [
    `
      circle {
        r: 8px;
        fill: #51beff;
        opacity: 0;
        transition: opacity 350ms;
        outline: none;
      }

      circle:hover {
        opacity: 1;
      }
    `
  ]
})
export class SparklineDotsComponent {
  @Input() points: Point[];
}
