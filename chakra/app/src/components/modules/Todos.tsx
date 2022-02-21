import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Input,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { fakeTodoHeader } from '../../contexts/tests/fakeTodos'
import {
  deleteModalState,
  editTodosState,
  infoValue,
  isEditState,
  todosState,
} from '../../contexts/TodosAtom'
import { pageState } from '../../contexts/TodosPageAtom'
import useInputTodo from '../../hooks/useInputTodo'
import useTodos from '../../hooks/useTodos'
import DeleteButton from '../atoms/DeleteButton'
import EditFlugButton from '../atoms/EditFlugButton'
import InputDescription from '../atoms/InputDescription'
import DeleteModal from './DeleteModal'

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
  const {
    registrationTodo,
    editRegistrationTodo,
    deleteAllTodos,
    completedTodo,
  } = useTodos()

  // Modal

  // information
  const info = useRecoilValue(infoValue)

  // PageNation
  const pageIdx = useRecoilValue(pageState)

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
      <Box pb={'2'} pl={'2'}>
        <InputDescription isEdit={isEditFlug} description={inputDescription} />
      </Box>
      {/* New todos */}
      {isEditFlug ? (
        <Flex>
          <Input
            placeholder='Have you forgotten something about todos?'
            size='lg'
            onChange={(e) => setInputEditTodo(e.target.value)}
            value={inputEditTodo}
            onKeyPress={(e) =>
              e.key === 'Enter' && editRegistrationTodo(editTodo, inputEditTodo)
            }
          />
          <Button
            ml={'3'}
            colorScheme='green'
            size='lg'
            onClick={() => editRegistrationTodo(editTodo, inputEditTodo)}
          >
            Go
          </Button>
        </Flex>
      ) : (
        <Flex>
          <Input
            placeholder='Have you forgotten something about todos?'
            size='lg'
            onChange={onChangeInputTodo}
            value={inputTodo}
            onKeyPress={(e) => e.key === 'Enter' && registrationTodo(inputTodo)}
          />
          <Button
            ml={'3'}
            colorScheme='messenger'
            size='lg'
            onClick={() => registrationTodo(inputTodo)}
          >
            Go
          </Button>
        </Flex>
      )}

      {/* All reset button */}
      <Box mt={'5'}>
        <Flex justify={'space-between'} mt={'5'} px={'5'} alignItems={'center'}>
          <Text fontSize={'2xl'}>
            You have {info.total} todos / {info.completed} Completed!
            <span className='ml-5 text-xl underline'>
              ({((info.completed / info.total) * 100).toFixed(1)} % )
            </span>
          </Text>
          <Button
            p={'3'}
            rounded={'xl'}
            bg={`${todos.length === 0 ? 'gray.400' : 'yellow.200'}`}
            _hover={
              todos.length === 0
                ? { fontWeight: '', background: 'gray.400' }
                : { fontWeight: 'bold', background: 'yellow.400' }
            }
            disabled={todos.length === 0 && true}
            onClick={() => deleteAllTodos()}
          >
            All Reset
          </Button>
        </Flex>
      </Box>
      {/* Delete check modal */}
      <DeleteModal isDeleteModalOpen={isDeleteModalOpen} />

      {/* History todos */}
      <Box p={'5'}>
        <Table variant='striped' colorScheme='messenger'>
          {/* Table description */}
          <TableCaption
            borderTop={'1px'}
            borderColor={'gray.200'}
            color={'gray.500'}
          >{`All good things must come to an end`}</TableCaption>

          {/* Table header */}
          <Thead>
            <Tr>
              {fakeTodoHeader.map((item, idx) =>
                idx === 2 ? (
                  <Th key={item} isNumeric>
                    {item}
                  </Th>
                ) : (
                  <Th key={item}>{item}</Th>
                ),
              )}
            </Tr>
          </Thead>

          {/* Table body */}
          <Tbody>
            {todos.map((item, idx) => (
              <Tr key={item.id}>
                <Td>
                  <HStack>
                    <Checkbox
                      size={'lg'}
                      colorScheme='messenger'
                      _hover={{
                        borderColor: 'skyblue',
                      }}
                      onChange={(e) => completedTodo(item.id, e.target.checked)}
                      value={item.id}
                    />
                    <Text>{item.date}</Text>
                  </HStack>
                </Td>
                <Td>
                  <Text
                    fontSize={'xl'}
                    as={`${item.complete ? 'del' : 'cite'}`}
                  >
                    {item.todo}
                  </Text>
                </Td>
                <Td isNumeric>
                  <HStack justify={'end'}>
                    <EditFlugButton idx={idx} />
                    <DeleteButton idx={idx} />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  )
}

export default Todos
