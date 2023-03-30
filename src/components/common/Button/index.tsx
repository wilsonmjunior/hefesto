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
      primary: styles['primary-button'],
      secondary: styles['secondary-button'],
      error: styles['error-button'],
      success: styles['success-button'],
      none: styles['none-button'],
    },
    outlined: {
      primary: styles['primary-button-outlined'],
      secondary: styles['secondary-button-outlined'],
      error: styles['error-button-outlined'],
      success: styles['success-button-outlined'],
      none: styles['none-button-outlined'],
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
