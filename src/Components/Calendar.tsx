/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState } from 'react';
import moment from 'moment';
import chevronLeftSVG from '../assets/chevron-left.svg';
import chevronRightSVG from '../assets/chevron-right.svg';

export const Calendar = ({ todos }: { todos: any }) => {
    const [currentDate, setCurrentDate] = useState(moment());

    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

    const handlePreviousMonth = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.clone().add(1, 'month'));
    };

    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sat'];

    const daysInMonth = [];
    const daysInCurrentMonth = currentDate.daysInMonth();

    for (let day = 1; day <= daysInCurrentMonth; day++) {
        const date = moment(currentDate).date(day);
        daysInMonth.push(date);
    }

    // Determine the index (0-6) of the first day of the month
    const firstDayIndex = daysInMonth[0].day();

    // Create an array to represent the grid
    const grid = new Array(7 * (firstDayIndex + daysInCurrentMonth));

    // Fill the grid with empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
        grid[i] = (
            <div key={`empty-${i}`} className="text-center">
                {/* Empty cell */}
            </div>
        );
    }

    // Fill the grid with the days of the month
    for (let dayIndex = 0; dayIndex < daysInCurrentMonth; dayIndex++) {
        const date = daysInMonth[dayIndex];
        grid[firstDayIndex + dayIndex] = (
            <button
                key={date.format('YYYY-MM-DD')}
                className={`relative h-10 w-10 py-2.5 rounded-full flex justify-center items-center text-gray-700 font-medium text-sm  transition duration-500 ease-in-out ${(date.isSame(currentDate, 'day') && date.isSame(moment(), 'month')) ? 'bg-[#3F5BF6] text-[#ffff] hover:bg-blue-400' : 'hover:bg-gray-100 hover:text-black'
                    } 
                    ${date.isSame(selectedDate, 'day') ? 'border-2 border-[#3F5BF6]' : ''
                    }`}
                onClick={() =>
                    setSelectedDate(date.format('YYYY-MM-DD'))
                }
            >
                <div className="font-semibold">{date.format('D')}</div>
                {/* Add day of the week */}
                {/* <div className="text-sm text-gray-600">
                    {date.format('dd')}
                </div> */}
                {/* Add a dot if there are todos on this day */}
                {todos.some((todo: { date: moment.MomentInput }) => moment(todo.date).isSame(date, 'day')) && (
                    <div className="absolute bottom-1 right-4 h-[5px] w-[5px] rounded-full bg-[#3F5BF6]"></div>
                )}
            </button>
        );
    }

    return (
        <div className="w-full py-5 px-6 flex flex-col gap-3 border border-gray-100 rounded-lg shadow-xl sm:hidden sm:h-max sm:bg-white sm:rounded-none sm:rounded-t-3xl">
            <div className="flex justify-between items-center">
                <button onClick={handlePreviousMonth}>
                    <img src={chevronLeftSVG} alt="chevron-left" className="w-5 h-5" />
                </button>
                <h2 className="text-gray-700 font-semibold text-base">
                    {currentDate.format('MMMM YYYY')}
                </h2>
                <button onClick={handleNextMonth}>
                    <img src={chevronRightSVG} alt="chevron-right" className="w-5 h-5" />
                </button>
            </div>
            <div className="flex gap-3">
                <input
                    type="text"
                    value={moment(selectedDate).format('MMM D, YYYY')} // Format the selected date
                    readOnly // Make the input read-only
                    placeholder="Search"
                    className="w-full py-2 px-3.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                />
                <button
                    className="h-max px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-500 ease-in-out"
                    onClick={() => {
                        setSelectedDate(moment().format('YYYY-MM-DD'))
                        setCurrentDate(moment())
                    }
                    }
                >
                    Today
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map((day) => (
                    <button
                        key={day}
                        className="h-10 w-10 py-2.5 rounded-full flex justify-center items-center text-gray-700 font-medium text-sm hover:bg-gray-100 transition duration-500 ease-in-out"
                    >
                        {day}
                    </button>
                ))}
                {grid.map((cell, index) => (
                    <Fragment key={`cell-${index}`}>{cell}</Fragment>
                ))}
            </div>
        </div>
    );
};