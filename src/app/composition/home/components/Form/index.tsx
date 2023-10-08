'use client';

import { IconButton } from "@/components/Button/IconButton";

export function Form() {
  return (
    <div className="flex">
      <IconButton
        title="Estudos"
        icon="HiAcademicCap"
        onClick={() => console.log('Delta PI')}
      />
      <div className="w-4" />
      <IconButton
        title="Mensagem"
        icon="HiChatAlt2"
        onClick={() => console.log('Delta PI')}
      />
    </div>
  )
}