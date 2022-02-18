import { atom } from 'recoil'

export const pageState = atom<number>({
  // access key
  key: 'pagenation',
  // initialize
  default: 1,
})
