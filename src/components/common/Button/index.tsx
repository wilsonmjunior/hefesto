import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'none';
  variant?: 'outlined' | 'standard';
}

export function Button({ 
  children, variant = 'standard', 
  color = 'primary', 
  ...othersProps }: ButtonProps,
) {
  const colorStyle = {
    standard: {
      primary: styles['primary'],
      secondary: styles['secondary'],
      error: styles['error'],
      success: styles['success'],
      none: styles['none'],
    },
    outlined: {
      primary: styles['primary-outlined'],
      secondary: styles['secondary-outlined'],
      error: styles['error-outlined'],
      success: styles['success-outlined'],
      none: styles['none-outlined'],
    }
  }

  const customClassName = colorStyle[variant][color];

  return (
    <button 
      className={customClassName}
      {...othersProps}
    >
      {children}
    </button>
  )
}
