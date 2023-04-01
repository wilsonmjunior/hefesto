import { Breadcrumbs } from "../Breadcrumbs";

interface HeaderProps {
  title: string;
  paths: string[];
}

export function Header({ title, paths }: HeaderProps) {
  return (
    <div className="items-center my-10">
      <h1>{title}</h1>

      <Breadcrumbs paths={paths} />
    </div>
  )
}
