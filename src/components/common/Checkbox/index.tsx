import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import './checkbox.css';

type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Checkbox({ ...othersProps }: CheckboxProps) {
  return (
    <label className="container">
      <input type="checkbox" {...othersProps} />
    </label>
  );
}
