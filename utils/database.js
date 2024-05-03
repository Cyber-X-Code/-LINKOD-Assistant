// Вывод с картинками
// const sqlite3 = require('sqlite3').verbose();

// // Создание и подключение к базе данных
// const db = new sqlite3.Database('commands.db');

// // Создание таблицы для хранения команд
// db.serialize(() => {
//     db.run("CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, title TEXT, description TEXT)");
// });

// module.exports = db;


// Без картинок
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('commands.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT)");
});

module.exports = db;
