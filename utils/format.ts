export function formatNumbers(value: number): string {
  return new Intl.NumberFormat('en').format(value)
}
