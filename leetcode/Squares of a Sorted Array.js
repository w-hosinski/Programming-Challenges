const sortedSquares = nums => {
    let result = nums.map(n => n*n)
    result.sort((a,b) => a-b)
    return result
}