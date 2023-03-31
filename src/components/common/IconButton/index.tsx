import { Button, ButtonProps } from "../Button"

interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon?: any;
}

export function IconButton({ icon: Icon, ...othersProps }: IconButtonProps) {
  return (
    <Button
      className="rounded-full p-2"
      {...othersProps}
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
    </Button>
  )
}
