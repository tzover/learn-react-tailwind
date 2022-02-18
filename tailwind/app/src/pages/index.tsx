import type { NextPage } from 'next'
import { RecoilRoot } from 'recoil'
import Todos from '../components/modules/Todos'
import Layout from '../components/templates/Layout'

const Home: NextPage = () => {
  const pageTitle = 'Tailwind CSS'
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
