import * as IconsFa from "react-icons/fa";
import * as IconsHi from "react-icons/hi";
import * as IconsHi2 from "react-icons/hi2";

export const Icons = {
  ...IconsFa,
  ...IconsHi,
  ...IconsHi2
};

export type IconsType = keyof typeof Icons;

export type IconProps = {
  name: IconsType;
  className: string;
};

export function Icon({ name, className }: IconProps) {
  const IconComponent: JSX.ElementType = Icons[name];

  if (!IconComponent) {
    throw new Error(`Ícone "${name}" não encontrado em "react-icons/fa".`);
  }

  return (
    <IconComponent className={className} />
  )
}
