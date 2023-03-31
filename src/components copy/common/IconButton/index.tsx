import { classNames } from "@/utils/styles";
import { Button, ButtonProps } from "../Button"

interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  icon: React.ReactNode;
}

export function IconButton({ icon, className = "", ...othersProps }: IconButtonProps) {
  return (
    <Button
      className={classNames('p-2', className)}
      {...othersProps}
    >
      {icon}
    </Button>
  )
}
