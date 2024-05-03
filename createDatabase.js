// // const sqlite3 = require('sqlite3').verbose();

// // // Создание и подключение к базе данных
// // const db = new sqlite3.Database('commands.db');

// // const posts = [
// //     {
// //         title: 'Команда',
// //         description: `
// // Nitrux 3.4.1 работает на ядре Linux 6.8 с версией Liquorix, в новом релизе представлены новые инструменты и драйверы, вот некоторые из них:

// // OpenRazer: драйверы для поддержки устройств Razer,
// // Gamescope: менеджер окон SteamOS,
// // fprint: поддержка устройств считывания отпечатков пальцев.

// // Также в дистрибутив включены инструменты для диагностики энергопотребления, DebugFS и Safe-rm
// //         `,
// //         image: './img/12.jpg'
// //     },
// //     // Можете добавить другие посты здесь, если нужно
// // ];

// // db.serialize(() => {
// //     db.run('CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, title TEXT, description TEXT)');
// //     const stmt = db.prepare('INSERT INTO commands (image, title, description) VALUES (?, ?, ?)');
    
// //     // Итерируемся по массиву постов и добавляем их в базу данных
// //     posts.forEach(post => {
// //         stmt.run(post.image, post.title, post.description);
// //     });
    
// //     stmt.finalize();
// // });

// // db.close();





// const sqlite3 = require('sqlite3').verbose();

// // Создание и подключение к базе данных
// const db = new sqlite3.Database('commands.db');

// const posts = [
//     {
//         title: 'Команда',
//         description: `
// Nitrux 3.4.1 работает на ядре Linux 6.8 с версией Liquorix, в новом релизе представлены новые инструменты и драйверы, вот некоторые из них:

// OpenRazer: драйверы для поддержки устройств Razer,
// Gamescope: менеджер окон SteamOS,
// fprint: поддержка устройств считывания отпечатков пальцев.

// Также в дистрибутив включены инструменты для диагностики энергопотребления, DebugFS и Safe-rm
//         `,
//         image: './img/12.jpg'
//     },
//     // Можете добавить другие посты здесь, если нужно
// ];

// db.serialize(() => {
//     db.run('CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, title TEXT, description TEXT)');
//     const stmt = db.prepare('INSERT INTO commands (image, title, description) VALUES (?, ?, ?)');
    
//     // Итерируемся по массиву постов и добавляем их в базу данных
//     posts.forEach(post => {
//         stmt.run(post.image, post.title, post.description);
//     });
    
//     stmt.finalize();
// });

// db.close();

// const sqlite3 = require('sqlite3').verbose();

// // Создание и подключение к базе данных
// const db = new sqlite3.Database('commands.db');

// const posts = [
//     {
//         title: 'Команда id',
//         description: `

//         Команда "id" в терминале показывает ваш идентификатор пользователя (UID) и группы (GID), что полезно для проверки привилегий или получения информации о вашем аккаунте. Примеры использования:

//         "id" - отобразит UID, GID и список групп.
//         "id <username>" - показывает информацию о другом пользователе.
//         "id -g" - покажет идентификаторы групп текущего пользователя.
        
//         Для вызлва справки наберите команду: id --help.
//         `,
//         image: './img/command_id1.png'
//     },
//     // Можете добавить другие посты здесь, если нужно
// ];

// db.serialize(() => {
//     db.run('CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, title TEXT, description TEXT)');
//     const stmt = db.prepare('INSERT INTO commands (image, title, description) VALUES (?, ?, ?)');
    
//     posts.forEach(post => {
//         stmt.run(post.image, post.title.toLowerCase(), post.description);
//     });
    
//     stmt.finalize();
// });

// db.close();


// Без картинок
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('commands.db');

const posts = [
    {
        title: 'Команда gzip',
        description: `
     
Команда "gzip" в Linux используется для сжатия файлов с целью экономии места на диске или ускорения передачи файлов по сети. Она работает путем сжатия содержимого файла, делая его более компактным. Вот примеры использования команды "gzip":

Сжатие файла:
        
gzip file.txt
        
Эта команда сожмет файл "file.txt" и создаст сжатый файл "file.txt.gz".
        
Распаковка сжатого файла:
        
gzip -d file.txt.gz
        
Этот пример распакует сжатый файл "file.txt.gz" в исходный файл "file.txt".
        
Сжатие нескольких файлов:
        
gzip file1.txt file2.txt
        
Эта команда сжимает несколько файлов одновременно.
        
Распаковка с сохранением сжатого файла:
        
gzip -dk file.txt.gz
        
Этот пример распакует файл "file.txt.gz" и оставит оригинал без удаления.
        
Сжатие рекурсивно в каталоге:
        
gzip -r directory/
        
Этот выход будет сжимать все файлы в указанном каталоге и его подкаталогах.
        
Проверка сжатия без изменения файла:
        
gzip -t file.txt.gz
        
Эта команда проверит целостность и сжатие файла "file.txt.gz".
        
Отображение информации о сжатом файле:
        
gzip -l file.txt.gz
        
Этот пример покажет информацию о сжатом файле, включая его размер и коэффициент сжатия.
        
Команда "gzip" позволяет сжимать и распаковывать файлы для оптимизации использования дискового пространства и ускорения передачи данных. Использование этой команды полезно в администрировании систем и обмене файлами, особенно если необходимо работать с большими объемами данных.
        
                                                         
        `
    },
    // Можете добавить другие посты здесь, если нужно
];

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS commands (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT)');
    const stmt = db.prepare('INSERT INTO commands (title, description) VALUES (?, ?)');
    
    posts.forEach(post => {
        stmt.run(post.title.toLowerCase(), post.description);
    });
    
    stmt.finalize();
});

db.close();
