import Head from 'next/head'
import styled from 'styled-components'

// interface
interface Props {
  pageTitle: string
  appName: string
}

// styled
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: skyblue;
  box-shadow: 0px 10px 10px -5px #8a8888;
  div {
    padding: 1rem;
  }
  p {
    font-size: x-large;
    font-weight: bold;
    color: #388538;
  }
`

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
      <HeaderContainer>
        <div>
          <p>{appName} Single Page Application</p>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header
