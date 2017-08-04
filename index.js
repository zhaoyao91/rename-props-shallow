module.exports = function (changes = {}) {
  return function (obj) {
    const newObj = {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = changes.hasOwnProperty(key) ? changes[key] : key
        newObj[newKey] = obj[key]
      }
    }
    return newObj
  }
}