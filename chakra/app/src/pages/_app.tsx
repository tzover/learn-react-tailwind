import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Styling Practices</title>
        <meta
          name='description'
          content='A Single Page Application Produced by yt'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
