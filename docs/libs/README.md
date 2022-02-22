# Setup

## Styled-components

### install styled-components

```
yarn add styled-components
yarn add -D @types/styled-components
```

## Chakra UI

### Add package

```
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5
yarn add @chakra-ui/icons
```

### chacra setup

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

## Tailwind css

### Install Tailwind

- Tailwindcss のインストール

  > version : 3.0.15

```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

- Tailwindcss の初期化

```
yarn tailwindcss init -p
```

- tailwind.config.js の編集

```
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

- globals.css の編集

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
