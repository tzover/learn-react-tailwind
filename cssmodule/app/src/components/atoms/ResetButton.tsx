import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styles from '../../styles/components/atoms/ResetButton.module.css'
import { todosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

// interface

// component
const ResetButton = memo(() => {
  const todos = useRecoilValue(todosState)
  const { deleteAllTodos } = useTodos()
  return (
    <button
      className={`${styles.button_style} ${todos.length === 0 || styles.button_style_color}`}
      disabled={todos.length === 0 && true}
      onClick={() => deleteAllTodos()}
    >
      All Reset
    </button>
  )
})

export default ResetButton
