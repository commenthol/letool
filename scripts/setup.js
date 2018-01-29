/* eslint no-console: 'off' */

const fs = require('fs')
const {relative, resolve} = require('path')
const sortPackageJson = require('sort-package-json')
const {merge} = require('../src')

const assets = resolve(__dirname, '..', 'config', 'setup')
const cwd = process.cwd()
const opts = {
  overwrite: process.argv.includes('-f')
}

function packageJson () {
  const targetPath = resolve(cwd, 'package.json')
  const target = require(targetPath)
  const source = require(resolve(assets, 'package.json'))
  const sorted = sortPackageJson(JSON.stringify(merge(target, source, opts)))
  if (target !== sorted) {
    console.log('  package.json changed"')
    fs.writeFileSync(targetPath, sorted, 'utf8')
  }
}

function dotFiles () {
  const DOT = /^dot(\..*)$/
  fs.readdirSync(assets)
    .filter((file) => DOT.test(file))
    .forEach((file) => {
      const target = DOT.exec(file)[1]
      _copy(`${assets}/${file}`, `${cwd}/${target}`, opts)
    })
}

function _copy (source, target, opts) {
  let hasFile
  try {
    hasFile = fs.statSync(target)
  } catch (e) {
    // console.log(e)
  }
  if (!hasFile || opts.overwrite) {
    console.log('  writing file "%s"', relative(cwd, target))
    fs.createReadStream(source).pipe(fs.createWriteStream(target))
  }
}

packageJson()
dotFiles()
