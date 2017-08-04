# Rename Props Shallow

Rename js object fields and return a shallow copy.

## Installation

```
npm i -S rename-props-shallow
```

## Usage

```
const rename = require('rename-props-shallow')

const obj = {name: 'Bob', sex: 'male', age: 20}

const newObj = rename({'name': 'nickname', 'sex': 'gender'})(obj)
// newObj is {nickname: 'Bob', gender: 'male', age: 20}

const objs = [{name: 'Bob'}, {name: 'Alice'}]
const newObjs = objs.map(rename({'name': 'nickname'}))
// newObjs is [{nickname: 'Bob'}, {nickname: 'Alice'}]
```

## License

MIT