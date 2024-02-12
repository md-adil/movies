export function getHealthColor(seed: number, peer: number, red?: number) {
  if (red !== undefined) {
    const green = 510 - red;
    return `rgb(${Math.min(red, 255)}, ${Math.min(green, 255)}, 0)`;
  }
  if (seed < 5) {
    return getHealthColor(seed, peer, 510);
  }
  const leech = peer - seed;
  red = (leech / seed) * 510;
  return getHealthColor(seed, peer, red);
}
