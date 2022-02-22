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
import styles from '../../styles/components/modules/Todos.module.css'

// interface

// component
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
      <div className={styles.input_description_container}>
        <InputDescription isEdit={isEditFlug} description={inputDescription} />
      </div>

      {/* New todos -> input area */}
      <div className={styles.input_container}>
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
      <div className={styles.reset_button_container}>
        <p className={styles.history_msg}>
          You have {info.total} todos / {info.completed} Completed!
          <span className={styles.history_msg_span}>
            ({((info.completed / info.total) * 100).toFixed(1)} % )
          </span>
        </p>
        <ResetButton />
      </div>
      {/* Delete check modal */}
      <DeleteModal isDeleteModalOpen={isDeleteModalOpen} />

      {/* Todos */}
      <div className={styles.todos_container}>
        <div className={styles.todos_table}>
          {/* table header */}
          <div>
            <div className={styles.todos_header}>
              {todosHeader.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          {/* Table body */}
          <div className={styles.todos_body}>
            {todos.length ? (
              todos
                .slice(
                  sliceIdx === 0 ? 0 : sliceIdx * showNum,
                  sliceIdx * showNum + showNum,
                )
                .map((item, idx) => (
                  <div
                    key={item.id}
                    className={`${styles.todos_body_container} ${
                      idx % 2 !== 0 && styles.todos_body_container_color
                    }`}
                  >
                    {/* Date */}
                    <div className={styles.items_date}>
                      <input
                        type='checkbox'
                        onChange={(e) =>
                          completedTodo(item.id, e.target.checked)
                        }
                        defaultChecked={item.complete}
                      />
                      <p>{item.date}</p>
                    </div>
                    {/* Todo */}
                    <div>
                      <p
                        className={`${styles.items_todo} ${
                          item.complete && styles.items_todo_completed
                        }`}
                      >
                        {item.todo}
                      </p>
                    </div>
                    {/* Edit and Delete */}
                    <div className={styles.items_button_container}>
                      <EditFlugButton idx={idx} />
                      <p>/</p>
                      <DeleteButton idx={idx} />
                    </div>
                  </div>
                ))
            ) : (
              <div className={styles.items_none}>
                <p>No todos</p>
              </div>
            )}
          </div>
          {/* Pagenation */}
          <div
            className={styles.pagenation_container}
            aria-label='Page navigation'
          >
            <ul>
              <li>
                <button onClick={() => prevPage(pageIdx)}>
                  <svg viewBox='0 0 20 20'>
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
                    <button onClick={() => choicePage(item)}>{item}</button>
                  </li>
                ))}

              <li>
                <button onClick={() => nextPage(pageIdx)}>
                  <svg viewBox='0 0 20 20'>
                    <path
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                      fillRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          {/* Table description */}
          <div className={styles.table_description}>
            <p>{`All good things must come to an end`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos
