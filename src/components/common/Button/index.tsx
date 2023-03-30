import { classNames } from '@/utils/styles'
import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: () => void;
  color?: 'primary' | 'secondary';
  variant?: 'outlined' | 'standard';
  error?: boolean;
  success?:boolean;
}

export function Button({ children, variant = 'standard', color = 'primary', error, success, ...othersProps }: ButtonProps) {
  // const customStyle = color === 'primary' ? (

  // ) : (

  // )

  const colorStyle = color === 'primary' ? styles.primary : styles.secondary
  const variantStyle = variant === 'outlined' ? styles.outlined : ''
  const errorStyle = error ? styles.error : ''
  const successStyle = success ? styles.error : ''

  return (
    <button 
      className={styles['primary-button']}
      // className={
      //   classNames(
      //     styles.button, 
      //     colorStyle, 
      //     variantStyle, 
      //     errorStyle, 
      //     successStyle
      //   )}
      {...othersProps}
    >
      {children}
    </button>
  )
}
