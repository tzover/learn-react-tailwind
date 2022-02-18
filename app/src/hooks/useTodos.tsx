import { useCallback } from 'react'
import { checkTodo } from '../libs/checkTodo'
import { getDateTime } from '../libs/getDateTime'
import { v4 } from 'uuid'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  deleteModalState,
  todosState,
  isEditState,
  editTodosState,
  isCompleteState,
} from '../contexts/TodosAtom'
import { TodoIF } from '../models/Todos'

const useTodos = () => {
  const todos = useRecoilValue(todosState)
  const setTodos = useSetRecoilState(todosState)
  const setIsDeleteModalOpen = useSetRecoilState(deleteModalState)
  const setEditFlug = useSetRecoilState(isEditState)
  const setEditState = useSetRecoilState(editTodosState)
  const setIsComplete = useSetRecoilState(isCompleteState)

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

    // check alert
    setIsDeleteModalOpen(true)
  }, [todos])

  // complete
  const completedTodo = useCallback(
    (id: string, isCompleteFlug: boolean) => {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              complete: !todo.complete,
            }
          }
          return todo
        }),
      )
      setIsComplete(isCompleteFlug)
      return isCompleteFlug
    },
    [todos],
  )

  // editFlug
  const editFlug = useCallback(
    (id: number) => {
      setEditFlug(true)
      setEditState([todos[id]])
    },
    [todos],
  )

  // edit
  const editRegistrationTodo = useCallback(
    (data: TodoIF[], target: string) => {
      // delete target
      const deletedTarget = todos.filter((item) => item.id !== data[0].id)

      // Target information
      const buff = todos.filter((item) => item.id === data[0].id)
      const editTarget = buff[0]

      // Recreate
      const newArray = [
        {
          id: editTarget.id,
          date: editTarget.date,
          todo: target,
          complete: editTarget.complete,
        },
        ...deletedTarget,
      ]

      // Set state
      setTodos(newArray.sort((a, b) => (a.date > b.date ? 1 : -1)))

      // Reset flug
      setEditFlug(false)
    },
    [todos],
  )
  return {
    todos,
    registrationTodo,
    deleteTodo,
    editFlug,
    editRegistrationTodo,
    deleteAllTodos,
    completedTodo,
  }
}

export default useTodos
