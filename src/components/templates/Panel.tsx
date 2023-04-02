interface PanelProps {
  children: React.ReactNode;
}

export function Panel({ children }: PanelProps) {
  return (
    <div className="container mx-auto p-7 rounded-lg border">
      {children}
    </div>
  )
}
