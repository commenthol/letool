const {argv, bin, spawn} = require('../src')
const nyc = bin('nyc')

if (!argv.length) {
  argv.push(...('-r lcov -r text npm test'.split(' ')))
}

spawn(nyc, argv)
