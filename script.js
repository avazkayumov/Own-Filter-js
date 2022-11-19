Array.prototype.filter2 = function(cb) {
    console.log(cb);
    return this.reduce((collect, el, index, arr) => {
        let isValid = cb(el)
        if (isValid) {
            collect.push(el)
        }
        return collect
    }, [])
}

let a = [1,2,4,5,7,8]

console.log(a.filter2((el) => {
    if (el > 2) return true
    else return false
}))