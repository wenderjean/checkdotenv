'use strict';

require('dotenv').config({ silent: true });

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

global.describe = lab.describe;
global.context = lab.describe;
global.it = lab.it;
global.beforeEach = lab.beforeEach;
global.before = lab.before;
global.after = lab.after;
global.afterEach = lab.afterEach;
global.expect = Code.expect;
