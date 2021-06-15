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

## Sequelize ORM
### Sequelize CLI
```bash
# sequelizeプロジェクト初期化
# config, models, migrations, seeders ディレクトリ と 最低限必要なファイルの生成
# ./config/config.json に、DB接続情報
npx sequelize init


# Model, Migration生成
# nameは単数。実際のテーブルは複数名で生成
npx sequelize model:generate --name User --attributes name:string,age:integer

# migration実行
npx sequelize db:migrate

# migrateを一つ前に戻す
npx sequelize db:migrate:undo

# migrateを全て元に戻す
npx sequelize db:migrate:undo:all

# seeder生成
npx sequelize seed:generate --name UserSeeder

# 全てのseeder実行
npx sequelize db:seed:all

# DBから全テーブルのデータ削除
# オートインクリメントはリセットされない。
# リセットさせるなら、マイグレーションリセットして、シーダー実行 or 直接DB操作
npx sequelize db:seed:undo:all
```
### 補足
- pacake.jsonで管理したいので、ローカルインストール
- 環境パスを通していないので、CLIは、npx経由で実行
- DB情報のDB_HOSTは、dockerのコンテナ名を指定

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
