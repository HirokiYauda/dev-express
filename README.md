# dev-express

## 開発の実行コマンド
```bash
# フロントエンド(nuxt)の実行
# ホットリロードが早い
yarn dev
# バックエンド(Express)とフロントエンド(nuxt)の実行
# サーバー側を監視して、変更があれば自動実行する。nuxtを立ち上げなおすため、自動実行が遅い
# バックエンド(Express)を立ち上げ、ミドルウェアとしてNuxtを起動
yarn dev-serve
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
