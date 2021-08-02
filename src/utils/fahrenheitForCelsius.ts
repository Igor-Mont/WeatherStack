export function fahrenheitForCelsius(f: number): number {
  const celsius = (f - 32) / 18000;
  return Math.floor(celsius);
}
