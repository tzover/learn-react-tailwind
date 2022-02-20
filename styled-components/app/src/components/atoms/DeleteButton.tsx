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
const DeleteButtonStyle = styled.button`
  padding: 0.3rem;
  border-radius: 1.5rem;
  &:hover {
    background: #e64a4a;
    transform: scale(1.25);
  }
`

// component
const DeleteButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { deleteTodo } = useTodos()

  const newId = idx + (pageIdx === 1 ? 0 : (pageIdx - 1) * 5)

  return (
    <DeleteButtonStyle type='button' onClick={() => deleteTodo(newId)}>
      <Image src={'/delete.svg'} alt='Delete' width={25} height={25} />
    </DeleteButtonStyle>
  )
})

export default DeleteButton
