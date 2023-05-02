import { ReactNode } from "react"

type PageContentProps = {
  children: ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  return (
    <div>{children}</div>
  )
}
