import { classNames } from '@/utils/styles';

import './button.css';

export type Color = 'primary' | 'secondary' | 'error' | 'gray';

export type BaseButtonType = {
  children: React.ReactNode;
  color?: Color;
  variant?: keyof typeof colorStyles;
};

export type BaseButtonProps = BaseButtonType &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const colorStyles = {
  standard: {
    primary: 'primary',
    secondary: 'secondary',
    error: 'error',
    gray: 'gray',
  },
  none: {
    primary: 'primary-none',
    secondary: 'secondary-none',
    error: 'error-none',
    gray: 'gray-none',
  },
  outlined: {
    primary: 'primary-outlined',
    secondary: 'secondary-outlined',
    error: 'error-outlined',
    gray: 'gray-outlined',
  },
};

export function BaseButton({
  children,
  variant = 'standard',
  color = 'primary',
  className = '',
  ...othersProps
}: BaseButtonProps) {
  const customClassName = colorStyles[variant][color];

  return (
    <button
      className={classNames(className, customClassName)}
      {...othersProps}
    >
      {children}
    </button>
  );
}
