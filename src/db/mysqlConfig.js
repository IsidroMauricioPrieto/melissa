var mysql = require('mysql')
const connection = mysql.createConnection({
  server: '127.0.0.1',
  user: 'soporte',
  password: 'soporte',
  database: 'db_isupport'
})

module.exports = connection
