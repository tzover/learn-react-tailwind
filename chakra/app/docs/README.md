# Add package

```
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5
yarn add @chakra-ui/icons
```

# chacra setup

- pages/\_app.tsx

```
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
```
