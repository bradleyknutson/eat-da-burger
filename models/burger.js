const orm = require('../config/orm');

const burger = {
    selectAll: (callback) => {
        orm.selectAll('burgers', (res) =>{
            callback(res);
        });
    },
    insertOne: (cols, vals, callback) => {
        orm.insertOne('burgers', cols, vals, (res) => {
            callback(res);
        });
    },
    updateOne: (col, val, callback) => {
        orm.updateOne('burgers', col, val, (res) => {
            callback(res);
        });
    }
}

module.exports = burger;