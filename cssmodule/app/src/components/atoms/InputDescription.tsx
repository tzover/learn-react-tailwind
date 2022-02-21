import { memo } from 'react'
import styled from 'styled-components'

// interface
interface Props {
  isEdit: boolean
  description: string
}

// styled
const Description = styled.p<{ color: string }>`
  font-size: large;
  color: ${({ color }) => color};
`

// component
const InputDescription = memo((props: Props) => {
  const { isEdit, description } = props
  return (
    <Description color={`${isEdit ? '#4ae657' : '#8fa9da'}`}>
      {description}
    </Description>
  )
})

export default InputDescription
