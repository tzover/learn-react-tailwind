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
import usePageNation from '../../hooks/usePageNation'
import { pageState } from '../../contexts/TodosPageAtom'

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

  // PageNation
  const pageIdx = useRecoilValue(pageState)
  const {
    pageShowNum,
    pageSliceIdx,
    sliceIdx,
    showNum,
    pageShowArray,
    prevPage,
    nextPage,
    choicePage,
  } = usePageNation(todos)

  const inputDescription = isEditFlug ? 'Edit Todo' : 'New Todo'

  useEffect(() => {
    initializeInput()
  }, [todos, pageIdx])

  useEffect(() => {
    setInputEditTodo(editTodo[0].todo)
  }, [editTodo, pageIdx])

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
              todos
                .slice(
                  sliceIdx === 0 ? 0 : sliceIdx * showNum,
                  sliceIdx * showNum + showNum,
                )
                .map((item, idx) => (
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
                        onChange={(e) =>
                          completedTodo(item.id, e.target.checked)
                        }
                        defaultChecked={item.complete}
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
          {/* Pagenation */}
          <nav aria-label='Page navigation' className='mt-5'>
            <ul className='flex justify-center'>
              <li>
                <button
                  className='h-10 px-5 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-pink-200'
                  onClick={() => prevPage(pageIdx)}
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                    <path
                      d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                      clipRule='evenodd'
                      fillRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </li>
              {pageShowArray
                .slice(
                  pageSliceIdx === 0 ? 0 : pageSliceIdx,
                  pageSliceIdx + pageShowNum,
                )
                .map((item) => (
                  <li key={item}>
                    <button
                      className='h-10 px-3 transition-colors duration-150 focus:shadow-outline hover:bg-pink-200 md:px-5'
                      onClick={() => choicePage(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}

              <li>
                <button
                  className='h-10 px-5 transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-pink-200'
                  onClick={() => nextPage(pageIdx)}
                >
                  <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                    <path
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                      fillRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
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
