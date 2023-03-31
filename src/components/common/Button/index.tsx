import { classNames } from '@/utils/styles';
import './button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'none';
  variant?: 'outlined' | 'standard';
}

export function Button({ 
  children, 
  variant = 'standard', 
  color = 'primary', 
  className = '',
  ...othersProps }: ButtonProps,
) {
  const colorStyle = {
    standard: {
      primary: 'primary',
      secondary: 'secondary',
      error: 'error',
      success: 'success',
      none: 'none',
    },
    outlined: {
      primary: 'primary-outlined',
      secondary: 'secondary-outlined',
      error: 'error-outlined',
      success: 'success-outlined',
      none: 'none-outlined',
    }
  }

  const customClassName = colorStyle[variant][color];

  return (
    <button 
      className={classNames(className, customClassName)}
      {...othersProps}
    >
      {children}
    </button>
  )
}
