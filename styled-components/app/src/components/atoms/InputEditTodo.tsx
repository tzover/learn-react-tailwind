import { Dispatch, memo, SetStateAction } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { editTodosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputEditTodo: string
  setInputEditTodo: Dispatch<SetStateAction<string>>
}

// styled
const InputStyle = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: xx-large;
  border: 0.2rem solid #99e69f;
`

// component
const InputEditTodo = memo((props: Props) => {
  const { inputEditTodo, setInputEditTodo } = props
  // Edit all todos
  const editTodo = useRecoilValue(editTodosState)

  // Edit registration
  const { editRegistrationTodo } = useTodos()

  return (
    <InputStyle
      type='text'
      placeholder='Have you forgotten something about todos?'
      onChange={(e) => setInputEditTodo(e.target.value)}
      value={inputEditTodo}
      onKeyPress={(e) =>
        e.key === 'Enter' && editRegistrationTodo(editTodo, inputEditTodo)
      }
    />
  )
})

export default InputEditTodo
