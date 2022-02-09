import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const DeleteButton = (props: Props) => {
  const { idx } = props
  const { deleteTodo } = useTodos()

  return (
    <button
      type='button'
      className='border-blue-200 hover:shadow-2xl hover:shadow-red-500'
      onClick={() => deleteTodo(idx)}
    >
      Delete
      {/* <DeleteIcon /> */}
    </button>
  )
}

export default DeleteButton
