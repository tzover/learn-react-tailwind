import { useCallback } from 'react'
import { checkTodo } from '../libs/checkTodo'
import { getDateTime } from '../libs/getDateTime'
import { v4 } from 'uuid'
import { useRecoilState } from 'recoil'
import { todosState } from '../contexts/TodosAtom'

const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState)

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
      setTodos([
        ...todos,
        { id: id, date: dateTime, todo: newTodo, complete: false },
      ])
    },
    [todos],
  )

  // delete
  const deleteTodo = useCallback(
    (id: number): void => {
      const newTodos = todos.filter((_, idx) => idx !== id)
      setTodos(newTodos)
    },
    [todos],
  )

  // delete all
  const deleteAllTodos = useCallback(() => {
    // validation
    if (todos.length === 0) return

    // alert
    console.log('all Delete todos')

    // initializetion
    setTodos([])
  }, [todos])

  // complete
  const CompleteTodo = useCallback(
    (id: number) => {
      const editTodos = todos.filter((_, idx) => idx === id)
      console.log(editTodos)
    },
    [todos],
  )

  // edit
  const editTodo = useCallback(
    (id: number, target: string) => {
      // delete target
      const deleteTarget = todos.filter((_, idx) => idx !== id)

      // Target information
      const buff = todos.filter((_, idx) => idx === id)
      const editTarget = buff[0]

      // Recreate
      const newArray = [
        {
          id: editTarget.id,
          date: editTarget.date,
          todo: target,
          complete: editTarget.complete,
        },
        ...deleteTarget,
      ]

      // Set state
      setTodos(newArray.sort((a, b) => (a.date > b.date ? 1 : -1)))
    },
    [todos],
  )
  return {
    todos,
    registrationTodo,
    deleteTodo,
    editTodo,
    deleteAllTodos,
    CompleteTodo,
  }
}

export default useTodos
