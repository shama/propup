var propup = module.exports = function propup(a, b, inc) {
  var done = 0
  for (var k in a) {
    if (!b.hasOwnProperty(k)) {
      done++
      continue
    }

    if (a[k] !== null && typeof a[k] === 'object') {
      if (propup(a[k], b[k], inc)) {
        done++
      }
      continue
    }

    if (typeof b[k] !== 'number') {
      done++
      continue
    }

    if (Math.abs(b[k]) >= Math.abs(a[k])) {
      done++
      continue
    }

    b[k] += inc
  }
  return done >= Object.keys(a).length
}
