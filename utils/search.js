const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./commands.db');

function searchInDatabase(keyword, callback) {
    const query = `SELECT * FROM commands WHERE title LIKE '%${keyword}%'`;

    db.all(query, (err, rows) => {
        if (err) {
            console.error(err.message);
            callback([]);
        } else {
            callback(rows);
        }
    });
}

module.exports = { searchInDatabase };
