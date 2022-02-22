import { memo } from 'react'
import styles from '../../styles/components/atoms/InputDescription.module.css'

// interface
interface Props {
  isEdit: boolean
  description: string
}

// component
const InputDescription = memo((props: Props) => {
  const { isEdit, description } = props
  return (
    <p className={`${styles.input_msg} ${isEdit && styles.input_msg_color_edit}`}>
      {description}
    </p>
  )
})

export default InputDescription
