const {v4: uuidv4} = require('uuid');
const db = require('./../db');
const jwt = require('jsonwebtoken');

module.exports = async (request, response) => {
    const {name,token} = request.body;
    if (!name || !token)
        return response.status(404).json({msg : "il manque certaines informations"});
    const decodedToken = jwt.verify(token, "TOKEN_SECRET");
    const user = decodedToken.userId;
    await db.query('INSERT INTO msgsIT (id, name, users) VALUES (\''+ uuidv4() +'\', \'' + name + '\', \'' + user +'\') RETURNING id;');
    response.status(200).json({msg : "le message a été posté"});
}

