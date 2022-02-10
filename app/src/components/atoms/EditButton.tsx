import useTodos from '../../hooks/useTodos'

interface Props {
  idx: number
}

const EditButton = (props: Props) => {
  const { idx } = props
  const { editTodo } = useTodos()
  return (
    <button
      type='button'
      className='border-blue-200 hover:shadow-2xl hover:shadow-green-500'
      onClick={() => editTodo(idx, 'change')}
    >
      Edit
      {/* <EditIcon /> */}
    </button>
  )
}

export default EditButton
