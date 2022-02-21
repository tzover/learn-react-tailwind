import { ReactNode } from 'react'
import styles from '../../styles/components/templates/Layout.module.css'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

// interface
interface Props {
  pageTitle: string
  appName: string
  children: ReactNode
}

// component
const Layout = (props: Props) => {
  const { pageTitle, appName, children } = props
  return (
    <>
      <Header pageTitle={pageTitle} appName={appName} />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
