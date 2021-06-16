const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const db = require('../models');
const routesApi = require('../routes/api.js');

async function start() {
  // Api ルーティング
  app.use('/api', routesApi);

  // mysql接続ドライバで、クエリを取得するとき
  // const mysql = require('mysql2');
  // const connection = mysql.createConnection({
  //   host: config.host,
  //   user: config.username,
  //   password: config.password,
  //   database: config.database
  // });
  // connection.query('select * from users;', function(err, users) {
  //   console.log(users);
  // });

  // sequelize ORM で、Usersテーブル取得
  // db.User.findAll().then(users => {
  //   console.log(users[0].name);
  // });
  
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt.js
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()