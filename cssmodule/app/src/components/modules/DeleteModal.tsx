import { memo, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import styles from '../../styles/components/modules/DeleteModal.module.css'
import {
  deleteModalState,
  isEditState,
  todosState,
} from '../../contexts/TodosAtom'

// interface
interface Props {
  isDeleteModalOpen: boolean
}

// component
const DeleteModal = memo((props: Props) => {
  const { isDeleteModalOpen } = props
  const setTodos = useSetRecoilState(todosState)
  const setEditState = useSetRecoilState(isEditState)
  const setIsDeleteModalOpen = useSetRecoilState(deleteModalState)

  const renderModal = useCallback(() => {
    if (isDeleteModalOpen) {
      return (
        <div className={styles.modal_container}>
          <div className={styles.modal_children_container}>
            <h2 className={styles.modal_msg}>Are you sure?</h2>
            <div className={styles.button_container}>
              <button
                className={`${styles.button_style} ${styles.button_no_color}`}
                type='button'
                onClick={() => setIsDeleteModalOpen(false)}
              >
                No
              </button>
              <button
                className={`${styles.button_style} ${styles.button_yes_color}`}
                type='button'
                onClick={() => {
                  // initialization
                  setTodos([])
                  setEditState(false)
                  setIsDeleteModalOpen(false)
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )
    }
    return null
  }, [isDeleteModalOpen])

  return renderModal()
})

export default DeleteModal
