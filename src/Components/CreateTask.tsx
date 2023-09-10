export const CreateTask = ({ todos, setTodos, setCurrentContainer, task }: { todos: any, setTodos: any, setCurrentContainer: any, task: any }) => {
    
    return (
        <div>
            {task.title}
            {todos.map((todo: any) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    )
}