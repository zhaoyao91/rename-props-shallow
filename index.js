module.exports = function (changes = {}) {
  return function (obj) {
    const newObj = Object.assign({}, obj)
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key]
          delete newObj[key]
          newObj[changes[key]] = value
        }
      }
    }
    return newObj
  }
}