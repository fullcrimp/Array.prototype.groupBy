module.exports = (fn = val => val) => array => array.reduce((acc, val) => (acc[fn(val)] = acc[fn(val)] ? [...acc[fn(val)], val] : [val]) ? acc : null, {})

