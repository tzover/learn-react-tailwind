import { atom, selector } from 'recoil'
import { TodoIF } from '../models/Todos'

export const todosState = atom<TodoIF[]>({
  // access key
  key: 'todos',
  // initialize
  default: [],
})

export const infoValue = selector({
  key: 'infoValue',
  get: ({ get }) => ({
    total: get(todosState).length,
    completed: get(todosState).filter((todo) => todo.complete).length,
    notCompleted: get(todosState).filter((todo) => !todo.complete).length,
  }),
})
