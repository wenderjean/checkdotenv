'use strict';

const Example = require('../../lib/example');

describe('Example', () => {

    describe('#hasMissingVariables', () => {

        context('when .env.example does not exists', () => {

            it('should throw a file not found error', (done) => {

                const fn = () => Example.hasMissingVariables('.env.sample');
                expect(fn).to.throw(Error, /ENOENT/);
                done();
            });
        });
    });
});
