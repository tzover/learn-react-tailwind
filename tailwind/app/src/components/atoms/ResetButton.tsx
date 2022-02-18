import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { todosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

const ResetButton = memo(() => {
  const todos = useRecoilValue(todosState)
  const { deleteAllTodos } = useTodos()
  return (
    <button
      className={`p-3 rounded-xl ${
        todos.length === 0
          ? 'bg-gray-400'
          : 'bg-yellow-200 hover:bg-yellow-300 hover:font-bold'
      }`}
      disabled={todos.length === 0 && true}
      onClick={() => deleteAllTodos()}
    >
      All Reset
    </button>
  )
})

export default ResetButton
