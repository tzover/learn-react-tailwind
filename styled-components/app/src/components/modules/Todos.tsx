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
import styled from 'styled-components'

// interface

// styled
const InputDescriptionContainer = styled.div`
  padding-left: 1rem;
  padding-bottom: 1rem;
`
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ResetButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  p {
    font-size: xx-large;
  }
  span {
    margin-left: 2rem;
    font-size: x-large;
    text-decoration: underline;
  }
`
const TodosContainer = styled.div`
  padding: 0 2rem 2rem 2rem;
  .todos-table {
    width: 100%;
  }
  .todos-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    p {
      font-size: xx-large;
    }
  }
  .todos-body {
    border-top: 0.2rem solid #eee;
    border-bottom: 0.2rem solid #eee;

    .body-items-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      margin: 1rem 0;
      .items-date {
        display: flex;
        align-items: center;
        input {
          transform: scale(1.5);
          accent-color: #a1eaa1;
          &:hover {
            accent-color: #2cf52c;
          }
        }
        p {
          padding-left: 1rem;
        }
      }
      .items-todo {
        p {
          font-size: x-large;
        }
      }
      .items-edit-and-delete {
        display: flex;
        justify-content: end;
        align-items: center;
        p {
          font-size: x-large;
          margin: 0 1rem;
        }
      }
    }
    .items-none {
      padding: 1rem;
      p {
        text-align: center;
        font-weight: bold;
      }
    }
  }
`
const PagenationContainer = styled.nav`
  margin-top: 1rem;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  button {
    height: 2.5rem;
    padding: 0 1rem;
    transition-property: color;
    transition-duration: 150ms;
    &:hover {
      background: #f5c8cf;
    }
    &:focus {
      outline: 0.2rem solid #f5c8cf;
    }
    svg {
      width: 1vw;
      height: 2vh;
    }
  }
`
const TableDescription = styled.div`
  padding: 1rem;
  p {
    text-align: center;
    color: #8b8b8b;
  }
`

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
      <InputDescriptionContainer>
        <InputDescription isEdit={isEditFlug} description={inputDescription} />
      </InputDescriptionContainer>

      {/* New todos -> input area */}
      <InputContainer>
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
      </InputContainer>

      {/* All reset button */}
      <ResetButtonContainer>
        <p>
          You have {info.total} todos / {info.completed} Completed!
          <span>({((info.completed / info.total) * 100).toFixed(1)} % )</span>
        </p>
        <ResetButton />
      </ResetButtonContainer>
      {/* Delete check modal */}
      <DeleteModal isDeleteModalOpen={isDeleteModalOpen} />

      {/* Todos */}
      <TodosContainer>
        <div className='todos-table'>
          {/* table header */}
          <div>
            <div className='todos-header'>
              {todosHeader.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          {/* Table body */}
          <div className='todos-body'>
            {todos.length ? (
              todos
                .slice(
                  sliceIdx === 0 ? 0 : sliceIdx * showNum,
                  sliceIdx * showNum + showNum,
                )
                .map((item, idx) => (
                  <div
                    key={item.id}
                    className={`body-items-container ${
                      idx % 2 !== 0 && 'bg-blue-100' //wwwwwwwwwwwwwwww
                    }`}
                  >
                    {/* Date */}
                    <div className='items-date'>
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
                    <div className='items-todo'>
                      <p
                        className={` ${
                          item.complete && 'line-through text-green-500' //wwwwwwwwwwwwwwww
                        }`}
                      >
                        {item.todo}
                      </p>
                    </div>
                    {/* Edit and Delete */}
                    <div className='items-edit-and-delete'>
                      <EditFlugButton idx={idx} />
                      <p>/</p>
                      <DeleteButton idx={idx} />
                    </div>
                  </div>
                ))
            ) : (
              <div className='items-none'>
                <p>No todos</p>
              </div>
            )}
          </div>
          {/* Pagenation */}
          <PagenationContainer aria-label='Page navigation'>
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
          </PagenationContainer>
          {/* Table description */}
          <TableDescription>
            <p>{`All good things must come to an end`}</p>
          </TableDescription>
        </div>
      </TodosContainer>
    </>
  )
}

export default Todos
