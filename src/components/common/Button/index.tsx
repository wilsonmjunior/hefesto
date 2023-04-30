import { BaseButton, BaseButtonProps } from '../BaseButton';

export type Color = 'primary' | 'secondary' | 'error' | 'gray';

interface ButtonProps extends Omit<BaseButtonProps, 'children'> {
  icon?: React.ReactNode;
  title: string;
}

export function Button({
  color,
  icon,
  title,
  variant,
  ...othersProps
}: ButtonProps) {
  return (
    <BaseButton color={color} variant={variant} {...othersProps}>
      {icon}
      <p className="ml-1">{title}</p>
    </BaseButton>
  );
}
