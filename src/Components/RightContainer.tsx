/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, ViewTask, CreateTask, EditTask } from ".";
export const RightContainer = ({ todos, setTodos, currentContainer, setCurrentContainer, task, setTask }: { todos: any, setTodos: any, currentContainer: string, setCurrentContainer: any, task: any, setTask: any }) => {


    return (
        <div className="w-full">
            {currentContainer === "calendar" && <Calendar todos={todos}  />}
            {currentContainer === "view-task" && <ViewTask todos={todos} setTodos={setTodos} setCurrentContainer={setCurrentContainer} task={task} />}
            {currentContainer === "create-task" && <CreateTask todos={todos} setTodos={setTodos} setCurrentContainer={setCurrentContainer}/>}
            {currentContainer === "edit-task" && <EditTask todos={todos} setTodos={setTodos} setCurrentContainer={setCurrentContainer} task={task} setTask={setTask} />}
        </div>
    );
};
