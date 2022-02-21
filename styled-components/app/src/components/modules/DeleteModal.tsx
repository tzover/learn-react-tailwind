import { memo, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import {
  deleteModalState,
  isEditState,
  todosState,
} from '../../contexts/TodosAtom'

// interface
interface Props {
  isDeleteModalOpen: boolean
}

// styled
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  opacity: 90%;
  background: gray;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    display: flex;
    flex-direction: column;
    padding: 5rem 8rem;
    background: white;
    h2 {
      font-size: xx-large;
    }
  }
  .button-container {
    display: flex;
    justify-content: end;
    margin-top: 3rem;
  }
`
const ButtonStyle = styled.button`
  padding: 1.5rem;
  border-radius: 3rem;
  margin: 0 0.5rem;
  background: ${(props) => props.color};
  &:hover {
    background: ${(props) => props.className};
  }
`

// component
const DeleteModal = memo((props: Props) => {
  const { isDeleteModalOpen } = props
  const setTodos = useSetRecoilState(todosState)
  const setEditState = useSetRecoilState(isEditState)
  const setIsDeleteModalOpen = useSetRecoilState(deleteModalState)

  const renderModal = useCallback(() => {
    if (isDeleteModalOpen) {
      return (
        <Modal>
          <div className='modal-container'>
            <h2>Are you sure?</h2>
            <div className='button-container'>
              <ButtonStyle
                color='#e64a4a'
                className='#b12222'
                type='button'
                onClick={() => setIsDeleteModalOpen(false)}
              >
                No
              </ButtonStyle>
              <ButtonStyle
                color='#8fa9da'
                className='#4d7acf'
                type='button'
                onClick={() => {
                  // initialization
                  setTodos([])
                  setEditState(false)
                  setIsDeleteModalOpen(false)
                }}
              >
                Yes
              </ButtonStyle>
            </div>
          </div>
        </Modal>
      )
    }
    return null
  }, [isDeleteModalOpen])

  return renderModal()
})

export default DeleteModal
