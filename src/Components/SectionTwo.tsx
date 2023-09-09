/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskContainer, RightContainer } from "."

export const SectionTwo = ({ todos, setTodos, currentTodos, totalPages, handlePageChange, currentPage  }: { todos: any, setTodos: any, currentTodos: any , totalPages: any, handlePageChange: any, currentPage: any}) => {
    
    return (
        <div className="h-full flex gap-6 justify-between">
            <div>
                <TaskContainer todos={todos} setTodos={setTodos} currentTodos={currentTodos} totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
            </div>
            <div className="flex shrink-0 self-stretch pl-6 border-l border-[#EAECF0]">
                <RightContainer />
            </div>
        </div>
    )
}