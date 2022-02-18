import { memo } from 'react'
import useTodos from '../../hooks/useTodos'

interface Props {
  inputTodo: string
}

const RegistrationButton = memo((props: Props) => {
  const { inputTodo } = props
  const { registrationTodo } = useTodos()
  return (
    <button
      className={`text-xl ml-5 px-10 rounded-md cursor-pointer bg-blue-200 hover:bg-blue-300 hover:font-bold`}
      onClick={() => registrationTodo(inputTodo)}
    >
      Go
    </button>
  )
})

export default RegistrationButton
