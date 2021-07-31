const connection = require("../DB/db");

const getAllUsers = (req, res)=>{
    connection.query('SELECT * FROM evenements', (err, results, fields)=>{
        if (err) {
            res.sendStatus(500)
        }
        res.json(results);
    })
}

module.exports = {
    getAllUsers
}