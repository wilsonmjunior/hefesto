"use client"

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: 'primary' | 'secondary';
  variant?: 'outlined' | 'standard';
}

export function Button({ children, className: externalClass, onClick, style = 'primary', variant = 'standard' }: ButtonProps) {
  const typesButtonClass = {
    'primary': 'text-green-700 bg-green-700 active:bg-green-100 border-green-700',
    'secondary': 'text-blue-700 bg-blue-700 active:bg-blue-100 border-blue-700',
  }

  const variantButtonClass = {
    'outlined': 'bg-transparent border',
    'standard': 'text-white'
  }

  const className = `${typesButtonClass[style]} ${variantButtonClass[variant]} ${externalClass}`
   
  return (
    <button 
      className={`
        flex 
        items-center
        font-bold
        uppercase
        text-sm
        px-4
        py-2
        rounded
        shadow
        hover:shadow-lg
        outline-none
        focus:outline-none
        ease-linear
        transition-all
        duration-150 ${className}
      `} 
      type="button"
      onClick={() => alert('dialog')}
    >
      {children}
    </button>
  )
}
