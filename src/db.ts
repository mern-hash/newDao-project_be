// const { Client } = require('pg');
// // import {Client} from 'pg'

// const db = new Client({
//   user: 'postgres',
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: 'a',
//   port: process.env.DB_PORT,
// });
// db.connect(function (err) {
//   if (err){console.log( err);}
//  const a = db
//    .query('select * from User;')
//    .then((res) => console.log(res.rows))
//    .catch((err) => console.log(err));
//  console.log("a", a)
//   console.log('Connected! in postgres');
// });

// console.log("client", Client)
// module.exports = db;