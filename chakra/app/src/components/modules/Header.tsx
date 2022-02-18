import Head from 'next/head'
import { Box, Text, Flex, Spacer } from '@chakra-ui/react'
import OutMenus from '../../libs/ChakraDrawer'

interface Props {
  pageTitle: string
  appName: string
}
const Header = (props: Props) => {
  const { pageTitle, appName } = props
  return (
    <>
      {/* App Header */}
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* Header */}
      <Flex
        bgGradient='linear(to-r, blue.500, blue.200)'
        data-testid='header-box'
        boxShadow={'dark-lg'}
        alignItems={'center'}
      >
        <Box p={'3'}>
          <Text
            bgGradient='linear(to-r, gray.100, green.300)'
            bgClip='text'
            fontSize='2xl'
            fontWeight='extrabold'
          >
            {appName} Single Page Application
          </Text>
        </Box>
        <Spacer />
        <OutMenus />
      </Flex>
    </>
  )
}

export default Header
