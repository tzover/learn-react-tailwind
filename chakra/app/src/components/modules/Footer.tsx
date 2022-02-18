import { Stack, Text } from '@chakra-ui/react'

const Footer = () => {
  const color = 'gray.500'
  return (
    <Stack
      borderTop={'1px'}
      borderColor={`${color}`}
      position={'fixed'}
      bottom={'0'}
      w={'100%'}
      p={'1'}
    >
      <Text w={'95%'} textAlign={'right'} color={`${color}`} opacity={''}>
        Produced by &copy; tzover 2022
      </Text>
    </Stack>
  )
}

export default Footer
