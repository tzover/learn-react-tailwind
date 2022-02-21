import type { NextPage } from 'next'
import { RecoilRoot } from 'recoil'
import Todos from '../components/modules/Todos'
import Layout from '../components/templates/Layout'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const pageTitle = 'Styled-Components CSS'
  const appName = 'Todos'
  return (
    <Layout pageTitle={pageTitle} appName={appName}>
      <RecoilRoot>
        <Todos />
      </RecoilRoot>
    </Layout>
  )
}

export default Home
