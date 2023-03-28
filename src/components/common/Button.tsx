import { useMemo } from "react"

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: 'primary' | 'secondary';
  variant?: 'outlined' | 'standard';
}

export function Button({ children, className: externalClass, style = 'primary', variant = 'standard' }: ButtonProps) {
  const typesButtonClass = useMemo(() => ({
    'primary': 'text-green-700 bg-green-700 active:bg-green-100 border-green-700',
    'secondary': 'text-blue-700 bg-blue-700 active:bg-blue-100 border-blue-700',
  }), [])

  const variantButtonClass = useMemo(() => ({
    'outlined': 'bg-transparent border',
    'standard': 'text-white'
  }), [])

  const className = useMemo(() => `${typesButtonClass[style]} ${variantButtonClass[variant]} ${externalClass}`,
    [
      externalClass,
      style,
      typesButtonClass,
      variant,
      variantButtonClass
    ])

  return (
    <button 
      className={`
        flex 
        items-center
        font-bold
        uppercase
        text-sm
        px-6
        py-3
        rounded
        shadow
        hover:shadow-lg
        outline-none
        focus:outline-none
        mr-1
        mb-1
        ease-linear
        transition-all
        duration-150 ${className}
      `} 
      type="button"
      onClick={() => alert('clicked')}
    >
      {children}
    </button>
  )
}
