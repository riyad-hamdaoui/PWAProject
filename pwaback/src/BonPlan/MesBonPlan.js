const db = require('../db');
const jwt = require('jsonwebtoken');

module.exports = async(request, response) => {
    const {token} = request.body;
    const decodedToken = jwt.verify(token, "TOKEN_SECRET");
    const user = decodedToken.userId;
    let res =  await db.query('SELECT * FROM usersIT WHERE id=\'' + user + '\'LIMIT 1;');
    const {rows} = await db.query("SELECT * FROM msgsIT WHERE users=\'" + user + "\';");
    if (rows.length > 0)
        response.send({bonplan: rows});
    else
        response.send({message : "il n'y as pas de messages pour ce compte"});
};
