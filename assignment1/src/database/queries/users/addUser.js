const connection = require('../../config/connection');

const addUser = ({ email, username, hashedPassword }) =>
  connection
    .query(
      'insert into users(email, username, password) values ($1, $2, $3) returning *',
      [email, username, hashedPassword]
    )
    .then((allUsers) => allUsers.rows[0])
    .then((userData) => userData);
module.exports = addUser;
