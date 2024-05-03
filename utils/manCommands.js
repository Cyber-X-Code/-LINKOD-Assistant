const { Markup } = require('telegraf');
const manText = require('./manLinkod');

function displayManText(ctx, pageNumber) {
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
}

function botAction(bot) {
    bot.action(/^(prev|next)_(\d+)$/, (ctx) => {
        const [_, direction, pageNumber] = ctx.match;
        const newPageNumber = direction === 'prev' ? parseInt(pageNumber, 10) - 1 : parseInt(pageNumber, 10) + 1;
        ctx.answerCbQuery(); // Remove the button highlight
        displayHelpText(ctx, newPageNumber);
    });
}

module.exports = { displayManText, botAction };
