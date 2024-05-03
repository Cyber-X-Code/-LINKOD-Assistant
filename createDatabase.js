// С картинками

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
        title: 'Ubuntu 24.04',
        description: `
Далее вы можете выбрать что устанавливать или нет, тут все индивидуально и зависит от ваших предпочтений. Например, вы можете не удалять Firefox который поставляется в snap пакете, а установить другой браузер и работать в нем.
Обновляем списки пакетов:

sudo apt update 
        
Подключаем 32 битные пакеты и выполняем обновление списков пакетов и системы:

sudo dpkg --add-architecture i386 && sudo apt update && sudo apt dist-upgrade -y
        
Обновляем snap пакеты:

sudo snap refresh
        
Удаляем snap версию Firefox и ставим deb:

sudo snap remove firefox
sudo install -d -m 0755 /etc/apt/keyrings
        
wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null
        
echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null
        
sudo nano /etc/apt/preferences.d/mozilla
        
Package: *
Pin: origin packages.mozilla.org
Pin-Priority: 1000
        
        
sudo apt update && sudo apt install firefox firefox-l10n-ru
        
Подключаем мультимедиа:
sudo apt install ubuntu-restricted-extras  -y
        
Устанавливаем архиваторы:

sudo apt install p7zip-rar rar unrar unace arj cabextract -y
        
Подключаем репозиторий для NVIDIA:

sudo add-apt-repository ppa:graphics-drivers/ppa -y && sudo apt update
        
ubuntu-drivers devices
        
Устанавливаем дополнительные утилиты для кастомизации:
sudo apt install gnome-tweaks -y
sudo apt install chrome-gnome-shell
sudo apt install gnome-shell-extensions
sudo apt install gnome-shell-extension-manager
        
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
