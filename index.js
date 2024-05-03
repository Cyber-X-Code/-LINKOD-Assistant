// Без поиска по базе данных

// const fs = require('fs');
// require('dotenv').config();
// const { Telegraf } = require('telegraf');
// const commands = require('./utils/commands');
// const { displayManText, botAction: manBotAction } = require('./utils/manCommands');
// const { displayHelpText, botAction: helpBotAction } = require('./utils/helpCommands');
// const manText = require('./utils/manLinkod');
// const helpText = require('./utils/helpLinkod');
// const halloMessages = require('./halloLinkod');

// const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.start(async (ctx) => {
//     const fullMessage = halloMessages.join('\n');

//     const photo = fs.readFileSync('./img/logo_bot.jpg');
    
//     // Отправляем изображение вместе с сообщением
//     await ctx.replyWithPhoto({ source: photo }, { caption: fullMessage });
// });

// bot.on('text', async (ctx) => {
//     if (ctx.message.text === 'linkod man') {
//         displayManText(ctx, 1);
//     } else if (ctx.message.text === 'linkod help') {
//         displayHelpText(ctx, 1);
//     } else {
//         await commands.handleMessage(ctx);
//     }
// });

// manBotAction(bot);
// helpBotAction(bot);

// bot.launch();
// console.log('Бот успешно запущен!');

// С поиском по базе данных

const fs = require('fs');
require('dotenv').config();
const { Telegraf } = require('telegraf');
const commands = require('./utils/commands');
const { displayManText, botAction: manBotAction } = require('./utils/manCommands');
const { displayHelpText, botAction: helpBotAction } = require('./utils/helpCommands');
const manText = require('./utils/manLinkod');
const helpText = require('./utils/helpLinkod');
const halloMessages = require('./halloLinkod');
const { searchInDatabase } = require('./utils/search');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    const fullMessage = halloMessages.join('\n');

    const photo = fs.readFileSync('./img/logo_bot.jpg');

    await ctx.replyWithPhoto({ source: photo }, { caption: fullMessage });
});

bot.on('text', async (ctx) => {
    if (ctx.message.text === 'linkod man') {
        displayManText(ctx, 1);
    } else if (ctx.message.text === 'linkod help') {
        displayHelpText(ctx, 1);
    } else if (ctx.message.text.startsWith('linkod search ')) {
        const keyword = ctx.message.text.replace('linkod search ', '');
        
        searchInDatabase(keyword, (results) => {
            if (results.length > 0) {
                const titles = results.map((row) => row.title).join('\n');
                ctx.reply(`Результаты по вашему поисковому запросу "${keyword}": \n\n${titles} \n\nДля прочтения информации наберите linkod и полное название поисковой выдачи. Например: linkod uabuntu. В случае, если в поисковой выдачи большое количества информации, попробуйте уточнить поисковый запрос, например, вместо просто команда, введите: команда ls.`);
            } else {
                ctx.reply(`По вашему запросу "${keyword}" ничего не найдено.`);
            }
        });
    } else {
        await commands.handleMessage(ctx);
    }
});

manBotAction(bot);
helpBotAction(bot);

bot.launch();
console.log('Бот успешно запущен!');
