import { IconButton } from "@/components/common/IconButton";

export type ActionItem = {
  icon: React.ReactNode;
  label?: string;
  onClick: () => void;
};

type ActionTableProps = {
  options: ActionItem[];
};

export function ActionTable({ options }: ActionTableProps) {
  return (
    <div className="flex flex-row items-center space-x-2">
      {options.map((option, index) => (
        <IconButton
          icon={option.icon}
          key={index}
          onClick={option.onClick}
          variant="none"
          color="gray"
        />
      ))}
    </div>
  );
}
