import { useEffect, useState } from 'react'
import { fakeTodoHeader } from '../../contexts/tests/fakeTodos'
import useInputTodo from '../../hooks/useInputTodo'
import useTodos from '../../hooks/useTodos'
import DeleteButton from '../atoms/DeleteButton'
import EditButton from '../atoms/EditButton'

const Todos = () => {
  const { inputTodo, onChangeInputTodo, initializeInput } = useInputTodo()
  const { todos, registrationTodo, deleteAllTodos } = useTodos()
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isEditFlug, setIsEditFlug] = useState<boolean>(false)

  const msg = isEditFlug ? 'Edit Todo' : 'New Todo'

  useEffect(() => {
    initializeInput()
  }, [todos])

  return (
    <>
      {/* Input description */}
      <div>
        <p
          className={`text-base pl-1 pb-1 bg-clip-text text-${
            isEditFlug ? 'green' : 'blue'
          }-500`}
        >
          {msg}
        </p>
      </div>
      {/* New todos -> input area */}
      <div className='flex w-full justify-center'>
        <input
          className='flex-1 p-5 text-2xl border-2 border-blue-200'
          type='text'
          placeholder='Have you forgotten something about todos?'
          onChange={onChangeInputTodo}
          value={inputTodo}
          onKeyPress={(e) => e.key === 'Enter' && registrationTodo(inputTodo)}
        />
        <button
          className='text-xl ml-5 px-10 rounded-md cursor-pointer bg-blue-200 hover:bg-blue-300 hover:font-bold'
          onClick={() => registrationTodo(inputTodo)}
        >
          Go
        </button>
      </div>

      {/* All reset button */}
      <div className='mt-10 text-right pr-5'>
        <button
          className={`p-3 rounded-xl ${
            todos.length === 0
              ? 'bg-gray-400'
              : 'bg-yellow-200 hover:bg-yellow-300 hover:font-bold'
          }`}
          disabled={todos.length === 0 && true}
          onClick={() => deleteAllTodos()}
        >
          All Reset
        </button>
      </div>

      {/* History todos */}
      <div className='px-5 pb-5'>
        <div className='w-full'>
          {/* table header */}
          <div>
            <div className='flex justify-between py-3'>
              {fakeTodoHeader.map((item) => (
                <div key={item} className='text-2xl'>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Table body */}
          <div className='border-y-2 border-gray-300'>
            {todos.length ? (
              todos.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex justify-between p-3 my-3 ${
                    idx % 2 !== 0 && 'bg-blue-100'
                  }`}
                >
                  <div>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='accent-green-300 scale-150 hover:accent-green-500'
                        onChange={(e) => setIsComplete(e.target.checked)}
                        value={item.id}
                      />
                      <p className='pl-3'>{item.date}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-xl'>{item.todo}</p>
                  </div>
                  <div>
                    <div className='flex justify-end items-center'>
                      <EditButton idx={idx} />
                      <DeleteButton idx={idx} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='p-5 text-center font-bold'>No todos</div>
            )}
          </div>
          {/* Table description */}
          <div className=''>
            <p className='p-2 text-center text-gray-500'>{`All good things must come to an end`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos
