module.exports = (fn = (val => val)) => 
    (array) => 
        array.reduce((acc, val) => {
            let key = fn(val)
            acc[key] = acc[key] ? [...acc[key], val] : [val]
            return acc
        }, {})

