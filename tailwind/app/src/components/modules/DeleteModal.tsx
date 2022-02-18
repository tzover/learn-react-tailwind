/* eslint-disable react/display-name */
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
  const setTodos = useSetRecoilState(todosState)
  const setEditState = useSetRecoilState(isEditState)
  const setIsDeleteModalOpen = useSetRecoilState(deleteModalState)

  const renderModal = useCallback(() => {
    if (isDeleteModalOpen) {
      return (
        <div className='fixed top-0 left-0 w-full h-full z-50 bg-gradient-to-t from-gray-500 to-gray-50 opacity-90 flex justify-center items-center'>
          <div className='flex-col px-20 py-14 bg-white'>
            <h2 className='text-3xl'>Are you sure?</h2>
            <div className='flex justify-end mt-8'>
              <div className='rounded-full bg-red-300 hover:bg-red-200 mr-5'>
                <button
                  type='button'
                  className='p-5'
                  onClick={() => setIsDeleteModalOpen(false)}
                >
                  No
                </button>
              </div>
              <div className='rounded-full bg-blue-300 hover:bg-blue-200'>
                <button
                  type='button'
                  className='p-5'
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
        </div>
      )
    }
    return null
  }, [isDeleteModalOpen])

  return renderModal()
})

export default DeleteModal
