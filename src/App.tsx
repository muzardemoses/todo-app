/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from 'react'
import moment from 'moment';
import { Haeder, SectionOne, SectionTwo } from './Components'

function App() {
  const [todos, setTodos] = useState<any>([]);

  const [task, setTask] = useState({ todos: [] });

  const [currentContainer, setCurrentContainer] = useState("calendar");

  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(6); // Number of todos to display per page

  const [loading, setLoading] = useState(false);

  // Calculate the total number of pages based on the number of todos per page
  const totalPages = Math.ceil(todos.length / todosPerPage);

  // Function to handle pagination when a page number is clicked
  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * todosPerPage;
  const endIndex = startIndex + todosPerPage;

  // Get the todos for the current page
  const [currentTodos, setCurrentTodos] = useState([]);
  //const currentTodos = todos.slice(startIndex, endIndex);

  
  useEffect(() => {
    // Sort todos by date and time
    const sortedTodos = todos.sort((a: { date: string; duration: string; }, b: { date: any; duration: string; }) => {
      const dateComparison = a.date.localeCompare(b.date);
      if (dateComparison !== 0) {
        return dateComparison;
      }
      // Compare times if dates are equal
      const timeA = moment(a.duration.split(' - ')[0], 'h:mm A');
      const timeB = moment(b.duration.split(' - ')[0], 'h:mm A');
      return timeA.diff(timeB);
    });

    // Set currentTodos with the sorted array
    setCurrentTodos(sortedTodos.slice(startIndex, endIndex));
  }, [todos, startIndex, endIndex]);


  return (
    <div className='min-h-screen pb-24 flex flex-col gap-12 sm:pb-[100px] sm:gap-8'>
      <Haeder />
      <main className='px-16 flex flex-col gap-8 sm:px-4'>
        <SectionOne setCurrentContainer={setCurrentContainer} />
        <SectionTwo todos={todos} setTodos={setTodos} currentTodos={currentTodos} totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} currentContainer={currentContainer} setCurrentContainer={setCurrentContainer} task={task} setTask={setTask} loading={loading} setLoading={setLoading} />
      </main>
    </div>
  )
}

export default App
