const fs = require('fs');
const { Markup } = require('telegraf');
const helpText = require('./helpLinkod');

function displayHelpText(ctx, pageNumber) {
    try {
        const itemsPerPage = 15;
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const currentHelpLines = helpText.slice(startIndex, endIndex);

        const maxPages = Math.ceil(helpText.length / itemsPerPage);

        const buttons = [];
        if (pageNumber > 1) {
            buttons.push(Markup.button.callback('<<<', `prev_${pageNumber}`));
        }
        if (pageNumber < maxPages) {
            buttons.push(Markup.button.callback('>>>', `next_${pageNumber}`));
        }

        const keyboard = Markup.inlineKeyboard(buttons);
        ctx.reply(currentHelpLines.join('\n'), keyboard);
    } catch (error) {
        console.error(`Error in displayHelpText function: ${error.message}`);
        fs.writeFile('error.log', `Error in displayHelpText function: ${error.message}\n`, { flag: 'a' }, (err) => {
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
            ctx.answerCbQuery(); // Remove the button highlight
            displayHelpText(ctx, newPageNumber);
        } catch (error) {
            console.error(`Error in botAction function: ${error.message}`);
            fs.writeFile('error.log', `Error in botAction function: ${error.message}\n`, { flag: 'a' }, (err) => {
                if (err) {
                    console.error(`Error writing to error.log: ${err.message}`);
                }
            });
        }
    });
}

module.exports = { displayHelpText, botAction };
