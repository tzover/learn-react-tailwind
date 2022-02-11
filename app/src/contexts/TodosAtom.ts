import { atom, selector } from 'recoil'
import { TodoIF } from '../models/Todos'

export const todosState = atom<TodoIF[]>({
  // access key
  key: 'todos',
  // initialize
  default: [],
})

export const deleteModalState = atom<boolean>({
  key: 'deleteModal',
  default: false,
})

export const isEditState = atom<boolean>({
  key: 'isEdit',
  default: false,
})

export const editTodosState = atom<TodoIF[]>({
  // access key
  key: 'editTodos',
  // initialize
  default: [{ id: '', date: '', todo: '', complete: false }],
})

export const editTodosTextState = atom<string>({
  // access key
  key: 'editTodosText',
  // initialize
  default: '',
})

export const isCompleteState = atom<boolean>({
  key: 'isComplete',
  default: false,
})

export const infoValue = selector({
  key: 'infoValue',
  get: ({ get }) => ({
    total: get(todosState).length,
    completed: get(todosState).filter((todo) => todo.complete).length,
    notCompleted: get(todosState).filter((todo) => !todo.complete).length,
  }),
})
