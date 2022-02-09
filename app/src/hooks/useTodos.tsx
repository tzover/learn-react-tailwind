import { useCallback, useState } from 'react'
import { checkTodo } from '../libs/checkTodo'
import { TodoIF } from '../models/Todos'
import { getDateTime } from '../libs/getDateTime'
import { v4 } from 'uuid'

const useTodos = () => {
  const [todos, setTodos] = useState<TodoIF[]>([])

  // registration
  const registrationTodo = useCallback(
    (newTodo: string) => {
      // input check
      const isNewTodo = checkTodo(newTodo)
      if (!isNewTodo) return

      // create id
      const id = v4()

      // create date
      const { dateTime } = getDateTime()

      // set Todos
      setTodos([...todos, { id: id, date: dateTime, todo: newTodo }])
    },
    [todos],
  )

  // delete
  const deleteTodo = useCallback(
    (id: number): void => {
      console.log(id)
      console.log(todos)
      const newTodos = todos.filter((_, idx) => idx !== id)
      setTodos(newTodos)
    },
    [todos],
  )

  // edit
  const editTodo = useCallback(
    (id: number) => {
      console.log(String(id))
    },
    [todos],
  )

  return { todos, registrationTodo, deleteTodo, editTodo }
}

export default useTodos
