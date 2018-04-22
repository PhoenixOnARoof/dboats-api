const snek = require("snekfetch");
const base = "https://discordboats.club/api/public"
module.exports = class DiscordboatsClub {
    /**
     * Setup a new instance of the discordboats.club API Client.
     * @param {Object} options 
     * @param {String} options.token The API key for the API.
     */
    constructor(options = {}) {
        if (!options.token) throw new Error("You must pass in a token to the DiscordboatsClub constructor");
        this.token = options.token;
    }
    /**
     * Post your guild count to the Discordboats.club Public API.
     * @param {Number} server_count 
     * @returns {Promise} Promise that resolves if the request went through.
     */
    async postGuilds(server_count = 0) {
        await snek.get(base + "/bot/stats").set("Authorization", this.token).send({server_count});
    }
}