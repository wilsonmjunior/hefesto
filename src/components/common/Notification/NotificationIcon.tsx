import { Icon, IconsType } from "../Icon"

type NotificationIconProps = {
  icon: IconsType;    
}

export function NotificationIcon({ icon }: NotificationIconProps) {
  return (
    <Icon name={icon} className="w-8 h-8 mr-2 text-white" />
  )
}
