import { SetStateAction, useCallback, useState } from 'react'
const useInputTodo = () => {
  const [inputTodo, setInputTodo] = useState<string>('')

  const initializeInput = useCallback(() => {
    setInputTodo('')
  }, [])

  const onChangeInputTodo = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => {
      setInputTodo(e.target.value)
    },
    [],
  )

  return { inputTodo, onChangeInputTodo, initializeInput }
}

export default useInputTodo
