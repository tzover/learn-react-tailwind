import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styles from '../../styles/components/atoms/EditRegistrationButton.module.css'
import { editTodosState } from '../../contexts/TodosAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
}

// component
const EditRegistrationButton = memo((props: Props) => {
  const { inputTodo } = props
  // Edit all todos
  const editTodo = useRecoilValue(editTodosState)

  const { editRegistrationTodo } = useTodos()
  return (
    <button
      type='button'
      className={styles.button_style}
      onClick={() => editRegistrationTodo(editTodo, inputTodo)}
    >
      Go
    </button>
  )
})

export default EditRegistrationButton
