# Next JS \* Tailwind CSS

> TypeScript / Atomic Design

<img src="./images/logo-dark.svg" alt="Tailwind CSS" width="350" height="70">

[Tailwindcss 公式 URL](https://tailwindcss.com/)

## Usage

- Make Container

```
docker-compose up -d
```

- View browser

  - [Tailwindcss: localhost:3000](http://localhost:3000)
  - [styled-components: localhost:3001](http://localhost:3001)
  - [Chakra UI:localhost: localhost:3002](http://localhost:3002)
  - [CSS-modules:localhost: localhost:3003](http://localhost:3003)

- In the container

```
docker-compose exec <tailwind | styled | chakra | module> bash
```

- Launch the development server

```
yarn dev
```

- Launch the production server

```
yarn build
yarn start
```

## Tailwind を選択する理由

- Styling の記述が楽
- コードの可読性が上がる
- 公式 HP が活用しやすい(当てたい Style を CSS 名で検索できる)

## Tailwind を選択するデメリット

- 高度なスタイリングには向かない
- css と記述方法が異なるため、tailwind 専用の記述方法を習得しなければならない
- MUI や Chakra なような用意されているコンポーネントが存在しない（自分で作っていく必要がある）

## Install Tailwind

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
