const
    pageNames = require('fs').readdirSync(__dirname),
    pages = pageNames.map(page => { return require(`./${page}`) });

module.exports = pages