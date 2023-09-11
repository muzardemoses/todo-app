/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { Calendar, ViewTask, CreateTask, EditTask } from ".";
export const RightContainer = ({ todos, setTodos, currentContainer, setCurrentContainer, task, setTask }: { todos: any, setTodos: any, currentContainer: string, setCurrentContainer: any, task: any, setTask: any }) => {

    const preventScroll = () => {
        document.body.style.overflow = "hidden";
    };

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (
            (currentContainer === "view-task" || currentContainer === "create-task" || currentContainer === "edit-task") &&
            screenWidth < 640
        ) {
            preventScroll();
        } else {
            document.body.style.overflow = "auto";
        }
    }, [currentContainer]);


    return (
        <div className="w-full">
            {currentContainer === "calendar" && (
                // <div className="sm:w-full sm:fixed sm:left-0 sm:bottom-0 sm:h-full sm:pl-0 sm:z-20 sm:bg-black sm:bg-opacity-40 sm:flex sm:justify-end sm:items-end">
                    <Calendar todos={todos} />
                // </div>
            )}
            {currentContainer === "view-task" && (
                <div className="sm:w-full sm:fixed sm:left-0 sm:bottom-0 sm:h-full sm:pl-0 sm:z-20 sm:bg-black sm:bg-opacity-40 sm:flex sm:justify-end sm:items-end">
                    <ViewTask todos={todos} setTodos={setTodos} setCurrentContainer={setCurrentContainer} task={task} />
                </div>
            )}
            {currentContainer === "create-task" && (
                <div className="sm:w-full sm:fixed sm:left-0 sm:bottom-0 sm:h-full sm:pl-0 sm:z-20 sm:bg-black sm:bg-opacity-40 sm:flex sm:justify-end sm:items-end">
                    <CreateTask todos={todos} setTodos={setTodos} setCurrentContainer={setCurrentContainer} />
                </div>
            )}
            {currentContainer === "edit-task" && (
                <div className="sm:w-full sm:fixed sm:left-0 sm:bottom-0 sm:h-full sm:pl-0 sm:z-20 sm:bg-black sm:bg-opacity-40 sm:flex sm:justify-end sm:items-end">
                    <EditTask todos={todos} setTodos={setTodos} setCurrentContainer={setCurrentContainer} task={task} setTask={setTask} />
                </div>
            )}
        </div>
    );
};
