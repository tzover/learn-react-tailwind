import Image from 'next/image'
import { memo } from 'react'
import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const EditFlugButton = memo((props: Props) => {
  const { idx } = props
  const { editFlug } = useTodos()
  return (
    <button
      type='button'
      className='p-2 rounded-3xl hover:bg-green-500 hover:scale-125'
      onClick={() => editFlug(idx)}
    >
      <Image src={'/edit.svg'} alt='Edit' width={25} height={25} />
    </button>
  )
})

export default EditFlugButton
