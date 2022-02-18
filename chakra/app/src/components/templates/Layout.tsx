import Header from '../modules/Header'
import { ReactNode } from 'react'
import { Stack } from '@chakra-ui/react'
import Footer from '../modules/Footer'

interface Props {
  pageTitle: string
  appName: string
  children: ReactNode
}

const Layout = (props: Props) => {
  const { pageTitle, appName, children } = props
  return (
    <>
      <Header pageTitle={pageTitle} appName={appName} />
      <Stack px={'10'} py={'14'}>
        {children}
      </Stack>
      <Footer />
    </>
  )
}

export default Layout
