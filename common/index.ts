const
    page = require('fs').readdirSync(__dirname),
    common = page.map(page => { return require(`./${page}`) });

module.exports = common