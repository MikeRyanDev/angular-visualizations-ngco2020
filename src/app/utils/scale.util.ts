export function createLinearScale(
  range: [number, number],
  domain: [number, number]
) {
  const [minRange, maxRange] = range;
  const [minDomain, maxDomain] = domain;
  const sizeOfRange = maxRange - minRange;
  const sizeOfDomain = maxDomain - minDomain;

  return function(value: number) {
    const positionInRange = (value - minRange) / sizeOfRange;

    return positionInRange * sizeOfDomain + minDomain;
  };
}
