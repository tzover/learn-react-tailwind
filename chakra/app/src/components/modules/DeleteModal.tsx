/* eslint-disable react/display-name */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Text,
} from '@chakra-ui/react'
import { memo, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import {
  deleteModalState,
  isEditState,
  todosState,
} from '../../contexts/TodosAtom'

interface Props {
  isDeleteModalOpen: boolean
}

const DeleteModal = memo((props: Props) => {
  const { isDeleteModalOpen } = props
  const setDeleteModalClose = useSetRecoilState(deleteModalState)

  const setTodos = useSetRecoilState(todosState)
  const setEditState = useSetRecoilState(isEditState)
  const setIsDeleteModalOpen = useSetRecoilState(deleteModalState)

  const renderModal = useCallback(() => {
    if (isDeleteModalOpen) {
      return (
        <Modal
          isOpen={isDeleteModalOpen}
          onClose={() => setDeleteModalClose(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Modal</ModalHeader>
            <ModalCloseButton onClick={() => setDeleteModalClose(false)} />
            <ModalBody>
              <Text fontSize='xl'>Are you sure?</Text>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme='whatsapp'
                mr={3}
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Close
              </Button>
              <Button
                colorScheme={'messenger'}
                onClick={() => {
                  // initialization
                  setTodos([])
                  setEditState(false)
                  setIsDeleteModalOpen(false)
                }}
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )
    }
    return null
  }, [isDeleteModalOpen])

  return renderModal()
})

export default DeleteModal
