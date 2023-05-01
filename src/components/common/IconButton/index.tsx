import { classNames } from '@/utils/styles';
import { BaseButton, BaseButtonProps } from '../BaseButton';

interface IconButtonProps extends Omit<BaseButtonProps, 'children'> {
  icon: React.ReactNode;
}

export function IconButton({
  icon,
  className = '',
  ...othersProps
}: IconButtonProps) {
  return (
    <BaseButton className={classNames('p-2', className)} {...othersProps}>
      {icon}
    </BaseButton>
  );
}
