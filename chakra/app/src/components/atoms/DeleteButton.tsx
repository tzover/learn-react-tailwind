import { memo } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import useTodos from '../../hooks/useTodos'
import { pageState } from '../../contexts/TodosPageAtom'


interface Props {
  idx: number
}

const DeleteButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { deleteTodo } = useTodos()

  const newId = idx + (pageIdx === 1 ? 0 : (pageIdx - 1) * 5)

  return (
    <Button
      colorScheme={'messenger'}
      _hover={{
        boxShadow: '5px 5px 5px red',
      }}
      variant={'outline'}
      onClick={() => deleteTodo(newId)}
    >
      <DeleteIcon />
    </Button>
  )
})

export default DeleteButton
