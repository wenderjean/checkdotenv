'use strict';

const _ = require('lodash');
const Checker = require('../../lib/checker');

describe('Checker', () => {

    describe('#check', () => {

        context('when vars present in .env.example were not set', () => {

            it('should throw an exception', (done) => {

                const fn = () => Checker.check();
                expect(fn).to.throw(Error);
                done();
            });
        });

        context('when vars present in .env.example are all set', () => {

            beforeEach((done) => {

                _.merge(process.env, {
                    NODE_ENV: 'development',
                    DATABASE_URL: 'mysql://root:@127.0.0.1:3306/example',
                    REDIS_URL: 'redis://127.0.0.1:6379/0',
                    FIREBASE_PROJECT: 'example',
                    FIREBASE_SERVICE_ACCOUNT: 'firebase_credentials.json',
                    FIREBASE_DATABASE_URL: 'https://example.firebaseio.com',
                    FIREBASE_AUTH_UID: 'example'
                });
                done();
            });

            it('should return true', (done) => {

                expect(Checker.check()).to.equal(true);
                done();
            });
        });
    });
});
