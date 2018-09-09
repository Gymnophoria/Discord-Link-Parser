/*
 * ShortJump
 * © Gymnophoria & GlitchMasta47, 2018
 * All rights perfectly reserved for our (mis)use
 */

let Discord = require('discord.js');
let config = require('./core/config.json');
let logger = require('./core/func/logger');
let admincheck = require('./core/func/admincheck');
let messageEvent = require('./core/events/message');

global.debug = false; // enable to get like *almost* everything the client is doing in the terminal
global.logger = logger; // hey I want to log shit in... other files
global.admincheck = admincheck; // I also probably don't want to use a lot of ifs for checking user ids

logger.info('Booting');

let client = new Discord.Client({
    fetchAllMembers: true,
    disabledEvents: ['TYPING_START'],
    disableEveryone: true
});

client.on('ready', () => {
    logger.info(`I'm ready, I'm ready, I'm ready for work! I've got ${client.guilds.size} guilds and ${client.users.size} users!`);
});

client.on('debug', (info) => {
    if (debug) return logger.warn(info);
});

client.on('message', messageEvent);

client.login(config.token).catch((something) => {
    logger.error('Try... turning on your internet?');
});
