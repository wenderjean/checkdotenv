# `checkdotenv`
[![npm version](https://badge.fury.io/js/checkdotenv.svg)](https://www.npmjs.com/package/checkdotenv) [![Dependency Status](https://gemnasium.com/badges/github.com/wenderjean/checkdotenv.svg)](https://gemnasium.com/github.com/wenderjean/checkdotenv) [![Build Status](https://semaphoreci.com/api/v1/is/checkdotenv/branches/master/shields_badge.svg)](https://semaphoreci.com/is/checkdotenv)

It's a project intended to verify if all environment variables previously wrote in the recipe are already set in `process.env`.

## Dependencies

```bash
Node 6.4.0
```

## Install

```bash
npm install checkdotenv --save
```

## Usage

First, define a file `.env.example` in your project root and then put the line below in top the entry file of your application.

```bash
require('checkdotenv').check();
```

## Options

By default `checkdotenv` will looking for a recipe called `.env.example` but `check` method may receive a parameter to change that filename.

```bash
require('checkdotenv').check('yourfilename');
```

## Test

```bash
npm run test
```
