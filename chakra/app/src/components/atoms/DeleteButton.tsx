import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const DeleteButton = (props: Props) => {
  const { idx } = props
  const { deleteTodo } = useTodos()

  return (
    <Button
      colorScheme={'messenger'}
      _hover={{
        boxShadow: '5px 5px 5px red',
      }}
      variant={'outline'}
      onClick={() => deleteTodo(idx)}
    >
      <DeleteIcon />
    </Button>
  )
}

export default DeleteButton
