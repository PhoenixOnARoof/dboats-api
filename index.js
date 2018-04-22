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
        // test the token:
        snek.get(base).set("Authorization", options.token).then(res => {
            if (res.status == 400 || res.status == 403) throw new Error("Invalid API Key");
        });
    }
    /**
     * Post your guild count to the Discordboats.club Public API.
     * @param {Number} server_count 
     * @returns {Promise} Promise that resolves if the request went through.
     */
    async postGuilds(server_count = 0) {
        await snek.post(base + "/bot/stats").set("Authorization", this.token).send({server_count});
    }
    /**
     * Get a user.
     * @param {String} id 
     */
    async getUser(id) {
        const res = await snek.get(base + "/user/" + id).set("Authorization", this.token).send();
        if (res.status == 200) {
            return res.body.data;
        } else {
            throw new Error(res.body.error || res.status);
        }
    }
    /**
     * Get a bot.
     * @param {String} id Or "me" if you want to get yourself.
     */
    async getBot(id) {
        const res = await snek.get(base + "/bot/" + id).set("Authorization", this.token).send();
        if (res.status == 200) {
            return res.body.data;
        } else {
            throw new Error(res.body.error || res.status);
        }
    }
}