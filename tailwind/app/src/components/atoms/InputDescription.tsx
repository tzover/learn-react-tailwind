import { memo } from 'react'

interface Props {
  isEdit: boolean
  description: string
}

const InputDescription = memo((props: Props) => {
  const { isEdit, description } = props
  return (
    <p
      className={`text-base bg-clip-text ${
        isEdit ? 'text-green-500' : 'text-blue-500'
      }`}
    >
      {description}
    </p>
  )
})

export default InputDescription
