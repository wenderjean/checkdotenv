'use strict';

const fs = require('fs');
const _ = require('lodash');
const Checker = require('../../lib/checker');

describe('Checker', () => {

    const NOT_SET_ERROR = "Environment variables DATABASE_URL, REDIS_URL, FIREBASE_PROJECT, FIREBASE_SERVICE_ACCOUNT, FIREBASE_DATABASE_URL, FIREBASE_AUTH_UID is not defined. Aborting.";

    describe('#exists', () => {

        context('when .env.example exists', () => {

            context('when vars present in .env.example were not setted', () => {

                it('should throw an exception', (done) => {
                    try {
                        Checker.check();
                    } catch(e) {
                        expect(e.message).to.equal(NOT_SET_ERROR);
                    }
                    done();
                });
            });

            context('when vars present in .env.example are all setted', () => {

                beforeEach((done) => {

                    _.merge(process.env, {
                        NODE_ENV: "development",
                        DATABASE_URL: "mysql://root:@127.0.0.1:3306/is-example",
                        REDIS_URL: "redis://127.0.0.1:6379/0",
                        FIREBASE_PROJECT: "is-example",
                        FIREBASE_SERVICE_ACCOUNT: "firebase_credentials.json",
                        FIREBASE_DATABASE_URL: "https://is-example.firebaseio.com",
                        FIREBASE_AUTH_UID: "is-example"
                    });
                    done();
                });

                afterEach((done) => {

                    done();
                });

                it('should return true', (done) => {

                    expect(Checker.check()).to.equal(true);
                    done();
                });
            });
        });

        context('when .env.example does not exists', () => {

            it('should throw an exception', (done) => {
                try {
                    Checker.check(".env.test");
                } catch(e) {
                    expect(e.code).to.equal("ENOENT");
                }
                done();
            });
        });
    });
});
