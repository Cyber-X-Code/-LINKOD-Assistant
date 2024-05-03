const fs = require('fs');
const { Markup } = require('telegraf');
const db = require('./database');

// Функция для обработки сообщений от пользователя
async function handleMessage(ctx) {
    const message = ctx.message.text;
    const chatId = ctx.message.chat.id;

    try {
        if (message.toLowerCase().includes('linkod')) {
            const command = message.replace(/linkod /i, '');

            db.get(`SELECT * FROM commands WHERE LOWER(title) = LOWER(?)`, [command.toLowerCase()], (err, row) => {
                if (err) {
                    console.error(err);
                    ctx.reply('Произошла ошибка при поиске ответа в базе данных.')
                        .catch((error) => console.error('Ошибка при отправке сообщения:', error));
                    return;
                }

                if (row) {
                    const { title, description, image } = row;

                    if (image) {
                        ctx.replyWithPhoto({ source: image }, {
                            caption: `<b>${title}</b>\n${description}`,
                            parse_mode: 'HTML'
                        }).catch((error) => console.error('Ошибка при отправке изображения:', error));
                    } else {
                        ctx.replyWithHTML(`<b>${title}</b>\n${description}`);
                    }
                } else {
                    ctx.reply('В моей базе нет ответа на этот вопрос. Посмотрите справку по всем моим возможностям. Что бы вызвать справку, наберите: /start.');
                }
            });
        }
    } catch (error) {
        console.error(`Error in handleMessage function: ${error.message}`);
        fs.writeFile('error.log', `Error in handleMessage function: ${error.message}\n`, { flag: 'a' }, (err) => {
            if (err) {
                console.error(`Error writing to error.log: ${err.message}`);
            }
        });
    }
}

module.exports = {
    handleMessage,
};
