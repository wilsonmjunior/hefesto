'use client'

import ReactDatePicker from "react-datepicker"

import "./date-picker.css"
import { DatePickerHeader } from "./DatePickerHeader"

interface DatePickerProps {
  selectedDate: Date;
  onSelectedDate(date: Date): void;
}

export function DatePicker({ selectedDate, onSelectedDate }: DatePickerProps) {
  const CustomTimeBox = () => {
    const hours = Array.from({ length: 13 }, (_, i) => 0 + i)
    const minutes = Array.from({ length: 60 }, (_, i) => 0 + i)

    return (
      <div className="container mx-auto p-0">
        <p className="font-medium text-sm">Time</p>
        <div className="flex items-center justify-between m-1 w-[150px] datepicker-input">
          <select 
            className="
              outline-none
              appearance-none
              bg-transparent
              text-sm 
              font-medium
              text-center"
          >
            {hours.flatMap(hour => (
              <option value="01">{hour}</option>
            ))}
          </select>
          
          <span className="font-bold">:</span>
          
          <select 
            className="
              outline-none
              appearance-none
              bg-transparent
              text-sm
              font-medium
              text-center"
            >
              {minutes.flatMap(minute => (
                <option value={minute}>{minute.valueOf()}</option>
              ))} 
          </select>
    
          <select 
            className="
              outline-none
              appearance-none
              bg-transparent
              text-sm
              font-medium
              text-center"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
          </select>
        </div>
      </div>
    )
  }

  return (
    <ReactDatePicker 
      portalId="root-portal"
      selected={selectedDate} 
      onChange={onSelectedDate}
      className="datepicker-input"
      dateFormat="dd/MM/yyyy"
      withPortal
      timeInputLabel=""
      showTimeInput
      customTimeInput={<CustomTimeBox />}
      renderCustomHeader={({ 
        date,
        changeMonth,
        decreaseMonth,
        changeYear,
        increaseMonth, 
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <DatePickerHeader
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

