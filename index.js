/*
 * ShortJump
 * © Gymnophoria & GlitchMasta47, 2018
 * All rights perfectly reserved for our (mis)use
 */

let Discord = require('discord.js');
let config = require('./core/config.json');
let logger = require("./core/func/logger");

logger.info("Booting");

// ofc there's not a client.on('message'), go fuck yourself

let client = new Discord.Client({
    fetchAllMembers: true,
    disabledEvents: ["TYPING_START"],
    disableEveryone: true
});

client.login(config.token);