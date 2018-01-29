
module.exports = {
  merge
}

const type = (a) => toString.call(a).match(/^\[\S+ (.*)\]/)[1]

/**
* merging objects
*/
function merge (target, source, opts = {}) {
  if (type(source) === 'Object') {
    Object.keys(source).forEach((prop) => {
      if (!target) target = {}
      if (opts.overwrite || !target[prop] || type(source[prop]) === 'Object') {
        target[prop] = merge(target[prop], source[prop], opts)
      }
    })
  } else {
    target = source
  }
  return target
}
