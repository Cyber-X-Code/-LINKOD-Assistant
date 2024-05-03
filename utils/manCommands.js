const fs = require('fs');
const { Markup } = require('telegraf');
const manText = require('./manLinkod');

function displayManText(ctx, pageNumber) {
    try {
        const itemsPerPage = 15;
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const currentManLines = manText.slice(startIndex, endIndex);

        const maxPages = Math.ceil(manText.length / itemsPerPage);

        const buttons = [];
        if (pageNumber > 1) {
            buttons.push(Markup.button.callback('<<<', `prev_${pageNumber}`));
        }
        if (pageNumber < maxPages) {
            buttons.push(Markup.button.callback('>>>', `next_${pageNumber}`));
        }

        const keyboard = Markup.inlineKeyboard(buttons);
        ctx.reply(currentManLines.join('\n'), keyboard);
    } catch (error) {
        console.error(`Error in displayManText function: ${error.message}`);
        fs.writeFile('error.log', `Error in displayManText function: ${error.message}\n`, { flag: 'a' }, (err) => {
            if (err) {
                console.error(`Error writing to error.log: ${err.message}`);
            }
        });
    }
}

function botAction(bot) {
    bot.action(/^(prev|next)_(\d+)$/, (ctx) => {
        try {
            const [_, direction, pageNumber] = ctx.match;
            const newPageNumber = direction === 'prev' ? parseInt(pageNumber, 10) - 1 : parseInt(pageNumber, 10) + 1;
            ctx.answerCbQuery(); 
            displayManText(ctx, newPageNumber);
        } catch (error) {
            console.error(`Ошибка в функции botAction: ${error.message}`);
            fs.writeFile('error.log', `Ошибка в функции botAction: ${error.message}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.error(`Ошибка при записи в error.log: ${err.message}`);
                }
            });
        }
    });
}


module.exports = { displayManText, botAction };

