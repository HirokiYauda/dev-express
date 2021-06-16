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

## Express
### Expressのミドルウェアとしてnuxtを実行させる理由
```bash
Nuxtのミドルウェアとして、Expressを動作させることもできるが、サーバー側の自動実行を動作させる文献が少なく、実装が難しい。
また動作させられたとしてもnodemonを使った記述になると予想され、利点が見つからないため実装を見送った。
「nuxt の serverMiddlewareプロパティ」で実装は可能。
ホットリロードが正式に実行可能になれば、将来的には、こちらが推奨される環境構築になるはず。
```

### Expressにおけるミドルウェアとは
- リクエスト / レスポンスを受け取った関数

### Expressの基本
- routeメソッドは、引数にコールバックを複数記述することで、順々に処理される
- 次のcallbackへ移行するには、「next()」を使用する
- レスポンスを終了させるには、明示的に終了を行う「res.end()」やそれが含まれるメソッドを使用する
- ルーティングのpathは、正規表現なども使用可能
- ルーティングのコールバックは、配列で複数指定可能

### ルーティング
```bash
# GETメソッド
app.get(path, callback, callback)
# POSTメソッド
app.post(path, callback, callback)
# 全てのHTTPメソッド
app.post(path, callback, callback)
# 全てのHTTPメソッド | allとの違いは、処理順に実行される？
app.use(path, callback, callback)
# 一つのパスに対して、HTTPメソッドをグルーピング
app.route(path).get(callback).post(callback)
```

### コールバックの引数
```bash
function (req, res, next) {
  res.send('hello world')
}
※ req リクエスト
※ res レスポンス
※ next 次のコールバックへ移行するメソッド
```

### express.Router
```bash
ルーティングのモジュール化を行うことができる。

下記のように、birdに対するリクエスト受け取ると、実行されるファイルがあるとします。 
-----------------------------------
[ app.js ]
var birds = require('./birds')
// ルーター・モジュールをアプリケーションにロード
app.use('/birds', birds)
 
[ bird.js ]
var express = require('express')
var router = express.Router()

// bird で必ず実行される関数
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// bird/ で実行される関数 | 上記、一つの関数も実行
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// bird/about で実行される関数 | 上記、二つの関数も実行
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router
-----------------------------------

「express.Router」を使うことで、ルーティングがマッチするものに対して、関数を組み合わせて設計できる
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
