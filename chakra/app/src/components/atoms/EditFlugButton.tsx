import { EditIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { memo } from 'react'
import { pageState } from '../../contexts/TodosPageAtom'
import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const EditFlugButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { editFlug } = useTodos()

  const newId = idx + (pageIdx === 1 ? 0 : (pageIdx - 1) * 5)

  return (
    <Button
      colorScheme={'messenger'}
      _hover={{
        boxShadow: '5px 5px 5px green',
      }}
      variant={'outline'}
      onClick={() => editFlug(newId)}
    >
      <EditIcon />
    </Button>
  )
})

export default EditFlugButton
