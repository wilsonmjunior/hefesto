interface FormProps {
  children: React.ReactElement;
}

export function Form({ children }: FormProps) {
  return (
    <div>
      {children}
    </div>
  )
}
