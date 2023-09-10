/* eslint-disable @typescript-eslint/no-explicit-any */
import { format, parseISO } from 'date-fns';
import calendarSVG from '../assets/calendar.svg';
import clockSVG from '../assets/clock.svg';
import closeSVG from '../assets/close.svg';


export const ViewTask = ({ todos, setTodos, setCurrentContainer, task }: { todos: any, setTodos: any, setCurrentContainer: any, task: any }) => {
    const formattedDate = format(parseISO(task.date), 'do MMMM, yyyy');

    const formatTimeRange = (duration: string) => {
        // Split the time range into start and end times
        const [startTime, endTime] = duration.split(' - ');

        // Remove AM/PM from the start time
        const formattedStartTime = startTime.replace(/( AM| PM)/, '');

        // Combine the formatted start time and the original end time
        const formattedTimeRange = `${formattedStartTime} - ${endTime}`;

        return formattedTimeRange;
    }

    const handleDelete = (id: any) => {
        const updatedTodos = todos.filter((todo: { id: any; }) => todo.id !== id);
        setTodos(updatedTodos);
        setCurrentContainer('calendar');
    };

    return (
        <div className="w-full py-5 px-6 flex flex-col gap-4 border border-gray-100 rounded-lg shadow-xl">
            <button
                className="w-6 h-6 self-end"
                onClick={() => setCurrentContainer('calender')}><img src={closeSVG} alt="close" />
            </button>
            <div className='flex flex-col gap-[34px]'>
                <div className='flex flex-col gap-8'>
                    <h4 className="text-black font-bold text-lg">
                        {task.title}
                    </h4>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center  gap-2'>
                            <img src={calendarSVG} alt="calendar" className='w-5 h-5' />
                            <p className='text-black text-base font-medium'>
                                {formattedDate}
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={clockSVG} alt="clock" className='w-5 h-5' />
                            <p className='text-black text-base font-medium'>
                                {formatTimeRange(task.duration)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button
                        className='w-[164px] py-2.5 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-500 ease-in-out'
                        onClick={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                    <button
                        className='w-[164px] py-2.5 bg-[#3F5BF6] border border-[#3F5BF6] rounded-lg shadow-sm text-white hover:bg-blue-700 hover:border-blue-700 transition duration-500 ease-in-out'
                        onClick={() => setCurrentContainer('edit-task')}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    )
}