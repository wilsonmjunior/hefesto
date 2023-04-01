import Link from "next/link";

interface BreadcrumbsProps {
  paths: string[];
}

export function Breadcrumbs({ paths }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className="mt-2">
      <ol className="flex leading-none text-gray-400 font-medium">
        {
          paths.map((path, index) => index < paths.length -1 ? (
            <li key={index} className="">
              <Link href="#">
                {path}<span className="ml-2">/</span>
              </Link>
            </li>
          ) : (
            <li key={index} className="px-2 text-gray-900">
              {path}
            </li>
          ))
        }
      </ol>
    </nav>
  )
}