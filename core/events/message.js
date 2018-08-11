const { inspect } = require('util');

let linkRegex = /https:\/\/(canary\.|ptb\.)?discordapp.com\/channels\/[0-9]{17,20}\/([0-9]{17,20})\/([0-9]{17,20})/;

/* jshint ignore:start */
module.exports = async (message) => {
    if (message.author.bot) return;

    let client = message.client;

    if ((message.author.id === '317047307839471616' || message.author.id === '179114344863367169') && message.content.startsWith('s!eval')) {
        const content = message.content.slice(7);
        try {
            let evaled = eval(content); // perfect lmao
            if (typeof evaled.then === 'function') {
                evaled.then(out => {
                    let inspected = inspect(out);
                    if (inspected.length > 1900) inspect = inspect.slice(0, -(inspected.length - 1900));
                    message.channel.send(`ouuutttpppuuuttt:\n\n\`\`\`js\n${inspected}\n\`\`\``);
                }).catch(e => {
                    message.channel.send('error you fucking nerd: \n```js' + e.stack ? e.stack : e + '```');
                })
            } else {
                let inspected = inspect(evaled);
                if (inspected.length > 1900) inspect = inspect.slice(0, -(inspected.length - 1900));
                message.channel.send(`ouuutttpppuuuttt:\n\n\`\`\`js\n${inspected}\n\`\`\``);
            }
        } catch (e) {
            message.channel.send('error you fucking nerd: \n```js' + e.stack ? e.stack : e + '```');
        }
        return;
    }

    if (!linkRegex.test(message.content)) return;

    let parsed = message.content.match(linkRegex);
    let channel = client.channels.get(parsed[2]);
    let jumpMessage;

    try {
        if (channel) jumpMessage = channel.messages.get(parsed[3]) || await channel.fetchMessage(parsed[3]);
        else return message.react("❌"); // add an error message for not having access to link
    } catch (e) {
        return;
    };

    message.channel.send({embed:{
        author: {
            name: jumpMessage.author.tag,
            icon_url: jumpMessage.author.displayAvatarURL
        },
        description: jumpMessage.content,
        timestamp: jumpMessage.createdAt,
        color: 0x7289DA
    }});
};
/* jshint ignore:end */