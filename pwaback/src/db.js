const {Client} = require('pg');

const client = new Client({
  host: '20.8.119.103',
  port: 5432,
  user: 'postgres',
  password: 'Vegetalim1',
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect();

module.exports = client