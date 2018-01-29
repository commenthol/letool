#!/usr/bin/env node

/* eslint no-console: 'off' */

const fs = require('fs')
const {version} = require('../package.json')

const arg0 = process.argv.length > 1 ? process.argv[2] : undefined
const script = `${__dirname}/../scripts/${arg0}.js`

fs.stat(script, (err) => {
  // console.log('%s %s', script, err)
  if (!err) {
    require(script)
  } else {
    switch (arg0) {
      case '--version': {
        console.log(version)
        break
      }
      default: {
        console.error(`Unknown script "${arg0}".`)
        process.exit(1)
      }
    }
  }
})
