type NotificationContentProps = {
  text: string;
  type: string;
  time: string;
}

export function NotificationContent({ text, type, time }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {text}
      </p>

      <div className="text-xs text-zinc-400 flex items-center gap-1">
        <span>{type}</span>
        <span>{time}</span>
      </div>
    </div> 
  )
}
 