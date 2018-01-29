/* eslint no-console: 'off' */

const {spawn} = require('child_process')

module.exports = function (cmd, args, options) {
  args = args || []
  options = Object.assign({
    env: process.env,
    encoding: 'utf8',
    stdio: 'inherit'
  }, options)

  return new Promise((resolve) => {
    const proc = spawn(cmd, args, options)
    proc.on('error', (err) => {
      console.error('%s', err)
    })
    proc.on('exit', (code) => {
      resolve(code)
    })
  })
}
