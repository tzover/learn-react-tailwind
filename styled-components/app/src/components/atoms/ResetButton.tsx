import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { todosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

// interface

// styled
const ResetButtonStyle = styled.button`
  padding: 1rem;
  border-radius: 0.2rem;
  background: ${(props) => props.color};
  &:hover {
    font-weight: ${(props) => (props.disabled ? '' : 'bold')};
    background: ${(props) => (props.disabled ? '' : '#f1f119')};
  }
`

// component
const ResetButton = memo(() => {
  const todos = useRecoilValue(todosState)
  const { deleteAllTodos } = useTodos()
  return (
    <ResetButtonStyle
      color={`${todos.length === 0 ? '#eee' : 'yellow'}`}
      disabled={todos.length === 0 && true}
      onClick={() => deleteAllTodos()}
    >
      All Reset
    </ResetButtonStyle>
  )
})

export default ResetButton
