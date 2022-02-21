import Head from 'next/head'
import styles from '../../styles/components/modules/Header.module.css'

// interface
interface Props {
  pageTitle: string
  appName: string
}

// component
const Header = (props: Props) => {
  const { pageTitle, appName } = props
  return (
    <>
      {/* App Header */}
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <p>{appName} Single Page Application</p>
        </div>
      </header>
    </>
  )
}

export default Header
