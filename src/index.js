const {name} = require('../package.json')
const bin = require('./bin')
const {merge} = require('./merge')
const spawn = require('./spawn')

const argv = process.argv.slice(3)
const debug = (script) => require('debug')(`${name}:${script}`)

module.exports = {
  argv,
  bin,
  merge,
  spawn,
  debug
}
