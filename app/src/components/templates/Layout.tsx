import Header from '../modules/Header'
import { ReactNode } from 'react'
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
      <div className='px-10 py-14'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
