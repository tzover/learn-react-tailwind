import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { todosHeader } from '../../contexts/AppBasicContext'
import {
  deleteModalState,
  editTodosState,
  infoValue,
  isEditState,
  todosState,
} from '../../contexts/TodosAtom'
import useInputTodo from '../../hooks/useInputTodo'
import DeleteButton from '../atoms/DeleteButton'
import DeleteModal from './DeleteModal'
import EditFlugButton from '../atoms/EditFlugButton'
import InputDescription from '../atoms/InputDescription'
import ResetButton from '../atoms/ResetButton'
import InputTodo from '../atoms/InputTodo'
import RegistrationButton from '../atoms/RegistrationButton'
import InputEditTodo from '../atoms/InputEditTodo'
import EditRegistrationButton from '../atoms/EditRegistrationButton'
import useTodos from '../../hooks/useTodos'

const Todos = () => {
  const todos = useRecoilValue(todosState)
  const { inputTodo, onChangeInputTodo, initializeInput } = useInputTodo()

  // Edit
  const isEditFlug = useRecoilValue(isEditState)
  const editTodo = useRecoilValue(editTodosState)
  const [inputEditTodo, setInputEditTodo] = useState(editTodo[0].todo)

  // Delete
  const isDeleteModalOpen = useRecoilValue(deleteModalState)

  // Complete
  const { completedTodo } = useTodos()

  // information
  const info = useRecoilValue(infoValue)

  const inputDescription = isEditFlug ? 'Edit Todo' : 'New Todo'

  useEffect(() => {
    initializeInput()
  }, [todos])

  useEffect(() => {
    setInputEditTodo(editTodo[0].todo)
  }, [editTodo])

  return (
    <>
      {/* Input description */}
      <div className='pl-2 pb-2'>
        <InputDescription isEdit={isEditFlug} description={inputDescription} />
      </div>

      {/* New todos -> input area */}
      <div className='flex w-full justify-center'>
        {isEditFlug ? (
          <>
            <InputEditTodo
              inputEditTodo={inputEditTodo}
              setInputEditTodo={setInputEditTodo}
            />
            <EditRegistrationButton inputTodo={inputEditTodo} />
          </>
        ) : (
          <>
            <InputTodo
              inputTodo={inputTodo}
              onChangeInputTodo={onChangeInputTodo}
            />
            <RegistrationButton inputTodo={inputTodo} />
          </>
        )}
      </div>

      {/* All reset button */}
      <div className='flex justify-between items-center mt-5 px-5'>
        <p className='text-3xl'>
          You have {info.total} todos / {info.completed} Completed!
          <span className='ml-5 text-xl underline'>
            ({((info.completed / info.total) * 100).toFixed(1)} % )
          </span>
        </p>
        <ResetButton />
      </div>
      {/* Delete check modal */}
      <DeleteModal isDeleteModalOpen={isDeleteModalOpen} />

      {/* Todos */}
      <div className='px-5 pb-5'>
        <div className='w-full'>
          {/* table header */}
          <div>
            <div className='flex justify-between py-3'>
              {todosHeader.map((item) => (
                <p key={item} className='text-2xl'>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Table body */}
          <div className='border-y-2 border-gray-300'>
            {todos.length ? (
              todos.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex justify-between items-center px-3 my-3 ${
                    idx % 2 !== 0 && 'bg-blue-100'
                  }`}
                >
                  {/* Date */}
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      className='accent-green-300 scale-150 hover:accent-green-500'
                      onChange={(e) => completedTodo(item.id, e.target.checked)}
                      value={item.id}
                    />
                    <p className='pl-3'>{item.date}</p>
                  </div>
                  {/* Todo */}
                  <div>
                    <p
                      className={`text-xl ${
                        item.complete && 'line-through text-green-500'
                      }`}
                    >
                      {item.todo}
                    </p>
                  </div>
                  {/* Edit and Delete */}
                  <div className='flex justify-end items-center'>
                    <EditFlugButton idx={idx} />
                    <p className='text-xl mx-5'>/</p>
                    <DeleteButton idx={idx} />
                  </div>
                </div>
              ))
            ) : (
              <div className='p-5 text-center font-bold'>No todos</div>
            )}
          </div>
          {/* Table description */}
          <div className='p-2'>
            <p className='text-center text-gray-500'>{`All good things must come to an end`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos
