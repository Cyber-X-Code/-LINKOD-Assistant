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
            buttons.push(Markup.button.callback('<<<', `prev_man_${pageNumber}`));
        }
        if (pageNumber < maxPages) {
            buttons.push(Markup.button.callback('>>>', `next_man_${pageNumber}`));
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

function botActionMan(bot) {
    bot.action(/^(prev|next)_man_(\d+)$/, (ctx) => {
        try {
            const [_, direction, pageNumber] = ctx.match;
            const newPageNumber = direction === 'prev' ? parseInt(pageNumber, 10) - 1 : parseInt(pageNumber, 10) + 1;
            ctx.answerCbQuery(); 
            displayManText(ctx, newPageNumber);
        } catch (error) {
            console.error(`Error in botActionMan function: ${error.message}`);
            fs.writeFile('error.log', `Error in botActionMan function: ${error.message}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.error(`Error writing to error.log: ${err.message}`);
                }
            });
        }
    });
}

module.exports = { displayManText, botActionMan };
