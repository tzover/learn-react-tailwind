import { Text } from '@chakra-ui/react'
import { memo } from 'react'

interface Props {
  isEdit: boolean
  description: string
}

const InputDescription = memo((props: Props) => {
  const { isEdit, description } = props
  return (
    <Text color={`${isEdit ? 'green.500' : 'blue.500'}`}>{description}</Text>
  )
})

export default InputDescription
