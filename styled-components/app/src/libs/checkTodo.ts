export function checkTodo(todo: string) {
  if (!todo) {
    alert('Please input task')
    return false
  }
  return true
}
