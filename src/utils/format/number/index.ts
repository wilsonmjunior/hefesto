export function approximatelyEquals(
  v1: number,
  v2: number,
  epsilon = Number.EPSILON
): boolean {
  return Math.abs(v1 - v2) <= epsilon;
}

export function formatNumber(value: number, removeZeros = true): string {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: removeZeros ? 0 : 2,
    style: 'decimal',
  }).format(value);
}

export function percentage(value?: number, minimumFractionDigits?: number) {
  if (!value) {
    return '';
  }

  return `${
    minimumFractionDigits ? value.toFixed(minimumFractionDigits) : value
  }%`;
}
