const {argv, bin, spawn} = require('../src')
const babel = bin('babel')

if (!argv.length) {
  argv.push(...(['-d', 'lib', 'src']))
}

spawn(babel, argv)
