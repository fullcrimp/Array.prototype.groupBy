module.exports = (fn = val => val) => 
    (array, key) => 
        array.reduce((acc, val) => 
            (
                Number.isFinite(key = fn(val)) &&
                (acc[key] = acc[key] ? [...acc[key], val] : [val])
            ) ? acc : acc
        , {})
