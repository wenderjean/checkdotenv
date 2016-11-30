'use strict';

const _ = require('lodash');
const fs = require('fs');
const dotenv = require('dotenv');
const sep = require("path").sep;

const getDifferenceFromFileToProcess = (contents) => {

    const parsed = dotenv.parse(contents);
    return _.difference(Object.keys(parsed), Object.keys(process.env));
};

const check = (example = ".env.example") => {

    const filePath = `${process.cwd()}${sep}${example}`;
    const contents = fs.readFileSync(filePath);
    const difference = getDifferenceFromFileToProcess(contents);

    if (_.size(difference) > 0) {
        const joinedKeys = _.join(difference, ', ');
        throw new Error(`Environment variables ${joinedKeys} is not defined. Aborting.`);
    }

    return true;
};

module.exports = { check };
