import Image from 'next/image'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styles from '../../styles/components/atoms/DeleteButton.module.css'
import { pageState } from '../../contexts/TodosPageAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  idx: number
}

// component
const DeleteButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { deleteTodo } = useTodos()

  const newId = idx + (pageIdx === 1 ? 0 : (pageIdx - 1) * 5)

  return (
    <button className={styles.delete_button} type='button' onClick={() => deleteTodo(newId)}>
      <Image src={'/delete.svg'} alt='Delete' width={25} height={25} />
    </button>
  )
})

export default DeleteButton
