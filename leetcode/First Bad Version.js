var solution = function(isBadVersion) {
    return function(n) {
    let first = 1
    let last = n
    let middle = ~~n/2
    while (first <= last) {
        middle = ~~((first+last)/2)
        if(isBadVersion(middle)) last = middle - 1
        else first = middle + 1 
    }
    return first
    }
}