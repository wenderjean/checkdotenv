'use strict';

const Error = require('../../lib/errors');
const chalk = require('chalk');

describe('Errors', () => {

    const message = (withKeys) => {

        const keys = withKeys ? ['a', 'b'] : undefined;
        return chalk.red(`Environment variables ${keys} is not defined. Aborting.`);
    };

    describe('#get', () => {

        context('when keys is sent', () => {

            it('should return right message', (done) => {

                try {
                    Error.get(['a', 'b']);
                } catch(e) {
                    expect(e.message).to.equal(message(true));
                }
                done();
            });
        });

        context('when keys is not sent', () => {

            it('should return message without any variable name', (done) => {

                try {
                    Error.get();
                } catch(e) {
                    expect(e.message).to.equal(message(false));
                }
                done();
            });
        });
    });
});
