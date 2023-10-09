import { ReactNode } from "react"

type NotificationActionsProps = {
  children: ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return (
    <div className="flex gap-2 self-center">
      {children}
    </div>
  )
}
