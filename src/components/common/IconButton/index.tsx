import * as IconsFa from "react-icons/fa";
import * as IconsHi from "react-icons/hi";
import * as IconsHi2 from "react-icons/hi2";

import { classNames } from '@/utils/styles';

import { BaseButton, BaseButtonProps } from "../BaseButton";

const Icons = {
  ...IconsFa,
  ...IconsHi,
  ...IconsHi2
};

export type IconsType = keyof typeof Icons;

export type IconButtonProps = Omit<BaseButtonProps, 'children'> & { 
  title: string;
  icon: IconsType;
};

export function IconButton({ title, icon, className = '', ...othersProps }: IconButtonProps) {
  const IconComponent: JSX.ElementType = Icons[icon];

  if (!IconComponent) {
    throw new Error(`Ícone "${icon}" não encontrado em "react-icons/fa".`);
  }

  return (
    <BaseButton
      className={classNames('flex items-center p-2', className)} 
      {...othersProps}
    >
      <IconComponent className="w-8 h-8 mr-2" />
      {title}
    </BaseButton>
  )
}
