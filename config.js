var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + base58 ID
config.webhost = 'https://api-projects-development-alishersuyunov.c9users.io:8080/';

// your MongoDB host and database name
config.db.host = 'localhost';
config.db.name = 'URL_shortener';

module.exports = config;