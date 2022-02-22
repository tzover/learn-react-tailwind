import { memo, SetStateAction } from 'react'
import styles from '../../styles/components/atoms/InputTodo.module.css'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
  onChangeInputTodo: (e: { target: { value: SetStateAction<string> } }) => void
}

// component
const InputTodo = memo((props: Props) => {
  const { inputTodo, onChangeInputTodo } = props
  const { registrationTodo } = useTodos()
  return (
    <input
      type='text'
      className={styles.input_style}
      placeholder='Have you forgotten something about todos?'
      onChange={onChangeInputTodo}
      value={inputTodo}
      onKeyPress={(e) => e.key === 'Enter' && registrationTodo(inputTodo)}
    />
  )
})

export default InputTodo
