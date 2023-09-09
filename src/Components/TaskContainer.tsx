/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskFooter, TaskHeader } from "."
import { useEffect } from "react"
import axios from 'axios';
import moment from 'moment';
import checkSVG from "../assets/check.svg"


export const TaskContainer = ({ todos, setTodos, currentTodos, totalPages, handlePageChange, currentPage  }: { todos: any, setTodos: any, currentTodos: any , totalPages: any, handlePageChange: any, currentPage: any}) => {

    useEffect(() => {
        // Fetch todos from the JSONPlaceholder API
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                const fetchedTodos = response.data;

                // Generate random durations for each todo
                const todosWithDurations = fetchedTodos.map((todo: any) => ({
                    ...todo,
                    duration: generateRandomDuration(),
                }));

                // Calculate dates for each todo in groups of seven starting from the current date
                let currentDate = moment();
                const todosWithDates = todosWithDurations.map((todo: any, index: number) => {
                    if (index > 0 && index % 7 === 0) {
                        currentDate = currentDate.add(1, 'day');
                    }
                    return {
                        ...todo,
                        date: currentDate.format('YYYY-MM-DD'),
                    };
                });

                // Sort todos by date and time
                todosWithDates.sort((a: { date: string; duration: string; }, b: { date: any; duration: string; }) => {
                    const dateComparison = a.date.localeCompare(b.date);
                    if (dateComparison !== 0) {
                        return dateComparison;
                    }
                    // Compare times if dates are equal
                    const timeA = moment(a.duration.split(' - ')[0], 'h:mm A');
                    const timeB = moment(b.duration.split(' - ')[0], 'h:mm A');
                    return timeA.diff(timeB);
                });

                setTodos(todosWithDates);
            })
            .catch((error) => {
                console.error('Error fetching todos:', error);
            });
    }, [setTodos]);



    // Function to generate two random times with different durations
    const generateRandomDuration = () => {
        const minMinutes = 10; // Minimum duration in minutes
        const maxMinutes = 180; // Maximum duration in minutes (3 hours)

        // Generate a random duration in minutes
        const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;

        // Generate a random start time between 12:00 AM (00:00) and 9:00 PM (21:00)
        const randomStartHour = Math.floor(Math.random() * 22); // Hours between 0 and 21
        const randomStartMinute = Math.floor(Math.random() * 60); // Minutes between 0 and 59

        // Create Moment.js objects for start and end times
        const startTime = moment({ hour: randomStartHour, minute: randomStartMinute });
        const endTime = moment(startTime).add(randomMinutes, 'minutes');

        // Format the duration string
        const durationString = `${startTime.format('h:mm A')} - ${endTime.format('h:mm A')}`;

        return durationString;
    };

    const formatTodoDate = (date: moment.MomentInput) => {
        const today = moment().format('YYYY-MM-DD');
        const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD');
        //const nextWeek = moment().add(7, 'days').format('YYYY-MM-DD');

        const formattedDate = moment(date).format('D MMM YYYY');

        if (date === today) {
            return 'Today';
        } else if (date === tomorrow) {
            return 'Tomorrow';
            // } else if (moment(date).isAfter(nextWeek)) {
            //     return 'Next week';
        } else {
            return formattedDate;
        }
    };

    // Function to set todo.completed to true
    const markTodoComplete = (todoId: any) => {
        const updatedTodos = todos.map((todo: { id: any; }) => {
            if (todo.id === todoId) {
                return { ...todo, completed: true };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    // Function to set todo.completed to false
    const markTodoIncomplete = (todoId: any) => {
        const updatedTodos = todos.map((todo: { id: any; }) => {
            if (todo.id === todoId) {
                return { ...todo, completed: false };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    return (
        <div className="flex flex-col gap-8">
            <TaskHeader />
            <main className="flex flex-col gap-4">
                <h4 className="text-gray-900 font-semibold text-base">
                    My Tasks
                </h4>
                <ul className="flex flex-col gap-4">
                    {currentTodos.map((todo: any) => (
                        <li key={todo.id} className="bg-gray-50 w-full h-[72px] py-4 px-6 flex justify-between items-center border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <button className={`h-5 w-5 flex justify-center items-center border border-gray-300 bg-white rounded-md hover:border-gray-400 hover:bg-gray-100 ${todo.completed ? "border-[#3F5BF6]" : ""}`}
                                    onClick={() => {
                                        if (todo.completed) {
                                            markTodoIncomplete(todo.id);
                                        } else {
                                            markTodoComplete(todo.id);
                                        }
                                    }}
                                >
                                    {todo.completed && (
                                        <img
                                            src={checkSVG}
                                            alt="check"
                                            className="w-3 h-3"
                                        />
                                    )}
                                </button>
                                <div className="flex flex-col gap-1">
                                    <h5 className={`text-gray-900 text-sm font-semibold ${todo.completed ? "text-[#D0D5DD] font-medium line-through" : ""}`}>
                                        {todo.title}
                                    </h5>
                                    <p className={`text-gray-600 text-sm font-normal ${todo.completed ? "text-[#D0D5DD] line-through" : ""}`}>
                                        {todo.duration}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 font-normal text-sm">
                                {formatTodoDate(todo.date)}
                            </p>
                        </li>
                    ))}
                </ul>
            </main>
            <TaskFooter totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
        </div>
    )
}