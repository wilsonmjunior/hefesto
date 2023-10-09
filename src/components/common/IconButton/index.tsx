import { classNames } from '@/utils/styles';

import { BaseButton, BaseButtonProps } from "../BaseButton";
import { IconsType, Icon } from '../Icon';

export type IconButtonProps = Omit<BaseButtonProps, 'children'> & { 
  title: string;
  icon: IconsType;
};

export function IconButton({ title, icon, className = '', ...othersProps }: IconButtonProps) {
  return (
    <BaseButton
      className={classNames('flex items-center p-2', className)} 
      {...othersProps}
    >
      <Icon name={icon} className='w-6 h-6' />
      {title}
    </BaseButton>
  )
}
