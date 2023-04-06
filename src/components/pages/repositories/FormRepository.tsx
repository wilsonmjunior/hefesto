'use client'

import { DatePicker } from "@/components/common/DatePicker"
import { Form } from "@/components/templates/Form";
import { useState } from "react";

export function FormRepository() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  
  return (
    <Form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-gray-700">CPF:</span>
          <input 
            type="text"
            name="cpf"
            className="
              mt-1
              p-2
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-blue-500
              focus:ring-blue-500
              focus:ring-opacity-50" 
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Nome:</span>
          <input
            type="text"
            name="name"
            className="
              mt-1
              p-2
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-blue-500
              focus:ring-blue-500
              focus:ring-opacity-50" 
          />
        </label>

        <label className="block">
          <span className="text-gray-700">RG:</span>
          <input
            type="text"
            name="rg" 
            className="
            mt-1
            p-2
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-blue-500
            focus:ring-blue-500
            focus:ring-opacity-50" 
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Data de Nascimento:</span>
          <DatePicker selectedDate={selectedDate} onSelectedDate={setSelectedDate} />
        </label>

        <label className="block">
          <span className="text-gray-700">Estado Civil:</span>
          <select
            name="civil_status"
            className="
              mt-1
              p-2
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-blue-500
              focus:ring-blue-500
              focus:ring-opacity-50"
          >
            <option value="">Selecione uma opção</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viuvo">Viúvo</option>
          </select>
        </label>
      </div>
    </Form>
  )
}