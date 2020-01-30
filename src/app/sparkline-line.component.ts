import { Component, Input } from "@angular/core";
import { Point } from "./shared";
import { getPathCommandsForLine } from "./utils";

@Component({
  selector: "svg:g[app-sparkline-line]",
  template: `
    <svg:path [attr.d]="d" />
  `,
  styles: [
    `
      path {
        stroke: #51beff;
        fill: none;
      }
    `
  ]
})
export class SparklineLineComponent {
  d: string = "";

  @Input() set points(points: Point[]) {
    this.d = getPathCommandsForLine(points);
  }
}
