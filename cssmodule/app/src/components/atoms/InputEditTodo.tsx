import { Dispatch, memo, SetStateAction } from 'react'
import { useRecoilValue } from 'recoil'
import styles from '../../styles/components/atoms/InputEditTodo.module.css'
import { editTodosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputEditTodo: string
  setInputEditTodo: Dispatch<SetStateAction<string>>
}

// component
const InputEditTodo = memo((props: Props) => {
  const { inputEditTodo, setInputEditTodo } = props
  // Edit all todos
  const editTodo = useRecoilValue(editTodosState)

  // Edit registration
  const { editRegistrationTodo } = useTodos()

  return (
    <input
      type='text'
      className={styles.input_style}
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
