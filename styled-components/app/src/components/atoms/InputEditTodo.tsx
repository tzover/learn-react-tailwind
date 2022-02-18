import { Dispatch, memo, SetStateAction } from 'react'
import { useRecoilValue } from 'recoil'
import { editTodosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

interface Props {
  inputEditTodo: string
  setInputEditTodo: Dispatch<SetStateAction<string>>
}

const InputEditTodo = memo((props: Props) => {
  const { inputEditTodo, setInputEditTodo } = props
  // Edit all todos
  const editTodo = useRecoilValue(editTodosState)

  // Edit registration
  const { editRegistrationTodo } = useTodos()

  return (
    <input
      className='flex-1 p-3 text-2xl border-2 border-green-200'
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
