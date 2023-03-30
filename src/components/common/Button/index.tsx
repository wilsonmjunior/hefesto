import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  // className?: string;
  // onClick: () => void;
  // style?: 'primary' | 'secondary';
  // variant?: 'outlined' | 'standard';
}
// variant: 'outlined' | 'standard 
//type: 'primary' | 'secondary'
export function Button({ children }: ButtonProps) {
  return (
    <button 
      className={`${styles.primary} ${styles.outlined}`}
      // type="button"
      // onClick={onClick}
    >
      {children}
    </button>
  )
}
