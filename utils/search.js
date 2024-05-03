const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./commands.db');

function searchInDatabase(keyword, callback) {
    try {
        const query = `SELECT * FROM commands WHERE title LIKE '%${keyword}%'`;

        db.all(query, (err, rows) => {
            if (err) {
                console.error(err.message);
                callback([]);
            } else {
                callback(rows);
            }
        });
    } catch (error) {
        console.error(`Error in searchInDatabase function: ${error.message}`);
        fs.writeFile('error.log', `Error in searchInDatabase function: ${error.message}\n`, { flag: 'a' }, (err) => {
            if (err) {
                console.error(`Error writing to error.log: ${err.message}`);
            }
        });
        callback([]);
    }
}

module.exports = { searchInDatabase };
