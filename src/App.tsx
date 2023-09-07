import { Haeder, SectionOne, SectionTwo } from './Components'

function App() {

  return (
    <div className='min-h-screen flex flex-col gap-12'>
      <Haeder />
      <main className='px-16 flex flex-col gap-8'>
        <SectionOne />
        <SectionTwo />
      </main>
    </div>
  )
}

export default App
