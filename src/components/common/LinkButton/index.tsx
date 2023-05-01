import Link, { LinkProps } from 'next/link';

import { BaseButtonType, colorStyles } from '../BaseButton';

import '../BaseButton/button.css';

interface LinkButtonProps extends LinkProps, BaseButtonType {
  href: string;
}

export function LinkButton({
  children,
  variant = 'outlined',
  color = 'gray',
  href,
  ...othersProps
}: LinkButtonProps) {
  return (
    <Link href={href} className={colorStyles[variant][color]} {...othersProps}>
      {children}
    </Link>
  );
}
