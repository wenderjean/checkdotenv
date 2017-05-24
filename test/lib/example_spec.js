'use strict';

const Example = require('../../lib/example');

describe('Example', () => {

    let wrapper;

    describe('#isMissingVariables', () => {

        beforeEach((done) => {

            wrapper = () => Example.isMissingVariables(".env.sample");
            done();
        });

        context('when .env.example does not exists', () => {

            it('should throw an exception', (done) => {

                expect(wrapper).to.throw(Error);
                done();
            });
        });
    });
});
