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
                      onChange={(e) => setIsComplete(e.target.checked)}
                      value={item.id}
                    />
                    <Text>{item.date}</Text>
                  </HStack>
                </Td>
                <Td>
                  <Text fontSize={'xl'} as={`${isComplete ? 'del' : 'cite'}`}>
                    {item.todo}
                  </Text>
                </Td>
                <Td isNumeric>
                  <HStack justify={'end'}>
                    <EditButton idx={idx} />
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
