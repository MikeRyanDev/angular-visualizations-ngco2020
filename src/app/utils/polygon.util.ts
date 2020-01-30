import { Point } from "../shared";
import { getPathCommandsForLine } from "./line.util";
import { getBounds } from "./bounds.util";

export function getPathCommandsForPolygon(points: Point[]) {
  const lineForPoints = getPathCommandsForLine(points);
  const bounds = getBounds(points);
  const lineToBottomRight = `L ${bounds.maxX}, ${bounds.maxY}`;
  const lineToBottomLeft = `L ${bounds.minX}, ${bounds.maxY}`;
  const closePath = "Z";

  return `${lineForPoints} ${lineToBottomRight} ${lineToBottomLeft} ${closePath}`;
}
