const fs = require('fs')
const {resolve} = require('path')

const bin = (tool) => {
  for (const p of module.paths) {
    try {
      const dir = resolve(p, '.bin')
      const files = fs.readdirSync(dir)
      if (files && files.includes(tool)) {
        return resolve(dir, tool)
      }
    } catch (e) {}
  }
  throw new Error(`tool "${tool}" not found!`)
}

module.exports = bin
