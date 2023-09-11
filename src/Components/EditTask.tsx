/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs from 'dayjs';
import { handleFormatToDate } from "../Hooks";
import closeSVG from '../assets/close.svg';
import calenderGraySVG from '../assets/calendar-gray.svg';
import clockGraySVG from '../assets/clock-gray.svg';
import bellSvg from '../assets/bell-03.svg';


export const EditTask = ({ todos, setTodos, setCurrentContainer, task, setTask }: { todos: any, setTodos: any, setCurrentContainer: any, task: any, setTask: any }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        setTitle(task.title);
        setDate(task.date);
        const [startTime, endTime] = task.duration.split(' - ');
        setStartTime(startTime);
        setEndTime(endTime);
    }, [task]);

    const splitTime = (duration: string) => {
        const [startTime, endTime] = duration.split(' - ');
        return { startTime, endTime };
    }

    const handleSaveEdit = () => {
        if (!title && !date && !startTime && !endTime) {
            return;
        }
        const updatedTodos = todos.map((todo: any) => {
            if (todo.id === task.id) {
                return {
                    ...todo,
                    title: title ? title : todo.title,
                    date: date ? date : todo.date,
                    duration: `${startTime ? startTime : splitTime(todo.duration).startTime} - ${endTime ? endTime : splitTime(todo.duration).endTime}`,
                };
            }
            return todo;
        });

        const updatedTask = updatedTodos.find((todo: any) => todo.id === task.id);
        setTask(updatedTask);
        setTodos(updatedTodos);
        alert('Task updated successfully');
        setCurrentContainer('view-task');
    };

    return (
        <div className="w-full p-6 flex flex-col gap-8 border border-gray-100 rounded-lg shadow-xl sm:h-max sm:bg-white sm:rounded-none sm:rounded-t-3xl">
            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <h5 className="text-gray-900 font-semibold text-lg">
                        Edit Task
                    </h5>
                    <button
                        className="w-6 h-6"
                        onClick={() => setCurrentContainer('view-task')}>
                        <img src={closeSVG} alt="close" />
                    </button>
                </div>
                <textarea
                    value={title}
                    className='w-full h-[140px] resize-none bg-gray-50 text-gray-500 font-normal text-base border border-gray-300 rounded-lg shadow-sm py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-50 transition duration-500 ease-in-out'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className='relative flex justify-between items-center'>
                    <div className="">
                        <button
                            className='py-2.5 px-2 flex gap-2 items-center border border-gray-300 rounded-lg shadow-sm'
                            onClick={() => {
                                setShowStartTimePicker(false)
                                setShowEndTimePicker(false)
                                setShowDatePicker(!showDatePicker)
                            }}
                        >
                            <img src={calenderGraySVG} alt="calendar" className='w-5 h-5' />
                            <p className='text-gray-500 text-sm font-semibold'>
                                {handleFormatToDate(date).slice(0, 6)}
                            </p>
                        </button>
                        {showDatePicker && (
                            <div className="w-max h-max top-14 right-0 absolute bg-white border border-gray-100 rounded-lg shadow-xl sm:-top-[500px]"
                            >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'DatePicker',
                                            'MobileDatePicker',
                                            'StaticDatePicker',
                                        ]}
                                    >
                                        <div>
                                            <DemoItem label="">
                                                <StaticDatePicker
                                                    defaultValue={dayjs(date)}
                                                    onChange={(newDate) => {
                                                        const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
                                                        setDate(formattedDate);
                                                    }}
                                                    onAccept={(newDate) => {
                                                        const formattedDate = dayjs(newDate).format('YYYY-MM-DD');
                                                        setDate(formattedDate);
                                                        setShowDatePicker(false);
                                                    }}
                                                    onClose={() => setShowDatePicker(false)}
                                                />
                                            </DemoItem>
                                        </div>
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div >
                        )}
                    </div>
                    <div className="flex gap-4">
                        <div className=''>
                            <button
                                className='py-2.5 px-2 flex gap-2 items-center border border-gray-300 rounded-lg shadow-sm'
                                onClick={() => {
                                    setShowDatePicker(false)
                                    setShowEndTimePicker(false)
                                    setShowStartTimePicker(!showStartTimePicker)
                                }}
                            >
                                <img src={clockGraySVG} alt="clock" className='w-5 h-5' />
                                <p className='text-gray-500 text-sm font-semibold'>
                                    {startTime.toLowerCase()}
                                </p>
                            </button>
                            {showStartTimePicker && (
                                <div className="w-max h-max top-14 right-0 absolute bg-white border border-gray-100 rounded-lg shadow-xl sm:-top-[500px]"
                                >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer
                                            components={[
                                                'TimePicker',
                                                'MobileTimePicker',
                                                'StaticTimePicker',
                                            ]}
                                        >
                                            <DemoItem label="">
                                                <StaticTimePicker
                                                    // ampm={false}
                                                    defaultValue={dayjs(startTime, 'HH:mm')
                                                    }
                                                    onChange={(newDate) => {
                                                        const formattedTime = dayjs(newDate).format('HH:mm');
                                                        setStartTime(formattedTime);
                                                    }}
                                                    onAccept={(newDate) => {
                                                        const formattedTime = dayjs(newDate).format('HH:mm');
                                                        setStartTime(formattedTime);
                                                        setShowStartTimePicker(false);
                                                    }}
                                                    onClose={() => setShowStartTimePicker(false)}
                                                />
                                            </DemoItem>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div >
                            )}
                        </div>
                        <div className=''>
                            <button
                                className='py-2.5 px-2 flex gap-2 items-center border border-gray-300 rounded-lg shadow-sm'
                                onClick={() => {
                                    setShowDatePicker(false)
                                    setShowStartTimePicker(false)
                                    setShowEndTimePicker(!showEndTimePicker)
                                }}
                            >
                                <img src={clockGraySVG} alt="clock" className='w-5 h-5' />
                                <p className='text-gray-500 text-sm font-semibold'>
                                    {endTime.toLowerCase()}
                                </p>
                            </button>
                            {showEndTimePicker && (
                                <div className="w-max h-max top-14 right-0 absolute bg-white border border-gray-100 rounded-lg shadow-xl sm:-top-[500px]"
                                >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer
                                            components={[
                                                'TimePicker',
                                                'MobileTimePicker',
                                                'StaticTimePicker',
                                            ]}
                                        >
                                            <DemoItem label="">
                                                <StaticTimePicker
                                                    // ampm={false}
                                                    defaultValue={dayjs(endTime, 'HH:mm')
                                                    }
                                                    onChange={(newDate) => {
                                                        const formattedTime = dayjs(newDate).format('HH:mm');
                                                        setEndTime(formattedTime);
                                                    }}
                                                    onAccept={(newDate) => {
                                                        const formattedTime = dayjs(newDate).format('HH:mm');
                                                        setEndTime(formattedTime);
                                                        setShowEndTimePicker(false);
                                                    }}
                                                    onClose={() => setShowEndTimePicker(false)}
                                                />
                                            </DemoItem>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                            )}
                        </div>
                    </div >
                </div >
                {
                    showNotification && (
                        <div className='flex justify-between items-center'>
                            <div className="flex gap-2 items-center">
                                <img src={bellSvg} alt="bell" className='w-4 h-4' />
                                <p className='text-[#667085] text-base font-medium font-["Inter"]'>
                                    10 minutes before
                                </p>
                            </div>
                            <button onClick={() => setShowNotification(false)}>
                                <img src={closeSVG} alt="close" className='w-4 h-4' />
                            </button>
                        </div>
                    )
                }
            </div >
            <div className='flex gap-3'>
                <button
                    className='w-[164px] py-2.5 border border-gray-300 rounded-lg 
                    shadow-sm hover:bg-gray-50 transition duration-500 ease-in-out'
                    onClick={() => setCurrentContainer('view-task')}
                >
                    Cancel
                </button>
                <button
                    className='w-[164px] py-2.5 bg-[#3F5BF6] border border-[#3F5BF6] rounded-lg shadow-sm text-white hover:bg-blue-700 hover:border-blue-700 transition duration-500 ease-in-out'
                    onClick={handleSaveEdit}
                >
                    Save
                </button>
            </div>
        </div >
    )
}