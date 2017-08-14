'use strict';

const _ = require('lodash');
const Chalk = require('chalk');

const get = (envs) => {

    const keys = envs ? _.join(envs, ', ') : '';
    let message = Chalk.red(`Environment variables ${keys} are not defined. Aborting.`);
    message = message.replace(/\s{2,}/, ' ');

    return new Error(message);
};

module.exports = { get };
