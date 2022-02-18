import { atom } from 'recoil'
import { TodoIF } from '../models/Todos'

export const todoState = atom<TodoIF[]>({
  // access key
  key: 'todos',
  // initialize
  default: [],
})
