const {argv, bin, spawn} = require('../src')
const eslint = bin('eslint')
const sortPackageJson = bin('sort-package-json')

spawn(eslint, ['--cache', '**/*.js'].concat(argv))
  .then(() => spawn(sortPackageJson))
