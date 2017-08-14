'use strict';

module.exports = {
  extends: 'eslint-config-hapi',
  rules: {
    'camelcase': ['warn', { properties: 'never' }],
    'max-len': ['warn', { code: 100 }],
    'no-confusing-arrow': ['error', { 'allowParens': true }]
  }
};
