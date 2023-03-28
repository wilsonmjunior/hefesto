interface ParagraphProps {
  children: string;
  className?: string;
}

export function Paragraph({ children, className }: ParagraphProps) {
  return <p className={`text-sm font-normal ${className}`}>{children}</p>
}
