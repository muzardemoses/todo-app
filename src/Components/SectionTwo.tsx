/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskContainer, RightContainer } from "."

export const SectionTwo = ({ todos, setTodos, currentTodos, totalPages, handlePageChange, currentPage, currentContainer, setCurrentContainer, task, setTask }: { todos: any, setTodos: any, currentTodos: any, totalPages: any, handlePageChange: any, currentPage: any, currentContainer: any, setCurrentContainer: any, task: any, setTask: any }) => {

    return (
        <div className="w-full h-full flex gap-5 sm:gap-0 sm:flex-col">
            <div className="w-full">
                <TaskContainer todos={todos} setTodos={setTodos} currentTodos={currentTodos} totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} currentContainer={currentContainer}  setCurrentContainer={setCurrentContainer} task={task} setTask={setTask} />
            </div>
            <div className="w-[418px] pl-6 flex shrink-0 self-stretch border-l border-[#EAECF0] sm:border-l-0 ">
                <RightContainer todos={todos} setTodos={setTodos} currentContainer={currentContainer} setCurrentContainer={setCurrentContainer} task={task} setTask={setTask} />
            </div>
        </div>
    )
}