module.exports = function groupByFunction(fn) {
    return function(array) {

        if (!fn) fn = function(val){
            return val
        }
        
        var result = {}

        for (let index = 0; index < array.length; index++) {
            const element = array[index]
            const key = fn(element)

            if(!result[key]) {
                result[key] = []
            }
            result[key].push(element)
        }

        return result
    }
}
