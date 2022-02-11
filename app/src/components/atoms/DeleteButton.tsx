import Image from 'next/image'
import { memo } from 'react'
import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const DeleteButton = memo((props: Props) => {
  const { idx } = props
  const { deleteTodo } = useTodos()

  return (
    <button
      type='button'
      className='p-2 rounded-3xl hover:bg-red-500 hover:scale-125'
      onClick={() => deleteTodo(idx)}
    >
      <Image src={'/delete.svg'} alt='Delete' width={25} height={25} />
    </button>
  )
})

export default DeleteButton
