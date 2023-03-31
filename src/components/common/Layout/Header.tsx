import Link from "next/link";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="items-center my-10">
      <h1>{title}</h1>

      <nav aria-label="breadcrumb" className="mt-2">
        <ol className="flex leading-none text-gray-400 font-medium divide-x divide-gray-400">
          <li className="pr-2">
            <Link href="#">
              Home
            </Link>
          </li>
          <li className="px-2 text-gray-900">
            Repositories
          </li>
        </ol>
      </nav>
    </div>
  )
}
