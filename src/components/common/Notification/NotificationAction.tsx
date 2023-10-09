import { classNames } from "@/utils/styles";
import { Icon, IconsType } from "../Icon"

type NotificationActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconsType;
};

export function NotificationAction({ icon, className = '', ...othersProps }: NotificationActionProps) {
  return (
    <div className="flex gap-2 self-center">
      <button
        className={
          classNames("w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500", className)
        }
        {...othersProps}
      >
        <Icon name={icon} className="w-3 h-3 text-zinc-50" />
      </button>
    </div>
  )
}