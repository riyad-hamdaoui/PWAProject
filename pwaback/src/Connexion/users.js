const {v4: uuidv4} = require('uuid');
const db = require('./../db');

module.exports = {
  async create(email, password) {
    try {
      const {rows} = await db.query("INSERT INTO usersIT (id, email, password) VALUES ('"+ uuidv4() + "', '" + email + "', '" + password +  "') RETURNING id, email;");
      const [user] = rows;
      return user;
    } catch (error) {
      if (error.constraint === "users_email_key") {
        return null;
      }
      throw error;
    }
  },
  async find(email) {
    const {rows} = await db.query("SELECT * FROM usersIT WHERE email='" + email + "'LIMIT 1;");
    return rows[0];
  },
};