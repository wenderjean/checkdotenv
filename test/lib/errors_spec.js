'use strict';

const Errors = require('../../lib/errors');

describe('Errors', () => {

    let error;

    describe('#get', () => {

        context('when keys is sent', () => {

            before((done) => {

                error = Errors.get(['a', 'b']);
                done();
            });

            it('returns an error', (done) => {

                expect(error).to.be.instanceof(Error);
                done();
            });

            it('returns message with variable names', (done) => {

                const msgRe = /Environment variables a, b are not defined. Aborting./;
                expect(error.message).to.match(msgRe);
                done();
            });
        });

        context('when keys is not sent', () => {

            before((done) => {

                error = Errors.get();
                done();
            });

            it('returns an error', (done) => {

                expect(error).to.be.instanceof(Error);
                done();
            });

            it('should return message without any variable name', (done) => {

                const msgRe = /Environment variables are not defined. Aborting./;
                expect(error.message).to.match(msgRe);
                done();
            });
        });
    });
});
