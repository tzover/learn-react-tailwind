import Image from 'next/image'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styles from '../../styles/components/atoms/EditFlugButton.module.css'
import { pageState } from '../../contexts/TodosPageAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  idx: number
}

// component
const EditFlugButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { editFlug } = useTodos()

  const newId = idx + (pageIdx === 1 ? 0 : (pageIdx - 1) * 5)

  return (
    <button className={styles.button_style} type='button' onClick={() => editFlug(newId)}>
      <Image src={'/edit.svg'} alt='Edit' width={25} height={25} />
    </button>
  )
})

export default EditFlugButton
