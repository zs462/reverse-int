module.exports = function reverse (n) {
    n = parseInt(n)
    n = Math.abs(n)
    let str = n.toString()
    let digits = str.split('');

    let res = []
    for (digit of digits) {
        res.unshift(digit)
    }
    return res.join('')
}
