'use strict';

const Example = require('../../lib/example');

describe('Example', () => {

    describe('#isMissingVariables', () => {

        context('when .env.example does not exists', () => {

            it('should throw an exception', (done) => {

                try {
                    Example.isMissingVariables(".env.sample");
                } catch(e) {
                    expect(e.code).to.equal("ENOENT");
                }
                done();
            });
        });
    });
});
