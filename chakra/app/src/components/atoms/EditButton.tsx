import { EditIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const EditButton = (props: Props) => {
  const { idx } = props
  const { editTodo } = useTodos()
  return (
    <Button
      colorScheme={'messenger'}
      _hover={{
        boxShadow: '5px 5px 5px green',
      }}
      variant={'outline'}
      onClick={() => editTodo(idx)}
    >
      <EditIcon />
    </Button>
  )
}

export default EditButton
