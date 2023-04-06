import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

interface DatePickerHeaderProps {
  date: Date;
  changeMonth(month: number): void;
  changeYear(year: number): void;
  decreaseMonth(): void;
  increaseMonth(): void;
  nextMonthButtonDisabled:boolean;
  prevMonthButtonDisabled:boolean;
}

export function  DatePickerHeader({
  date,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: DatePickerHeaderProps) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const years = Array.from({ length: 1001 }, (_, i) => 2000 + i)

  const getMonth = months.find((_, index) => index === date.getMonth()) 

  const getYear = years.find(item => item === date.getFullYear())
  
  return (
    <>
      <div className="datepicker-header">
        <p className="datepicker-header-title">Select Date</p>
        <p className="datepicker-header-selected-date">
          {date.toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
        </p>
      </div>

      <div className="datepicker-display">
        <div className="flex font-medium text-md">
          <select
            value={getMonth}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
            className="datepicker-input w-32"
          >
            { months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select
            value={getYear}
            onChange={({ target: { value } }) => 
              changeYear(Number(value))
            }
            className="datepicker-input ml-2 w-20"
          >
            { years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <ChevronLeftIcon className="datepicker-display-icon" />
          </button>
          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            <ChevronRightIcon className="datepicker-display-icon" />
          </button>
        </div>
      </div>
    </>
  );
}
