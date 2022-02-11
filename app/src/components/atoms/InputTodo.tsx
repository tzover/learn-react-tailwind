import { memo, SetStateAction } from 'react'
import useTodos from '../../hooks/useTodos'

interface Props {
  inputTodo: string
  onChangeInputTodo: (e: { target: { value: SetStateAction<string> } }) => void
}

const InputTodo = memo((props: Props) => {
  const { inputTodo, onChangeInputTodo } = props
  const { registrationTodo } = useTodos()
  return (
    <input
      className='flex-1 p-3 text-2xl border-2 border-blue-200'
      type='text'
      placeholder='Have you forgotten something about todos?'
      onChange={onChangeInputTodo}
      value={inputTodo}
      onKeyPress={(e) => e.key === 'Enter' && registrationTodo(inputTodo)}
    />
  )
})

export default InputTodo
