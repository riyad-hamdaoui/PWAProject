const db = require('../db');

module.exports = async(request, response) => {
    const {rows} = await db.query("SELECT * FROM msgsIT;");
    if (rows.length > 0)
        response.send({bonplan: rows});
    else
        response.send({message : "il n'y as pas de messages"});
};
