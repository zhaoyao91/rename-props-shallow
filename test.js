const rename = require('.')

describe('rename', () => {
  test('basic usage', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename({name: 'nickname'})(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual({
      nickname: 'bob',
      age: 20
    })
  })

  test('override', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename({name: 'age'})(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual({
      age: 'bob'
    })
  })

  test('undefined changes', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename()(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual(obj)
  })

  test('empty changes', () => {
    const obj = {name: 'bob', age: 20}
    const newObj = rename({})(obj)

    expect(newObj).not.toBe(obj)
    expect(newObj).toEqual(obj)
  })
})