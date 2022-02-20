import Image from 'next/image'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { pageState } from '../../contexts/TodosPageAtom'
import useTodos from '../../hooks/useTodos'

// interface
interface Props {
  idx: number
}

// styled
const EditButtonStyle = styled.button`
  padding: 0.3rem;
  border-radius: 1.5rem;
  &:hover {
    background: #4ae657;
    transform: scale(1.25);
  }
`

// component
const EditFlugButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { editFlug } = useTodos()

  const newId = idx + (pageIdx === 1 ? 0 : (pageIdx - 1) * 5)

  return (
    <EditButtonStyle type='button' onClick={() => editFlug(newId)}>
      <Image src={'/edit.svg'} alt='Edit' width={25} height={25} />
    </EditButtonStyle>
  )
})

export default EditFlugButton
