import { formatNumber } from '../number';

export const getNumbersFromString = (value: string) => value.replace(/\D/g, '');

export function formatMoney(value?: number, includePrefix = true) {
  if (value == null) {
    return '';
  }
  const formattedValue = formatNumber(value, false);
  return includePrefix ? `R$ ${formattedValue}` : formattedValue;
}

export function formatMoneyDecimal(
  value: string | number = 0,
  includePrefix = false
) {
  let parsedValue;
  if (typeof value === 'string') {
    parsedValue = Number.parseInt(value, 10) || 0;
  } else {
    parsedValue = value;
  }
  return formatMoney(parsedValue / 100, includePrefix);
}

export function parseMoneyDecimal(value: string) {
  return Number.parseFloat(getNumbersFromString(value)) / 100;
}
