import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

// interface
interface Props {
  pageTitle: string
  appName: string
  children: ReactNode
}

// styled
const Container = styled.div`
  padding: 4rem 5rem;
`

// component
const Layout = (props: Props) => {
  const { pageTitle, appName, children } = props
  return (
    <>
      <Header pageTitle={pageTitle} appName={appName} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
