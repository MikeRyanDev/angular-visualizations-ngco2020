import { Point } from "../shared";

export function getPathCommandsForLine(points: Point[]) {
  const [firstPoint, ...restOfPoints] = points;
  const move = `M ${firstPoint.x},${firstPoint.y}`;
  const lines = restOfPoints.map(point => {
    return `L ${point.x},${point.y}`;
  });

  return `${move} ${lines.join(" ")}`;
}
