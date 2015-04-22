var config = {};

config.mongoUri = 'mongodb://localhost:27017/rtr';

config.cookieMaxAge = 30 * 24 * 3600 * 1000;
config.ordrxKey = 'NDM3OWY0ZTJiMjZhMTA4OTdjNDgyNTVmMjAzMzA2YjAy';
config.address = {
    addr: '3444 Kossuth Ave',
    city: 'Bronx',
    zip: '10467',
    state: 'NY'
};
config.phone = '415-555-1234';

module.exports = config;