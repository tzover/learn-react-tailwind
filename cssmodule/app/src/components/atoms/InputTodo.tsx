import { memo, SetStateAction } from 'react'
import styled from 'styled-components'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
  onChangeInputTodo: (e: { target: { value: SetStateAction<string> } }) => void
}

// styled
const InputStyle = styled.input`
  flex: 1;
  padding: 1rem;
  font-size: xx-large;
  border: 0.2rem solid #8fa9da;
`

// component
const InputTodo = memo((props: Props) => {
  const { inputTodo, onChangeInputTodo } = props
  const { registrationTodo } = useTodos()
  return (
    <InputStyle
      type='text'
      placeholder='Have you forgotten something about todos?'
      onChange={onChangeInputTodo}
      value={inputTodo}
      onKeyPress={(e) => e.key === 'Enter' && registrationTodo(inputTodo)}
    />
  )
})

export default InputTodo
