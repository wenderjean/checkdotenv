'use strict';

const Errors = require('./errors');
const Example = require('./example');

const check = (example = ".env.example") => {

    const missedVariables = Example.isMissingVariables(example);

    if (missedVariables) {
        throw Errors.get(missedVariables);
    }

    return true;
};

module.exports = { check };
