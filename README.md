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

## Expressのミドルウェアとしてnuxtを実行させる理由
```bash
Nuxtのミドルウェアとして、Expressを動作させることもできるが、サーバー側の自動実行を動作させる文献が少なく、実装が難しい。
また動作させられたとしてもnodemonを使った記述になると予想され、利点が見つからないため実装を見送った。
「nuxt の serverMiddlewareプロパティ」で実装は可能。
ホットリロードが正式に実行可能になれば、将来的には、こちらが推奨される環境構築になるはず。
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
