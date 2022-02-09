import { useEffect, useState } from 'react'
import { fakeTodoHeader } from '../../contexts/tests/fakeTodos'
import useInputTodo from '../../hooks/useInputTodo'
import useTodos from '../../hooks/useTodos'
import DeleteButton from '../atoms/DeleteButton'
import EditButton from '../atoms/EditButton'

const Todos = () => {
  const { inputTodo, onChangeInputTodo, initializeInput } = useInputTodo()
  const { todos, registrationTodo } = useTodos()
  const [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    initializeInput()
  }, [todos])

  return (
    <>
      {/* New todos */}
      <div className='flex w-full justify-center'>
        <input
          className='flex-1 p-2 border-2 border-blue-200'
          type='text'
          placeholder='Have you forgotten something about todos?'
          onChange={onChangeInputTodo}
          value={inputTodo}
          onKeyPress={(e) => e.key === 'Enter' && registrationTodo(inputTodo)}
        />
        <button
          className='ml-5 p-3 rounded-md bg-blue-200'
          onClick={() => registrationTodo(inputTodo)}
        >
          Go
        </button>
      </div>

      {/* History todos */}
      <div className='p-5'>
        <table className='w-full'>
          {/* table description */}
          {/* <TableCaption
            borderTop={'1px'}
            borderColor={'gray.200'}
            color={'gray.500'}
          >{`All good things must come to an end`}</TableCaption> */}

          {/* table header */}
          <thead>
            <tr className='flex justify-between'>
              {fakeTodoHeader.map((item) => (
                <th key={item}>{item}</th>
              ))}
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {todos.map((item, idx) => (
              <tr key={item.id} className='flex justify-between'>
                <td>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      className='bg-blue-200 hover:border-cyan-400'
                      onChange={(e) => setIsComplete(e.target.checked)}
                      value={item.id}
                    />
                    <p className='pl-3'>{item.date}</p>
                  </div>
                </td>
                <td>
                  <p className='text-xl'>{item.todo}</p>
                </td>
                <td>
                  <div className='flex justify-end items-center'>
                    <EditButton idx={idx} />
                    <DeleteButton idx={idx} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Todos
