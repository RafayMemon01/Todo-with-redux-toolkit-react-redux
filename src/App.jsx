import { useState } from 'react'
import AllTodo from './components/AllTodo'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
      <h1 className='text-3xl font-bold mb-4'>Learn About Redux Toolkit</h1>
      <div className='w-full max-w-md'>
        <AddTodo />
        <AllTodo />
      </div>
    </div>
  )
}

export default App
