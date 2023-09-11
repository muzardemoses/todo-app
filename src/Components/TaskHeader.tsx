import {  addDays } from 'date-fns';

export const TaskHeader = () => {
    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentMonthText = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Create an array to hold the days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Calculate the start date (Monday of the current week)
    const startDate = addDays(currentDate, -currentDate.getDay() + 1);

    // Create an array to hold the 11 days starting from Monday
    const datesToShow = Array.from({ length: 11 }, (_, index) => {
        const date = addDays(startDate, index);
        return date.getDate();
    });

    // Add the current day to the datesToShow if it's not already there
    if (!datesToShow.includes(currentDay)) {
        datesToShow.push(currentDay);
    }

    // Sort the datesToShow array to ensure it's in ascending order
    datesToShow.sort((a, b) => a - b);

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-3">
            <h4 className="text-gray-900 font-semibold text-base">
                {currentMonthText} {currentYear}
            </h4>
            <div className="w-full flex gap-4 sm:gap-3 sm:overflow-x-scroll sm:overflow-y-hidden">
                {datesToShow.map((day) => (
                    <div
                        key={day}
                        className={`flex-1 border border-gray-700 rounded-lg px-4 py-2.5 flex flex-col gap-2 items-center text-gray-700 text-sm font-semibold sm:px-3 sm:py-2 sm:text-xs ${day === currentDay ? 'bg-[#3F5BF6] text-[#ffff] border-[#3F5BF6]' : ''
                            }`}
                    >
                        <p>{daysOfWeek[new Date(currentDate.getFullYear(), currentMonth, day).getDay()]}</p>
                        <p>{day}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
