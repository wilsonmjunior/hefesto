"use client"

import { useState } from "react"
import ReactDatePicker from "react-datepicker"

import "./date-picker.css"
import { CustomDatePickerHeader } from "./CustomDatepickerHeader";

interface DatePickerProps {
  onSelectedDate(date: Date): void;
}

export function DatePicker({ onSelectedDate }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const handleSelectedDate = (value: Date) => {
    setSelectedDate(value)
    onSelectedDate(value)
  }
  
  return (
    <ReactDatePicker 
      portalId="root-portal"
      selected={selectedDate} 
      onChange={(date) => handleSelectedDate(date || new Date())}
      className="datepicker-input"
      dateFormat="dd/MM/yyyy"
      withPortal
      isClearable
      renderCustomHeader={({ 
        date,
        changeMonth,
        decreaseMonth,
        changeYear,
        increaseMonth, 
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <CustomDatePickerHeader
          date={date}
          changeMonth={changeMonth}
          changeYear={changeYear}
          decreaseMonth={decreaseMonth} 
          increaseMonth={increaseMonth} 
          prevMonthButtonDisabled={prevMonthButtonDisabled}
          nextMonthButtonDisabled={nextMonthButtonDisabled}
        />
      )}
    />
  )
}

