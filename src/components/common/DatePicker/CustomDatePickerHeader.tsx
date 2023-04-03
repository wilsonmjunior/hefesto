import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

interface CustomDatePickerHeaderProps {
  date: Date;
  changeMonth(month: number): void;
  changeYear(year: number): void;
  decreaseMonth(): void;
  increaseMonth(): void;
  nextMonthButtonDisabled:boolean;
  prevMonthButtonDisabled:boolean;
}

export function  CustomDatePickerHeader({
  date,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: CustomDatePickerHeaderProps) {
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
        <div className="font-medium text-md">
          <select
            value={getMonth}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
            className="ml-2"
          >
            { months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
          <select
            value={getYear}
            onChange={({ target: { value } }) =>
              changeYear(months.indexOf(value))
            }
            className="ml-2"
          >
            { years.map((year, index) => (
              <option key={index}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <ChevronLeftIcon />
          </button>
          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}
