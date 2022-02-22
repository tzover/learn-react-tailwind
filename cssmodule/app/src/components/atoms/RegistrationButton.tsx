import { memo } from 'react'
import styles from '../../styles/components/atoms/RegistrationButton.module.css'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
}

// component
const RegistrationButton = memo((props: Props) => {
  const { inputTodo } = props
  const { registrationTodo } = useTodos()
  return (
    <button type='button' className={styles.button_style} onClick={() => registrationTodo(inputTodo)}>
      Go
    </button>
  )
})

export default RegistrationButton
