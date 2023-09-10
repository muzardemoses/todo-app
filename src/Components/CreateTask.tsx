import { useState, useEffect, useRef } from "react"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';


export const CreateTask = ({ todos, setTodos, setCurrentContainer, task }: { todos: any, setTodos: any, setCurrentContainer: any, task: any }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setShowDatePicker(!showDatePicker)} className="w-6 h-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
            {showDatePicker && (
                <div className="w-max h-max absolute border border-gray-100 rounded-lg shadow-xl"
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                'DatePicker',
                                'StaticDatePicker',
                            ]}
                        >
                            <div>
                                <DemoItem label="Static variant">
                                    <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>
                            </div>
                        </DemoContainer>
                    </LocalizationProvider>
                </div >
            )}
        </div >
    )
}