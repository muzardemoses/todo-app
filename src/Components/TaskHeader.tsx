export const TaskHeader = () => {
    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentMonthText = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Create an array to hold the days of the week
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Calculate the start date (Monday of the current week)
    const startDate = new Date(currentYear, currentMonth, currentDay - currentDate.getDay() + 1);

    // Create an array to hold the 11 days starting from Monday
    const datesToShow = Array.from({ length: 11 }, (_, index) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + index);
        return date.getDate();
    });

    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-gray-900 font-semibold text-base">
                {currentMonthText} {currentYear}
            </h4>
            <div className="flex gap-4">
                {datesToShow.map(day => (
                    <div
                        key={day}
                        className={`w-max border border-gray-700 rounded-lg px-4 py-2.5 flex flex-col gap-2 items-center text-gray-700 text-sm font-semibold ${
                            day === currentDay ? 'bg-[#3F5BF6] text-[#ffff] border-[#3F5BF6]' : ''
                        }`}
                    >
                        <p>
                            {daysOfWeek[(startDate.getDay() + day - 1) % 7]}
                        </p>
                        <p>
                            {day}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};