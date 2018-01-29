# letool

> master your npm devDependencies

Manage your development dependencies in one place for multiple packages, such saving you from copy-pasting boilerplate code.
It bundles some/my favourite dev tools for testing (mocha), code-coverage (nyc), linting (eslint-config-standard), transpiling (babel) ...

You are welcome to copy this code, rename the package name and change/ fill it with your favorite tools.

## Installation

```sh
npm i letool
```

## Commands

### setup

```sh
letool setup
# or
npx letool setup
```

Sets the required scripts in `package.json` of the current working directory and copies `.*ignore` files if not present in the folder.
Settings or files already present will not be overwritten, so use `letool setup -f` to force overwriting.

Check `./config/setup/package.json` which scripts and settings are put into `package.json`

```json
{
  "scripts": {
    "test": "letool mocha",
    "lint": "letool lint",
    "cover": "letool coverage",
    "build": "letool transpile"
  }
}
```

### mocha

Runs [mocha](https://www.npmjs.com/package/mocha).

### coverage

Runs [nyc](https://www.npmjs.com/package/nyc) using `npm test`

### lint

Runs [eslint](https://www.npmjs.com/package/eslint) with a default config in `./config/eslint.js`

### transpile

```sh
letool transpile
```

It uses [babel](https://www.npmjs.com/package/babel) with presets `env` and `stage-2` to transpile all es5/es6 code in `./src` to `./lib`.

## Files

```
├── bin
│   └── tool.js
├── config      // configuration files for `scripts`
│   └── setup   // setup assets
│       ├── dot.eslintrc.js
│       ├── dot.eslintignore
│       ├── dot.gitignore
│       ├── dot.npmignore
│       └── package.json  // package props for merging
├── scripts
│   ├── coverage.js
│   ├── lint.js
│   ├── mocha.js
│   ├── setup.js
│   └── transpile.js
└── src
```

## LICENSE

[Unlicense](https://unlicense.org)
