// С логированием ошибок:

const fs = require('fs');
require('dotenv').config();
const { Telegraf } = require('telegraf');
const commands = require('./utils/commands');
const { displayManText, botActionMan: manBotAction } = require('./utils/manCommands');
const { displayHelpText, botActionHelp: helpBotAction } = require('./utils/helpCommands');
const manText = require('./utils/manLinkod');
const helpText = require('./utils/helpLinkod');
const halloMessages = require('./halloLinkod');
const { searchInDatabase } = require('./utils/search');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    const fullMessage = halloMessages.join('\n');
    
    const photo = fs.readFileSync('./img/logo_bot.jpg');

    try {
        await ctx.replyWithPhoto({ source: photo }, { caption: fullMessage });
    } catch (error) {
        console.error(`Error in bot start: ${error.message}`);
        fs.writeFile('error.log', `Error in bot start: ${error.message}\n`, { flag: 'a' }, (err) => {
            if (err) {
                console.error(`Error writing to error.log: ${err.message}`);
            }
        });
    }
});

bot.on('text', async (ctx) => {
    if (ctx.message.text === 'linkod man') {
        displayManText(ctx, 1);
    } else if (ctx.message.text === 'linkod help') {
        displayHelpText(ctx, 1);
    } else if (ctx.message.text.startsWith('linkod search ')) {
        const keyword = ctx.message.text.replace('linkod search ', '');

        try {
            searchInDatabase(keyword, (results) => {
                if (results.length > 0) {
                    const titles = results.map((row) => row.title).join('\n');
                    ctx.reply(`Результаты по вашему поисковому запросу "${keyword}": \n\n${titles} \n\nДля прочтения информации наберите linkod и полное название поисковой выдачи. Например: linkod uabuntu. В случае, если в поисковой выдачи большое количество информации, попробуйте уточнить поисковый запрос, например, вместо просто команда, введите: команда ls.`);
                } else {
                    ctx.reply(`По вашему запросу "${keyword}" ничего не найдено.`);
                }
            });
        } catch (error) {
            console.error(`Error in searchInDatabase function: ${error.message}`);
            fs.writeFile('error.log', `Error in searchInDatabase function: ${error.message}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.error(`Error writing to error.log: ${err.message}`);
                }
            });
        }
    } else {
        await commands.handleMessage(ctx);
    }
});

manBotAction(bot);
helpBotAction(bot);

bot.launch();
console.log('Бот успешно запущен!');
