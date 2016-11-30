# checkdotenv

This is a project aimed to verify if all environment variables previously wrote in a recipe like `.env.example` or other one of your choice were already setted in `process.env`.

## Dependencies

```bash
Node 6.4.0
```

## Install

```bash
npm install checkdotenv
```

## Usage

```bash
const checkdotenv = require('checkdotenv');

checkdotenv.check();
```

## Options

`check` may receive a parameter representing the recipe file where `env` vars are setted.

## Test

```bash
npm run test
```
