# dboats-api
Easily interact with discordboats.club's API.

## Example Usage:

```js
const DiscordBoats = require("dboats-api");
const boats = new DiscordBoats({token: "YOUR-API-KEY-HERE"}); // Every bot has a diffrent api key.

// Getting your own bot.
boats.getBot("me").then(bot => console.log("This bot: ", bot));

// Posting your bot's guild count.
boats.postGuilds(1920).then(() => console.log("Posted guild count"));

// Getting a user (in this case, RONTheCookie.)
boats.getUser("142244934139904000").then(user => console.log("Got user", user));
```