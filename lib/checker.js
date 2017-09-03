'use strict';

const Errors = require('./errors');
const Example = require('./example');

const check = (example = '.env.example') => {

    const missingVariables = Example.hasMissingVariables(example);

    if (missingVariables) {
        throw Errors.get(missingVariables);
    }

    return true;
};

module.exports = { check };
