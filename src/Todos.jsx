import { useState, useEffect } from 'react'
import { supabase } from './utils/supabase' // adjust if path differs

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const { data, error } = await supabase.from('todos').select()

      if (error) {
        return
      }

      setTodos(data)
    }

    getTodos()
  }, []) // run only once

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold mb-2">My Todos</h2>
      <ul className="space-y-1">
        {todos.map((todo) => (
          <li key={todo.id} className="bg-white/10 backdrop-blur p-2 rounded">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
