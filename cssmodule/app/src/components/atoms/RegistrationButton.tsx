import { memo } from 'react'
import styled from 'styled-components'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
}

// styled
const ButtonStyle = styled.button`
  padding: 0 1rem;
  margin-left: 1rem;
  font-size: x-large;
  border-radius: 0.5rem;
  background: #99bae6;
  cursor: pointer;
  &:hover {
    background: #4a83e6;
    font-weight: bold;
  }
`

// component
const RegistrationButton = memo((props: Props) => {
  const { inputTodo } = props
  const { registrationTodo } = useTodos()
  return (
    <ButtonStyle type='button' onClick={() => registrationTodo(inputTodo)}>
      Go
    </ButtonStyle>
  )
})

export default RegistrationButton
