const wdio = require('./wdio.base.conf.js');

exports.config = wdio.makeConfig(true);
exports.config.specs.push('./test/theia-docker/**/*spec.ts');

