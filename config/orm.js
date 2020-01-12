const connection = require('./connection');

const orm = {
    selectAll: (table, callback) => {
        let query = `SELECT * FROM ??`;
        connection.query(query, [table], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },
    insertOne: (table, cols, vals, callback) => {
        let query = `INSERT INTO ??(??) VALUES(?)`;
        connection.query(query, [table, cols, vals], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    },
    updateOne: (table, col, val, callback) => {
        let query = `UPDATE ?? SET ?? = ?`;
        connection.query(query, [table, col, val], (err, result) => {
            if(err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;