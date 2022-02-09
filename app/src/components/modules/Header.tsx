import Head from 'next/head'

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
      <div className='flex items-center bg-blue-200 shadow-2xl'>
        <div className='p-3'>
          <p className='text-2xl font-extrabold bg-clip-text text-green-700'>
            {appName} Single Page Application
          </p>
        </div>
      </div>
    </>
  )
}

export default Header
