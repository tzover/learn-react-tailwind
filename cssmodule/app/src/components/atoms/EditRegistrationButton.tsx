import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { editTodosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
}

// styled
const EditButtonStyle = styled.button`
  padding: 0 1rem;
  margin-left: 1rem;
  font-size: x-large;
  border-radius: 0.5rem;
  background: #99e69f;
  cursor: pointer;
  &:hover {
    background: #4ae657;
    font-weight: bold;
  }
`

// component
const EditRegistrationButton = memo((props: Props) => {
  const { inputTodo } = props
  // Edit all todos
  const editTodo = useRecoilValue(editTodosState)

  const { editRegistrationTodo } = useTodos()
  return (
    <EditButtonStyle
      type='button'
      onClick={() => editRegistrationTodo(editTodo, inputTodo)}
    >
      Go
    </EditButtonStyle>
  )
})

export default EditRegistrationButton
