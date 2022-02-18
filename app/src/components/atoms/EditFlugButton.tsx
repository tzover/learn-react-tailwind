import Image from 'next/image'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
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
    <button
      type='button'
      className='p-2 rounded-3xl hover:bg-green-500 hover:scale-125'
      onClick={() => editFlug(newId)}
    >
      <Image src={'/edit.svg'} alt='Edit' width={25} height={25} />
    </button>
  )
})

export default EditFlugButton
